<template>
    <div class="cascaderItem">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <Grip-cascader-item :items="rightItems"></Grip-cascader-item>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Grip-cascader-item",
        props: {
            items: {
                type: Array
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightItems () {
                if(this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else {
                    return null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascaderItem {
        height:100px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left {
            border: 1px solid palegoldenrod;
            height: 100%;
            padding: 0.5em 1em;
        }
        .right {
        }
    }
</style>