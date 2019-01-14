<template>
    <button class="d-button" :class="[`icon-${iconPosition}`]"
        @click="$emit('click')">
        <d-icon class="icon" v-if="icon && !loading" :name="icon">
        </d-icon>
        <d-icon class="loading" v-if="loading" name="loading"></d-icon>
        <div class="d-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        components: {'d-icon': Icon},
        name: "drip-button",
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: "left",
                validator: function (value) {
                    return !(value !== "left" && value !== "right");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    @keyframes spin {
        0% {transform: rotate(0deg); }
        100% {transform: rotate(360deg); }
    }
    
    .d-button {
        font-size: $font-size;  height: $button-height;
        background-color: $button-bg;  padding: 0 1em;
        border-radius: $border-radius;  border: 1px solid $border-color-hover;
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;/*解决对齐问题*/
        &:hover {  border-color: $border-color-hover;  }
        &:active {  background-color: $button-active-bg;  }
        &:focus {  outline: none;  }
        >.icon {  order: 1; margin-right: .4em; }
        >.d-button-content {  order: 2;  }
        &.icon-right {
            > .icon {  order: 2;  margin-left: .4em; margin-right: 0;}
            > .d-button-content {  order: 1;  }
        }
        >.loading { animation: spin 2s infinite linear;  }
    }

</style>