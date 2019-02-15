<template>
    <div class="drip-content">
        <slot></slot>
    </div>
</template>

<script>
    export default  {
        name: "drip-content"
    }
</script>

<style lang="scss" scoped>
    .drip-content {
        flex-grow: 1;
    }
</style>