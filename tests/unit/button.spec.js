import chai,{ expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)


import { mount,shallowMount } from '@vue/test-utils'
import Button from '@/button.vue'
import Vue from 'vue'

describe('Button', () => {
    it('存在', () => {
        const wrapper = shallowMount(Button)
        expect(Button).to.exist
    })

    it('可以设置icon.', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'settings'
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-settings')

    })

    it('可以设置loading.', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const useElement =  wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-loading')
    })

    it('icon 默认的 order 是 1', () => {

        const wrapper = mount(Button,{
            attachToDocument: true,
            propsData: {
                icon: 'settings'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
    })

    it('设置 iconPosition 可以改变 order', () => {
        const wrapper = mount(Button,{
            attachToDocument: true,
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {

        const wrapper = mount(Button,{
            propsData: {
                icon: 'settings',
            }
        })
        const vm = wrapper.vm

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})
