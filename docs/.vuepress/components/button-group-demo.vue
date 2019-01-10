<template>
    <div>
        <div>
            <d-button-group>
                <d-button icon="left">上一页</d-button>
                <d-button icon="right" iconPosition="right">下一页</d-button>
            </d-button-group>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group.vue'
    export default {
        components: {
            'd-button-group': ButtonGroup,
            'd-button': Button,
        },
        data () {
            return {
                content: `
<d-button-group>
    <d-button icon="left">上一页</d-button>
    <d-button icon="settings" iconPosition="right">下一页</d-button>
</d-button-group>
      `.trim()
            }
        }
    }
</script>

<style>
    *{    box-sizing: border-box;  }

</style>