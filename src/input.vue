<template>
    <div class="wrapper" :class="{error,tips}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
        <icon v-if="tips" class="icon-tips" name="tips"></icon>
    </div>
</template>

<script>
    import Icon from './icon.vue'
    export default {
        name: 'drip-input',
        components: {Icon},
        props: {
            value: {
                type: [String , Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            tips: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;  $border-color: #999;
    $border-color-hover: #777;  $border-color-disabled: #bbb;
    $font-size: 12px;  $box-shadow-color: rgba(0,0 ,0 , .5);
    $red: #f1453d;  $tips-color: green;
    .wrapper {
        font-size: $font-size; display: inline-flex; align-items: center;
        > :not(:last-child) { margin-right: .5em; }
        >input {
            height: 32px; border: 1px solid $border-color; padding: 0 8px;
            &:hover {
                border-color: $border-color-hover; }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none; }
            &[disabled], &[readonly] { border-color: #bbb;
                color: $border-color-disabled; cursor: not-allowed; }
        }
        &.error {
            > input { border-color: $red;} }
        &.tips {
            > input { border-color: $tips-color;} }
        .icon-error { fill: $red; }
        .error-message { color: $red; }
        .icon-tips { fill: $tips-color; }
    }
</style>