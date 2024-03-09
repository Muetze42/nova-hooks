<script setup>
  defineOptions({ inheritAttrs: false })
  import Index from '@/views/Index'
  const hooks = Nova.config('hooks')
  /**
  * @property hooks.ResourceIndex.before
  * @property hooks.ResourceIndex.after
  */
</script>

<template>
  [hooks.ResourceIndex.before]
  <Hooks :hooks="hooks.ResourceIndex.before" />
  <Index v-bind="$page.props" />
  <Hooks :hooks="hooks.ResourceIndex.after" />
  [hooks.ResourceIndex.after]
</template>
