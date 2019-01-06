<template>
    <div class="popover" @click="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data () {
            return { visible: false }
        },
        methods: {
            xxx() {
                this.visible = !this.visible
                console.log('切换visible')

                if(this.visible === true) {

                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        console.log('添加监听器');
                        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        console.log(top, left)
                        console.log(window.scrollX,window.scrollY);
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                        let x = () => {
                            this.visible = false
                            document.removeEventListener('click', x)
                            console.log('删除监听器');
                            console.log('点击body关闭popover');

                        }
                        document.addEventListener('click', x)
                    })
                }
            }
        },
        mounted() {

            console.log(this.$refs);
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: middle;
        position: relative;


    }
    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        transform: translateY(-100%);
    }
</style>