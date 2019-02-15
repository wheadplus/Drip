<template>
    <div style="margin-top: 16px;">
        <div class="wrapper">
            <d-input></d-input>
            <d-input value="1"></d-input>
        </div>
        <div class="wrapper">
            <d-input value="1" disabled></d-input>
            <d-input value="1" readonly></d-input>
        </div>
        <div class="wrapper">
            <d-input value="1" tips></d-input>
            <d-input value="1" error="错误信息"></d-input>
        </div>
    </div>
</template>
<script>
    import Input from '../../../src/input.vue'

    export default {
        components: {'d-input': Input}
    }
</script>

<style>
    *{    box-sizing: border-box;  }
    .wrapper {
        margin-top: 10px;
    }
</style>