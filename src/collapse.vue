<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from  'vue'
    export default  {
        name: "drip-collapse",
        data () {
            return {
                eventBus: new Vue(),
                selectedArray: []
            }
        },
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,

            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }

        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)

            this.showItem()
            this.closeItem()
        },
        methods: {
            showItem() {
                this.eventBus.$on('update:addSelected', (name) => {
                    let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                    if(this.single) {
                        selectedCopy = [name]
                    } else {
                        selectedCopy.push(name)
                    }
                    this.eventBus.$emit('update:selected', selectedCopy)
                    this.$emit('update:selected', selectedCopy)//通知外面数据更新
                })
            },
            closeItem() {
                this.eventBus.$on('update:removeSelected', (name) => {
                    let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                    let index = selectedCopy.indexOf(name)
                    selectedCopy.splice(index, 1)
                    this.eventBus.$emit('update:selected', selectedCopy)
                    this.$emit('update:selected', selectedCopy)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;

    }
</style>