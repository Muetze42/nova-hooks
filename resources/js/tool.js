import Hooks from './components/Hooks.vue'
import HookDebugCard from './components/HookDebugCard.vue'

Nova.booting((app, store) => {
  app.component('Hooks', Hooks)
  app.component('HookDebugCard', HookDebugCard)
  // Todo: Automatic include all files from directory?
  Nova.pages['Nova.Attach'] = require('./components/pages/Attach').default
  Nova.pages['Nova.Create'] = require('./components/pages/Create').default
  Nova.pages['Nova.Dashboard'] = require('./components/pages/Dashboard').default
  Nova.pages['Nova.Detail'] = require('./components/pages/Detail').default
  Nova.pages['Nova.Error'] = require('./components/pages/AppError').default
  Nova.pages['Nova.Error403'] = require('./components/pages/Error403').default
  Nova.pages['Nova.Error404'] = require('./components/pages/Error404').default
  Nova.pages['Nova.ForgotPassword'] = require('./components/pages/ForgotPassword').default
  Nova.pages['Nova.Index'] = require('./components/pages/Index').default
  Nova.pages['Nova.Lens'] = require('./components/pages/Lens').default
  // Nova.pages['Nova.Login'] = require('./components/pages/Login').default // Not working.
  Nova.pages['Nova.Replicate'] = require('./components/pages/Replicate').default
  // Nova.pages['Nova.ResetPassword'] = require('./components/pages/ResetPassword').default // Not working.
  Nova.pages['Nova.Update'] = require('./components/pages/Update').default
  Nova.pages['Nova.UpdateAttached'] = require('./components/pages/UpdateAttached').default
})
