<template>
  <Hooks :hooks="hooks.pages.Error403.before" />
  <CustomError403 />
  <Hooks :hooks="hooks.pages.Error403.after" />
</template>

<script>
import Guest from '@/layouts/Guest'

export default {
  name: 'Error403Page',
  data: () => ({
    hooks: Nova.config('hooks')
  }),
  layout: Guest,
}
</script>
