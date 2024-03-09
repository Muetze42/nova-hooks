<script setup>
defineOptions({ inheritAttrs: false })
import Attach from '@/views/Attach'
const hooks = Nova.config('hooks')
/**
 * @property hooks.AttachResource.before
 * @property hooks.AttachResource.after
 */
</script>

<template>
  [hooks.AttachResource.before]
  <Hooks :hooks="hooks.AttachResource.before" />
  <Attach v-bind="$page.props" />
  <Hooks :hooks="hooks.AttachResource.after" />
  [hooks.AttachResource.after]
</template>
