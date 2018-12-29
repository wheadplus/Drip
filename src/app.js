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
import Toast from './toast'
import plugin from "./plugin";

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
Vue.component('d-toast', Toast)

Vue.use(plugin)

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
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
          this.$toast(`你的智商目前为${parseInt(Math.random()*100)},请充值`, {
              position,
              autoClose: false,
              autoCloseDelay: 300,
              closeButton: {
                  text: '知道了',
                  callback(toast){
                      console.log("用户知道啦")
                  }
              }
          })
        }
    }
})
