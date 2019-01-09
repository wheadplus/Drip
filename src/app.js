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
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-pane', TabsPane)
Vue.component('d-popover', Popover)
Vue.component('d-collapse', Collapse)
Vue.component('d-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
    el:"#app",
    data : {
       selectedTab: ['2','1']
    },
    methods: {
        yyy(data) {
            console.log('yyy')
            console.log(data);
        },
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
              autoClose: 3,
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
