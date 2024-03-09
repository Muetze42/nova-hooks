import AttachResource from './Components/AttachResource.vue'
import CustomAppError from './Components/CustomAppError.vue'
import CustomError403 from './Components/CustomError403.vue'
import CustomError404 from './Components/CustomError404.vue'
import ResourceDetail from './Components/ResourceDetail.vue'
import ResourceIndex from './Components/ResourceIndex.vue'
import UpdateAttachedResource from './Components/UpdateAttachedResource.vue'
import Hooks from './Components/Hooks.vue'

Nova.booting((app, store) => {
  app.component('Hooks', Hooks)
  app.component('AttachResource', AttachResource)
  app.component('CustomAppError', CustomAppError)
  app.component('CustomError403', CustomError403)
  app.component('CustomError404', CustomError404)
  app.component('ResourceDetail', ResourceDetail)
  app.component('ResourceIndex', ResourceIndex)
  app.component('UpdateAttachedResource', UpdateAttachedResource)
})
