<template>

    <button class="d-button">
        
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <slot></slot>
    </button>

</template>

<script>
    export default {
        props: ["icon"]
    }
</script>

<style lang="scss">
    .d-button {
        font-size: var(--font-size);
        height: var(--button-height);
        background-color: var(--button-bg);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color-hover);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>