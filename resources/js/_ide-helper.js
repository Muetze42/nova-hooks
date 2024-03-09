import Hooks from './components/Hooks.vue'
import CustomAppError from '@/views/CustomAppError.vue'
import ResourceDetail from '@/views/Detail.vue'
import AttachResource from '@/views/Attach.vue'
import ResourceCreate from '@/views/Create.vue'
import CustomError403 from '@/views/CustomError403'
import CustomError404 from '@/views/CustomError404'
import LoadingView from '@/components/LoadingView'
import DividerLine from '@/components/DividerLine'
import HelpText from '@/components/HelpText'
import CreateForm from '@/components/CreateForm'
import ResourceIndex from '@/views/Index'
import UpdateAttached from '@/views/UpdateAttached'
import { Button } from 'laravel-nova-ui'
import { Head } from '@inertiajs/inertia-vue3'
import Card from '@/components/Card'
import Heading from '@/components/Heading'

Vue.component('Hooks', Hooks)
Vue.component('CustomError403', CustomError403)
Vue.component('CustomError404', CustomError404)
Vue.component('AttachResource', AttachResource)
Vue.component('CustomAppError', CustomAppError)
Vue.component('ResourceDetail', ResourceDetail)
Vue.component('ResourceCreate', ResourceCreate)
Vue.component('LoadingView', LoadingView)
Vue.component('DividerLine', DividerLine)
Vue.component('HelpText', HelpText)
Vue.component('Head', Head)
Vue.component('ResourceIndex', ResourceIndex)
Vue.component('CreateForm', CreateForm)
Vue.component('Button', Button)
Vue.component('UpdateAttachedResource', UpdateAttached)
Vue.component('Card', Card)
Vue.component('Heading', Heading)
Vue.mixin({
  methods: {
    __(key, replace = {}) {
      return __(key, replace = {})
    }
  },
  data() {
    return {
      resourceName: 'resourceName',
      viaResource: 'viaResource',
      viaResourceId: 'viaResourceId',
      viaRelationship: 'viaRelationship',
      resourceId: 'resourceId',
      hooks: {
        pages: {
          AppError: {
            before: [],
            after: [],
          },
          Attach: {
            before: [],
            after: [],
          },
          Detail: {
            before: [],
            after: [],
          },
          Create: {
            before: [],
            after: [],
          },
          Dashboard: {
            before: [],
            after: [],
          },
          Error403: {
            before: [],
            after: [],
          },
          Error404: {
            before: [],
            after: [],
          },
          ForgotPassword: {
            before: [],
            after: [],
          },
          Index: {
            before: [],
            after: [],
          },
          Lens: {
            before: [],
            after: [],
          },
          Replicate: {
            before: [],
            after: [],
          },
          Update: {
            before: [],
            after: [],
          },
          UpdateAttached: {
            before: [],
            after: [],
          },
        }
      }
    }
  }
})
window.__ = function (key, replacements) {}
window.appConfig = Object
window.Nova = new class {
  constructor() {
    this.pages = []
    this.bootingCallbacks = []
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
