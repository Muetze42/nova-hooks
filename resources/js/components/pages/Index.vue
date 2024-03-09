<template>
  <Hooks
    :hooks="hooks.pages.Index.before"
    :resourceName="resourceName"
  />
  <ResourceIndex
    :resourceName="resourceName"
    :shouldOverrideMeta="true"
    :shouldEnableShortcut="true"
  />
  <Hooks
    :hooks="hooks.pages.Index.after"
    :resourceName="resourceName"
  />
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
