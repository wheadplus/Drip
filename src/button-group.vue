<template>
   <div class="d-button-group">
        <slot/>   
    </div> 
</template>

<script>
    import Button from './button.vue'
    export default {
        components: {'d-button': Button},
        name: "drip-button-group",
        mounted(){
            for(let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if(name !== "button") {
                    console.warn(`d-button-group的资源应该为d-button，而不是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*中间边重复， 使用border-left：none；会产生hover时少一边的情况。
        改用 margin-left：-1px；hover时定位浮起来
    */
    $border-radius: 4px;
    .d-button-group {
        display: inline-flex;
        vertical-align: middle;

        >.d-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-bottom-left-radius: $border-radius;
                border-top-left-radius: $border-radius;
            }
            &:last-child {
                border-bottom-right-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
