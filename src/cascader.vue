<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <cascader-items :items="source"></cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items.vue'
    export default {
        name: "Grip-Cascader",
        components:{CascaderItems},
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        .trigger {
            border: 1px solid blue;
            height: 32px;
            width: 128px;
        }
        .popover {
            border: 1px solid blue;
            display: flex;

        }
    }
</style>