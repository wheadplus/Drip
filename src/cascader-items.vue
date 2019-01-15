<template>

    <div class="cascaderItem" :style="`{height:${popoverHeight}px}`" >

        <div class="left" >
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                <span class="label-content">{{item.name}}</span>
                <d-icon class="arrow" name="right" v-if="item.children"></d-icon>
            </div>

        </div>
        <div class="right" v-if="rightItems" >
            <Grip-cascader-item
                    :level="level+1"
                    :items="rightItems"
                    :selected="selected"
                    @update:selected="onUpdateSelected"
            ></Grip-cascader-item>
        </div>
    </div>
</template>

<script>
    import Icon from  './icon.vue'
    export default {
        name: "Grip-cascader-item",
        components:{'d-icon': Icon},
        props: {
            items: {
                type: Array
            },
            popoverHeight: {
                type: Number,
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
            }
        },

        computed: {
            rightItems () {
                if(this.selected && this.selected[this.level]) {
                    let item = this.items.filter(item => item.name === this.selected[this.level].name)
                    if(item && item[0].children &&item[0].children.length >0) {
                        return item[0].children
                    }
                }

            }
        },
        methods: {
            onClickLabel (item) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level + 1)
                this.$emit('update:selected', copy)
            },
            onUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 200px;

        .left {
            padding: .3em 0;
            height: 100%;
        }
        .right {
            height: 100%;
            border-left: 1px solid $border-color-light;
        }
        .label {
            padding: .5em 1em;
            .label-content {
                margin-right: 1em;
            }
            .arrow {
                margin-left: auto;
                transform: scale(.5);
            }
            &:hover {
                background-color: $grey;
            }
        }
    }
</style>