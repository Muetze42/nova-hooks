<template>
  <Hooks :hooks="hooks.pages.Index.before" />
  <ResourceIndex
    :resourceName="resourceName"
    :shouldOverrideMeta="true"
    :shouldEnableShortcut="true"
  />
  <Hooks :hooks="hooks.pages.Index.after" />
</template>

<script>
import { mapProps } from '@/mixins'

export default {
  name: 'Index',
  props: mapProps(['resourceName']),
  data: () => ({
    hooks: Nova.config('hooks')
  })
}
</script>
