<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "drip-tabsHead",
        inject: ['eventBus'],
        created() {
            this.$emit('update:selected', 'tabs-head 抛出的数据')
            this.eventBus.$on('update:selected', (item ,vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        },
    }
</script>

<style lang="scss" scoped>
    $height: 40px;
    $active-text-color: #4A90E2;
    .tabs-head {
        height: $height;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 3px solid $active-text-color;
            transition: all 300ms;
        }
        > .actions-wrapper {
            margin-left: auto;
            margin-right: 1em;
        }
    }
</style>