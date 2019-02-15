<template>
    <div style="margin-top: 16px;">
        <h2>设置空隙</h2>
        <p>
            <strong>预览</strong>
        </p>
        <d-row class="demoRow" gutter="10">
            <d-col span="8">
                <div class="bg-purple-dark">8</div>
            </d-col>
            <d-col span="8" offset="4">
                <div class="bg-purple">8</div>
            </d-col>
        </d-row>
        <d-row class="demoRow" gutter="10">
            <d-col span="6">
                <div class="bg-purple-dark">8</div>
            </d-col>
            <d-col span="6" offset="4">
                <div class="bg-purple">6</div>
            </d-col>
            <d-col span="6" offset="2">
                <div class="bg-purple-light" >6</div>
            </d-col>
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