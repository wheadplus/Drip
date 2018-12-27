
/*  1 使用 plugin.install,Vue.use(plugin)代替下面注释代码，
    因为Vue是用户给的值，可能是vue2我们不定义。
    是否在prototype引入$toast，让用户通过vue.use()决定
*     import Vue from 'vue'
*     Vue.prototype.$toast = function () {
*     console.log('toast')
*     }
*    2.动态创建组件
*
* */
import Toast from './toast.vue'
export default  {
    install(Vue, options) {
        Vue.prototype.$toast = function (message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: '知道了',
                        callback(){
                            console.log("！！！！！！！！")
                        }}
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}