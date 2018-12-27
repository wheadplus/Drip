<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
                        text: '关闭', callback: (toast) => {toast.close()}
                    }
                }
            }
        },
        mounted() {
            if(this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close () {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                this.closeButton.callback()
            }
        }
    }
</script>

<style lang="scss" scoped="">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,0.74);
    .toast {
        font-size: $font-size; line-height: 1.8; height: $toast-height;
        position: fixed; top: 0; left: 50%; transform: translateX(-50%);
        display: flex; align-items: center;
        color: #FFFFFF; padding: 0 13px; border-radius: 3px;
        background: $toast-bg; box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        >.line {
            height: 100%;
            border-left: 1px solid #666666;
            margin: 0 8px;
        }
    }
</style>