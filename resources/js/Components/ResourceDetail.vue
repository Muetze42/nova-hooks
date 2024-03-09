<script setup>
defineOptions({ inheritAttrs: false })
import Detail from '@/views/Detail'
const hooks = Nova.config('hooks')
/**
 * @property hooks.ResourceDetail.before
 * @property hooks.ResourceDetail.after
 */
</script>

<template>
  <div>
    [hooks.ResourceDetail.before]
    <Hooks :hooks="hooks.ResourceDetail.before" />
    <Detail v-bind="$page.props" />
    <Hooks :hooks="hooks.ResourceDetail.after" />
    [hooks.ResourceDetail.after]
  </div>
</template>
