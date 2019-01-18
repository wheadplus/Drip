<template>
    <div style="margin-top: 20px;">
        <d-button>默认按钮</d-button>
        <d-button icon="settings">默认按钮</d-button>
        <d-button icon="settings" iconPosition="right">默认按钮</d-button>
        <d-button :loading="true">默认按钮</d-button>
    </div>
</template>
<script>
    import Button from '../../../src/tabs.vue'

    export default {
        components: {'d-button': Button}
    }
</script>

<style>
    *{    box-sizing: border-box;  }

</style>