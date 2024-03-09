<template>
  <Hooks :hooks="hooks.pages.Error404.before" />
  <CustomError404 />
  <Hooks :hooks="hooks.pages.Error404.after" />
</template>

<script>
import Guest from '@/layouts/Guest'

export default {
  name: 'Error404Page',
  data: () => ({
    hooks: Nova.config('hooks')
  }),
  layout: Guest,
}
</script>
