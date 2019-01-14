const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', function () {
        it('可以接收 autoClose 属性', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close',() => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })

        it('接收 closeButton 属性', (done) => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback,
                    }
                }
            }).$mount()

            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.be.eq("关闭")
            setTimeout(()=> {
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            },200)
        })

        it('接受 enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {enableHtml: true}
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })

        it('接收 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: { position: 'top'}
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
        })
    } )


})