<template>
    <transition name="slide">
        <div class="d-slides-item" v-if="visible">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name: "Drip-slides-item",
        data() {
            return {
                visible: false
            }
        }
    }
</script>

<style lang="scss" scope>
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .slide-enter-active {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .slide-enter {
        transform: translateX(100%);

    }
    .slide-leave-to {
        transform: translateX(-100%);
    }
</style>