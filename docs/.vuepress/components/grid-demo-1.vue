<template>
    <div style="margin-top: 16px;">
        <div class="wrapper">
            <d-input></d-input>
            <d-input value="中文"></d-input>

        </div>
        <div class="wrapper">
            <d-input value="中文" disabled></d-input>
            <d-input value="中文" readonly></d-input>
        </div>
        <div class="wrapper">

            <d-input value="中文" tips></d-input>
            <d-input value="中文" error="错误信息"></d-input>
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