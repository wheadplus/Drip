<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default  {
        name: "drip-toast",
        props: {
            autoClose: {type: false, default: true},
            autoCloseDelay: {type: Number, default: 500},
            closeButton: {
                type: Object,
                default () {
                    return  {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default : false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top','bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.exeAutoClose()
            this.updateLineHeight()
            console.log(this.position , 'here')
        },
        methods: {
            exeAutoClose() {
                if(this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateLineHeight() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `
                    ${this.$refs.wrapper.getBoundingClientRect().height}px `
                })
            },
            close () {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === "function") {
                    this.closeButton.callback(this)
                }

            }
        },
        computed: {
            toastClasses() {
                return [`position-${this.position}`]
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0,0.74);
    .toast {
        &.position-top {
           top: 0;
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
        &.position-bottom{
            bottom: 0;
        }
        font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
        position: fixed; left: 50%; transform: translateX(-50%);
        display: flex; align-items: center;

        color: #FFFFFF; padding: 0 13px; border-radius: 3px;
        background: $toast-bg; box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        >.message { padding: 8px 0;}
        >.line {
            height: 100%;
            border-left: 1px solid #666666;
            margin: 0 8px;
        }
        >.close {
            flex-shrink: 0;
        }
    }
</style>