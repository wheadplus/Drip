// const expect = chai.expect;
// import Vue from 'vue'
// import Input from '../src/input'
// import Icon from '../src/icon'
//
// Vue.component("d-icon", Icon)
// Vue.component("d-input", Input)
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
//
// describe('Input', () => {
//
//     it('存在.', () => {
//         expect(Input).to.exist
//     })
//
//     describe("props", () => {
//         const Constructor = Vue.extend(Input)
//         let vm
//         afterEach(() => {
//             vm.$destroy()
//
//         })
//
//         it('可以接收 value', () => {
//             vm = new Constructor({
//                 propsData: {
//                     value: '123'
//                 }
//             }).$mount()
//             const inputElement = vm.$el.querySelector('input')
//             expect(inputElement.value).to.equal('123')
//         })
//
//         it('可以接收 disabled.', () => {
//             vm = new Constructor({
//                 propsData: {
//                     disabled: true
//                 }
//             }).$mount()
//             const inputElement = vm.$el.querySelector('input')
//             expect(inputElement.disabled).to.equal(true)
//         })
//
//         it('可以接收 readonly.', () => {
//             vm = new Constructor({
//                 propsData: {
//                     readonly: true
//                 }
//             }).$mount()
//             const inputElement = vm.$el.querySelector('input')
//             expect(inputElement.readOnly).to.equal(true)
//         })
//
//         it('可以接收 tips.', () => {
//             vm = new Constructor({
//                 propsData: {
//                     tips: true
//                 }
//             }).$mount()
//             const useElement = vm.$el.querySelector('use')
//             expect(useElement.getAttribute('xlink:href')).to.equal("#i-tips")
//         })
//
//         it('可以接收 error.', () => {
//             vm = new Constructor({
//                 propsData: {
//                     error: "你错了"
//                 }
//             }).$mount()
//             const useElement = vm.$el.querySelector('use')
//             expect(useElement.getAttribute('xlink:href')).to.equal("#i-error")
//             const errorMessage = vm.$el.querySelector(".error-message")
//             expect(errorMessage.innerText).to.equal('你错了')
//         })
//     })
//
//     describe("事件", () => {
//         const Constructor = Vue.extend(Input)
//         let vm
//         afterEach(() => {
//             vm.$destroy()
//         })
//         it('支持 change/input/blur/focus 事件', () => {
//             ['change', 'input', 'blur', 'focus'].forEach((eventName) => {
//                 vm = new Constructor({}).$mount()
//                 const callback = sinon.fake();
//                 vm.$on(eventName, callback)
//                 //触发 input 的 change 事件
//                 let event = new Event(eventName)
//                 Object.defineProperty( //设置 event.target.value
//                     event, "target" , {
//                         value: {value: 'hi'}, enumerable: true
//                     }
//                 )
//                 let inputElement = vm.$el.querySelector('input')
//                 inputElement.dispatchEvent(event)
//
//                 expect(callback).to.have.been.calledWith("hi")
//             })
//
//         })
//     })
// })