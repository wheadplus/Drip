<template>
    <div class="cascaderItem">
        {{sourceItem.name}}
        <Grip-cascader-item
                v-if="sourceItem.children"
                v-for="item in sourceItem.children"
                :sourceItem="item"
        ></Grip-cascader-item>
    </div>
</template>

<script>
    export default {
        name: "Grip-cascader-item",
        props: {
            sourceItem: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascaderItem {
        border:1px solid blue;
        padding: 10px;
    }
</style>