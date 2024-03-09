import Detail from './../../../../vendor/laravel/nova/resources/js/views/Detail.vue'

Vue.component('Detail', Detail)
window.__ = function (key, replacements) {}
window.appConfig = Object
window.Nova = new class {
  constructor() {
    this.pages = []
  }
  config(key) {
    return appConfig[key]
  }
  booting(callback) {
    this.bootingCallbacks.push(callback)
  }

  redirectToLogin() {
  }
}
