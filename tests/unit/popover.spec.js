import chai,{ expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount,shallowMount } from '@vue/test-utils'
import Popover from '@/popover'
chai.use(sinonChai)

describe('Popover', () => {

    it('存在.', () => {
        expect(Popover).to.exist
    })


    it('可以设置 position.', () => {
        const wrapper = mount(Popover,{
            slots: {
                default:`<button>点我</button>`,
                content:'<div>弹出内容</div>'
            },
            propsData: {
                position: 'left'
            }
        })
        wrapper.find('button').trigger('click')
        let classes =wrapper.find('.content-wrapper').classes()
        expect(classes).to.include('position-left')
    })

    it('可以设置 trigger', () => {

        const wrapper = mount(Popover,{
            slots: {
                default:`<button>点我</button>`,
                content:'<div>弹出内容</div>'
            },
            propsData: {
                position: 'left',
                trigger: 'hover'
            }
        })
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.popover').trigger('mouseenter')
        expect(wrapper.find('.content-wrapper').element).to.exist
    })
})