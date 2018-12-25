import Vue from "vue"
import Button from "./button"
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from "./input"
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'

Vue.component("d-button", Button)
Vue.component("d-icon", Icon)
Vue.component('d-button-group', ButtonGroup)
Vue.component("d-input", Input)
Vue.component("d-row", Row)
Vue.component("d-col", Col)
Vue.component("d-layout", Layout)
Vue.component("d-header", Header)
Vue.component("d-sider", Sider)
Vue.component("d-footer", Footer)
Vue.component("d-content", Content)

new Vue({
    el:"#app",
    data : {
       loading1: false,
        loading2: true,
        loading3: false,
        message: "双向绑定"
    },
    methods: {
        inputChange (e) {
            console.log(e)
        }
    }
})
