<template>
    <div style="margin-top: 16px;">
        <p>message: {{message}}</p>
        <d-input v-model="message"></d-input>
    </div>
</template>
<script>
    import Input from '../../../src/input.vue'

    export default {
        components: {'d-input': Input},
        data() {
            return {message: '光年之外'}
        }
    }
</script>

<style>
    *{    box-sizing: border-box;  }
    .wrapper {
        margin-top: 10px;
    }
</style>