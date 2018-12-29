<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
                {{closeButton.text}}
            </span>
        </div>
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
                    ${this.$refs.toast.getBoundingClientRect().height}px `
                })
            },
            close () {
                this.$el.remove()
                this.$emit('close')
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
    $animation-duration: 300ms;
    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes slide-up {
        0% { opacity: 0; transform: translateY(100%); }
        100% { opacity: 1; transform: translateY(0%);}
    }
    @keyframes slide-down {
        0% { opacity: 0; transform: translateY(-100%); }
        100% { opacity: 1; transform: translateY(0%);}
    }
    .wrapper {
        position: fixed; left: 50%;
        transform: translateX(-50%);


        &.position-top {
            top: 0;
            .toast {
                animation: slide-down $animation-duration;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            .toast {
                animation: fade-in $animation-duration;
            }

        }
        &.position-bottom{
            bottom: 0;
            .toast {
                animation: slide-up $animation-duration;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }
    .toast {
        font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
        display: flex; align-items: center;
        color: #FFFFFF; padding: 0 13px; border-radius: 3px;
        background: $toast-bg; box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        >.message { padding: 8px 0;}
        >.line {
            height: 100%; border-left: 1px solid #666666; margin: 0 8px;
        }
        >.close { flex-shrink: 0; }
    }
</style>