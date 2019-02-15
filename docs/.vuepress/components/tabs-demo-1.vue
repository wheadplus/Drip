<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <d-tabs selected="1">
            <d-tabs-head>
                <d-tabs-item name="1">1</d-tabs-item>
                <d-tabs-item name="2">2</d-tabs-item>
                <d-tabs-item name="3">3</d-tabs-item>
                <d-tabs-item name="4">4</d-tabs-item>
            </d-tabs-head>
            <d-tabs-body>
                <d-tabs-pane name="1">content 1</d-tabs-pane>
                <d-tabs-pane name="2">content 2</d-tabs-pane>
                <d-tabs-pane name="3">content 3</d-tabs-pane>
                <d-tabs-pane name="4">content 4</d-tabs-pane>
            </d-tabs-body>
        </d-tabs>
    </div>
</template>
<script>
    import DTabs from '../../../src/tabs'
    import DTabsBody from '../../../src/tabs-body'
    import DTabsHead from '../../../src/tabs-head'
    import DTabsItem from '../../../src/tabs-item'
    import DTabsPane from '../../../src/tabs-pane'
    export default {
        components: {DTabs, DTabsBody, DTabsHead, DTabsItem, DTabsPane},

    }
</script>