<script setup>
defineOptions({ inheritAttrs: false })
import AppError from '@/views/CustomAppError'
const hooks = Nova.config('hooks')
/**
 * @property hooks.CustomAppError.before
 * @property hooks.CustomAppError.after
 */
</script>

<template>
  [hooks.CustomAppError.before]
  <Hooks :hooks="hooks.CustomAppError.before" />
  <AppError v-bind="$page.props" />
  <Hooks :hooks="hooks.CustomAppError.after" />
  [hooks.CustomAppError.after]
</template>
Q
