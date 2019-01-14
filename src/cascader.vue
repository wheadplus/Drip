<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <div v-for="item in source">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascader-item.vue'
    export default {
        name: "Grip-Cascader",
        components:{CascaderItem},
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                popoverVisible: false
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
            height: 128px;
            width: 64px;
        }
    }
</style>