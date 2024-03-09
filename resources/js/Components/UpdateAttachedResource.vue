<script setup>
defineOptions({ inheritAttrs: false })
import UpdateAttached from '@/views/UpdateAttached'
const hooks = Nova.config('hooks')
/**
 * @property hooks.UpdateAttachedResource.before
 * @property hooks.UpdateAttachedResource.after
 */
</script>

<template>
  [hooks.UpdateAttachedResource.before]
  <Hooks :hooks="hooks.UpdateAttachedResource.before" />
  <UpdateAttached v-bind="$page.props" />
  <Hooks :hooks="hooks.UpdateAttachedResource.after" />
  [hooks.UpdateAttachedResource.after]
</template>
Q
