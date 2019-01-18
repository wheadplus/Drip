<template>
    <div style="margin-top: 16px;">
        <d-row class="demoRow">
            <d-col span="24" class="bg-purple-dark">100%</d-col>

        </d-row>
        <d-row class="demoRow">
            <d-col span="12" class="bg-purple-dark">50%</d-col>

            <d-col span="12" class="bg-purple">50%</d-col>
        </d-row>
        <d-row class="demoRow">
            <d-col span="8" class="bg-purple-dark">33%</d-col>
            <d-col span="8" class="bg-purple">33%</d-col>
            <d-col span="8" class="bg-purple-light">33%</d-col>
        </d-row>

        <d-row class="demoRow">
            <d-col span="6" class="bg-purple-dark">25%</d-col>
            <d-col span="6" class="bg-purple">25%</d-col>
            <d-col span="6" class="bg-purple-light">25%</d-col>
            <d-col span="6" class="bg-purple-dark">25%</d-col>
        </d-row>

        <d-row class="demoRow">
            <d-col span="4" class="bg-purple-dark">20%</d-col>
            <d-col span="4" class="bg-purple-light">20%</d-col>
            <d-col span="4" class="bg-purple-dark">20%</d-col>
            <d-col span="4" class="bg-purple-light">20%</d-col>
            <d-col span="4" class="bg-purple-dark">20%</d-col>
            <d-col span="4" class="bg-purple-light">20%</d-col>
        </d-row>
    </div>


</template>
<script>
    import Row from '../../../src/row.vue'
    import Col from '../../../src/col.vue'
    export default {
        components: {
            'd-row': Row,
            "d-col": Col
        }
    }
</script>

<style>
    * {box-sizing: border-box}
    .demoRow {
        margin: 10px 0;
    }
    .bg-purple-dark,.bg-purple,.bg-purple-light {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
</style>