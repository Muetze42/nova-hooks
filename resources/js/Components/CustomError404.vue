<script setup>
defineOptions({ inheritAttrs: false })
import Error404 from '@/views/CustomError404'
const hooks = Nova.config('hooks')
/**
 * @property hooks.CustomError404.before
 * @property hooks.CustomError404.after
 */
</script>

<template>
  [hooks.CustomError403.before]
  <Hooks :hooks="hooks.CustomError404.before" />
  <Error404 v-bind="$page.props" />
  <Hooks :hooks="hooks.CustomError404.after" />
  [hooks.CustomError403.after]
</template>
