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
        name: "dripCollapseItem",
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
            this.eventBus && this.eventBus.$on('update:selected', (name) => {
                if (name !== this.name) {
                    this.close()
                } else {
                    this.doshow()
                }
            })
        },
        methods: {
            toggle() {

                if(this.open) {
                    this.open = false

                } else  {

                    this.eventBus.$emit('update:selected', this.name)
                }
            },
            close() {
                this.open = false
            },
            doshow() {
                this.open = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;

    .collapseItem {
        >.title {
            border: 1px solid $grey;
            margin: -1px -1px 0;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
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
            background: #666;
        }
    }
</style>