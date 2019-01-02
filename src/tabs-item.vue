<template>
    <div class="tabs-item" @click="onClick" :class="classes"
    :data-name="name">
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
                  disabled: this.disabled
              }
          }
        },
        inject: ['eventBus'],
        created() {
            if(this.eventBus) {
                this.eventBus.$on('update:selected',(name) => {
                    this.active = name === this.name;
                })
            }
        },
        methods: {
            onClick() {
                if(this.disabled) {return }
                this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $active-text-color: #4A90E2;
    $disabled-color: #9999;
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
        > svg {
            margin-right: 0.5em;
        }
    }
</style>