<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default  {
        name: "drip-collapse-item",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String || Number,
                required: true
            }
        },
        data () {
            return {
                open: false
            }
        },
        inject: ['eventBus'],
        mounted () {
            this.updateItem()
        },
        methods: {
            toggle() {
                if(this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                } else  {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            },
            //通过eventBus 接受父亲组件的更新消息
            updateItem() {
                this.eventBus && this.eventBus.$on('update:selected', (names) => {
                    if (names.indexOf(this.name) >= 0) {
                        this.open = true
                    } else {
                        this.open = false
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";

    .collapseItem {
        >.title {
            border: 1px solid $grey;
            margin: -1px -1px 0;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            background-color: lighten($grey, 8%);
        }
        &:first-child {
            >.title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            >.title {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
                margin-bottom: -1px;
            }
        }
        >.content {
            padding: 8px;
        }
    }
</style>