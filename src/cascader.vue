<template>
    <div class="cascader">

        <div class="trigger" @click="popoverVisible = !popoverVisible">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-warpper" v-if="popoverVisible">
            <cascader-items :items="source" class="popover"
                :popoverHeight="popoverHeight"
                :selected="selected"
                @update:selected="onUpdateSelected"
            ></cascader-items>
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
            },
            popoverHeight: {
                type: Number,
            },
            selected: {
                type: Array,
                default: () => {return []}
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        methods: {
            onUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
            }
        },
        computed: {
            result() {
                return this.selected.map((item) => {return item.name}).join('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        position: relative;
        .trigger {
            border: 1px solid black;
            height: $height;
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;
            min-width: 160px;
            padding:1em;
        }
        .popover-warpper {
            position: absolute; top: 100%; left: 0; background: white; display: flex;
            margin-top: 10px; overflow: auto;
            @extend .box-shadow;
            &:before,&:after {
                content: "";
                position: absolute;
                left: 10px;
                border:10px solid transparent;
            }
            &:before {
                border-bottom-color: $border-color-light;
                top:-20px;


            }
            &:after {
                border-bottom-color: white;
                top:-19px;

            }
        }

    }
</style>