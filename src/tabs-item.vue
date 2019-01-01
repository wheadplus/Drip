<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "drip-tabsItem",
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String|Number,
                required: true
            }
        },
        computed: {
          classes () {
              return {
                  active: this.active,
                  disable: this.disable
              }
          }
        },
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            onClick() {
                if(this.disabled) {return }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $active-text-color: #4A90E2;
    $disabled-color: #777;
    .tabs-item {
        padding: 0 1em;
        height: 100%;
        display: flex;
        align-items: center;


        &.active {
            color: $active-text-color;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-color;
            cursor: not-allowed;
        }
    }
</style>