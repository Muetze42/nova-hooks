<template>
  <Hooks :hooks="hooks.pages.Dashboard.before" :name="name" />
  <DashboardView :name="name" />
  <Hooks :hooks="hooks.pages.Dashboard.after" :name="name" />
</template>

<script>
import DashboardView from '@/views/Dashboard'

export default {
  name: 'Dashboard',

  components: {
    DashboardView,
  },

  data: () => ({
    hooks: Nova.config('hooks')
  }),

  props: {
    name: {
      type: String,
      required: false,
      default: 'main',
    },
  },
}
</script>
