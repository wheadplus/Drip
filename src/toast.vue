<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default  {
        name: "drip-toast",

    }
</script>

<style lang="scss" scoped="">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,0.74);
    .toast {
        font-size: $font-size; line-height: 1.8; height: $toast-height;
        position: fixed; top: 0; left: 50%; transform: translateX(-50%);
        display: flex; align-items: center;
        color: #FFFFFF; padding: 0 13px; border-radius: 3px;
        background: $toast-bg; box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
    }
</style>