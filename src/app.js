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

/*
* 输入有几个就断言几个
*
*
*/
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    console.log(useElement.getAttribute('xlink:href'))
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    vm.$destroy()
}
{

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    console.log(useElements[0].getAttribute('xlink:href'))
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    console.log(getComputedStyle(icon).order)
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    console.log(getComputedStyle(icon).order);
    expect(getComputedStyle(icon).order).to.eq('2')
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
    let spy = chai.spy(function() {})

    vm.$on("click",spy)

    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$destroy()
}