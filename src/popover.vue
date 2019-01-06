<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="trigger-wrapper"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data () {
            return { visible: false }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e){
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if(this.$refs.triggerWrapper.contains(event.target)) {
                    if(this.visible === false) {
                        this.open()
                    } else  {
                        this.close()
                    }
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: middle;
        position: relative;

        >.trigger-wrapper {
            display: inline-block;
        }
    }
    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, .5);*/
        filter:  drop-shadow(0 0 3px rgba(0, 0, 0, .5));
        background-color: white;
        transform: translateY(-100%);
        padding: .5em 1em;
        margin-top: -10px;
        max-width: 20em;
        word-break: break-all;
        &::before,&::after {
            content: "";
            display: block;
            border: 10px solid transparent;
            width: 0;
            position: absolute;
            left: 10px;
        }
        &::before {
            border-top-color: black;
            top: 100%;
        }
        &::after {
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
</style>