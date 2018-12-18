import Vue from "vue"
import Button from "./button"
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component("d-button", Button)
Vue.component("d-icon", Icon)
Vue.component('d-button-group', ButtonGroup)

new Vue({
    el:"#app",
    data : {
       loading1: false,
        loading2: true,
        loading3: false
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect


//输入有几个就断言几个

{
    //测试icon
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    expect(useElement.getAttribute("xlink:href")).to.equal("#i-settings")
    vm.$el.remove()
    vm.$destroy()
}

{
    //测试isLoading
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            isLoading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector("use")
    expect(useElement.getAttribute("xlink:href")).to.equal("#i-loading")
    vm.$el.remove()
    vm.$destroy()
}

{
    //测试iconPosition为null的情况
    //css类断言，需要挂载页面元素,否则检测不到css属性
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    let div = document.createElement("div")
    document.body.appendChild(div)
    vm.$mount(div)
    let svg = vm.$el.querySelector("svg")
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal("1")
    vm.$el.remove()
    vm.$destroy()
}

{
    //测试iconPosition为right的情况
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            iconPosition:"right"
        }
    })
    let div = document.createElement("div")
    document.body.appendChild(div)
    vm.$mount(div)
    let svg = vm.$el.querySelector("svg")
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal("2")
    vm.$el.remove()
    vm.$destroy()
}

{
    //测试click函数 mock
    //使用chai-spies 监听函数
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    vm.$mount()

    let spy = chai.spy(function(){})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$destroy()
}