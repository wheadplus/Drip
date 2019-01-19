<template>
    <div class="d-slides">
        <div class="d-slides-window"></div>
        <div class="d-slides-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "d-slices",
        data() {
            return {}
        },
        mounted() {
            let first = this.$children[0]
            let second = this.$children[1]
            first.visible = true
            setTimeout(()=> {
                first.visible = false
                second.visible = true
            },3000)
        }
    }
</script>

<style lang="scss" scope>
    .d-slides {
        display: inline-flex;
        border: 1px solid red;
        &-window {

        }
        &-wrapper {
            position: absolute;
        }
    }
</style>