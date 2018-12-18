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

const expect = chai.expect

/*
* 输入有几个就断言几个
*
*
*/
{
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
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    })
    vm.$mount()
    let button = vm.$el
    vm.$on("click",()=> {
        expect(1).to.eq(1)
    })

    button.click()
    vm.$el.remove()
    vm.$destroy()
}