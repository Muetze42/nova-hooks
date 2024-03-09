<template>
  <Hooks :hooks="hooks.pages.AppError.before" />
  <CustomAppError />
  <Hooks :hooks="hooks.pages.AppError.after" />
</template>

<script>
import Guest from '@/layouts/Guest'

export default {
  name: 'AppErrorPage',
  data: () => ({
    hooks: Nova.config('hooks')
  }),
  layout: Guest,
}
</script>
