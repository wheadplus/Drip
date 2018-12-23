<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "d-row",
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        created () {
            console.log("row created")
            // 没有儿子
        },
        mounted () {
            console.log("row mounted")
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
//        var div = document.createElement("div") //created
//        var childDiv = document.createElement('childDiv') // child created
//        document.body.appendChild(div) // child mounted
//        document.body.appendChild(div) //mounted
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>