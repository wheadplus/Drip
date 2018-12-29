import Toast from './toast.vue'

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

let currentToast

export default  {
install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast) { currentToast.close() }
            currentToast = createToast({Vue, message, propsData: toastOptions})
        }

    }
}

function createToast({Vue,message, propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
