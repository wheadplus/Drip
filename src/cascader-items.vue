<template>

    <div class="cascaderItem" :style="`{height:${popoverHeight}px}`" >
        <div class="left" >
            <div class="label" v-for="item in items" @click="leftSelected = item">
                <span class="label-content">{{item.name}}</span>
                <d-icon class="arrow" name="right" v-if="item.children"></d-icon>
            </div>

        </div>
        <div class="right" v-if="rightItems" >
            <Grip-cascader-item :items="rightItems"></Grip-cascader-item>
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
        },

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