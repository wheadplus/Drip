<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper"
            :class="{[`position-${position}`]:true}" v-if="visible">
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
        props: {
          position: {
              type: String,
              default: 'top',
              validator (value) {
                  return ['top', 'bottom', 'right', 'left'].indexOf(value) >= 0
              }
          },
          trigger: {
              type: String,
              default: 'click',
              validator (value) {
                  return ['click', 'hover'].indexOf(value) >= 0
              }
          }
        },
        mounted() {

            if (this.trigger === 'hover') {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.trigger === 'hover') {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(this.$refs.contentWrapper)
                const {height, width, top, left} = triggerWrapper.getBoundingClientRect()
                const  height2 = contentWrapper.getBoundingClientRect().height
                let positons = {
                    top : {left : left + window.scrollX, top : top + window.scrollY},
                    bottom : {left : left + window.scrollX, top : top + height + window.scrollY},
                    left : {
                        left : left + window.scrollX,
                        top : top + window.scrollY + (height - height2) / 2
                    },
                    right : {
                        left : left + width + window.scrollX,
                        top : top + window.scrollY + (height - height2) / 2
                    }
                }
                contentWrapper.style.left = positons[this.position].left + 'px'
                contentWrapper.style.top = positons[this.position].top + 'px'
            },
            onClickDocument(e){
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) { return }
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
                if(this.trigger === 'hover') {return}
                if(this.$refs.triggerWrapper.contains(event.target)) {
                    if(this.visible === false) {
                        this.open()
                    } else  {
                        this.close()
                    }
                }
            }
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
        padding: .5em 1em;

        max-width: 20em;
        word-break: break-all;

        &::before,&::after {
            content: "";
            display: block;
            border: 10px solid transparent;
            width: 0;
            position: absolute;

        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before,&::after {
                left: 10px;
                border-bottom: none;
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
        &.position-bottom {
            margin-top: 10px;
            &::before,&::after {
                left: 10px;
                border-top: none;
            }
            &::before {
                border-bottom-color: black;
                bottom: 100%;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before,&::after {
                transform: translateY(-50%);
                top: 50%;
                border-right: none;
            }
            &::before {
                border-left-color: black;
                left: 100%;
            }
            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
                border-left: none;
            }
            &::before {
                border-right-color: black;
                right: 100%;
            }
            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
</style>