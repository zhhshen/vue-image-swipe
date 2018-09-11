import Preview from './preview.vue'

const VueImageSwipe = {}
VueImageSwipe.install = (Vue, options = {}) => {
  const PreviewController = Vue.extend(Preview)
  PreviewController.prototype.close = function () {
    this.data = []
    this.options = {}
    this.imageIndex = 0
  }
  Vue.prototype.$imagePreview = (opts = {}) => {
    const elem = document.createElement('div')
    let instance = new PreviewController()
    instance.$mount(elem)
    instance.data = opts.images || []
    instance.imageIndex = opts.index || 0
    instance.options = opts.defaultOpt || {}
    document.body.appendChild(instance.$el)
    instance.$on('close', () => {
      instance.close()
      document.body.removeChild(instance.$el)
      instance = null
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueImageSwipe)
}
export default VueImageSwipe
