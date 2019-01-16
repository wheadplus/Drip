<template>
    <div class="cascader" ref="cascader" v-ClickOutside="close">
        <div class="trigger" @click="toggle">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-warpper" v-if="popoverVisible">
            <cascader-items :items="source" class="popover"
                :loadData="loadData"
                :popoverHeight="popoverHeight"
                :selected="selected"
                @update:selected="onUpdateSelected"
            ></cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items.vue'
    import ClickOutside from './click-outside'

    export default {
        name: "Grip-Cascader",
        components: {CascaderItems},
        directives:{ClickOutside},
        props: {
            source: {
                type: Array
            },
            popoverHeight: {
                type: Number,
            },
            selected: {
                type: Array,
                default: () => {
                    return []
                }
            },
            loadData: {
                type: Function
            }
        },

        data() {
            return {
                popoverVisible: false,
            }
        },
        methods: {
            open () {
                this.popoverVisible = true

            },
            close() {
                this.popoverVisible = false
            },
            toggle() {
                if(this.popoverVisible === true) {
                    this.close()
                } else {
                    this.open()
                }
            },
            onClickDocument(e) {
                let {cascader} = this.$refs
                let {target} = e
                if(cascader === target || cascader.contains(target)) {return}
                this.close()
            },
            onUpdateSelected(newSelected) {
                this.$emit('update:selected', newSelected)

                let lastItem = newSelected[newSelected.length - 1]

                let simplest = (children, id) => {
                    return children.filter(item => item.id === id)[0]
                }
                let complex = (children, id) => {
                    let noChildren = []
                    let hasChildren = []
                    children.forEach(item => {
                         if(item.children) {
                             hasChildren.push(item)
                         } else {
                             noChildren.push(item)
                         }
                    })
                    let found = simplest(noChildren, id)
                    if(found) {
                        return found
                    } else {
                        found = simplest(hasChildren, id)
                        if(found) {return found}
                        for(let i = 0; i < hasChildren.length; i++) {
                            found = complex(hasChildren[i].children, id)
                            if(found) {
                                return found
                            }
                        }
                        return undefined
                    }
                }
                let updateSource = (result) => {
                    let copy = JSON.parse(JSON.stringify(this.source))
                    let toUpdate = complex(copy, lastItem.id)
                    //this.$set(toUpdate, 'children', result)
                    toUpdate.children = result
                    this.$emit('update:source', copy)
                }
                if(!lastItem.isLeaf) {
                    this.loadData && this.loadData(lastItem, updateSource)  //把别传给我的函数调用一下
                    // 调回调的时候传一个函数，updateSource，它被调用
                }
            }
        },
        computed: {
            result() {
                return this.selected.map((item) => {
                    return item.name
                }).join('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        position: relative;
        display: inline-flex;
        .trigger {
            border: 1px solid black;
            border-radius: .2em;
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