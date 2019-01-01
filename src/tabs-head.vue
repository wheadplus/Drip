<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "drip-tabsHead",
        inject: ['eventBus'],
        created() {
            this.$emit('update:selected', 'tabs-head 抛出的数据')
        },
    }
</script>

<style lang="scss" scoped>
    $height: 40px;

    .tabs-head {
        height: $height;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid blueviolet;
        > .actions-wrapper {
            margin-left: auto;
            margin-right: 1em;
        }
    }
</style>