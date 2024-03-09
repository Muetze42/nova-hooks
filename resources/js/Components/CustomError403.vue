<script setup>
defineOptions({ inheritAttrs: false })
import Error403 from '@/views/CustomError403'
const hooks = Nova.config('hooks')
/**
 * @property hooks.CustomError403.before
 * @property hooks.CustomError403.after
 */
</script>

<template>
  [hooks.CustomError403.before]
  <Hooks :hooks="hooks.CustomError403.before" />
  <Error403 v-bind="$page.props" />
  <Hooks :hooks="hooks.CustomError403.after" />
  [hooks.CustomError403.after]
</template>
Q
