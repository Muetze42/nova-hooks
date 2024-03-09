<template>
  <Hooks :hooks="hooks.pages.Detail.before" />
  <ResourceDetail
    :resourceName="resourceName"
    :resourceId="resourceId"
    :shouldOverrideMeta="true"
    :shouldEnableShortcut="true"
  />
  <Hooks :hooks="hooks.pages.Detail.after" />
</template>

<script>
import { mapProps } from '@/mixins'

export default {
  name: 'Detail',
  data: () => ({
    hooks: Nova.config('hooks')
  }),
  props: mapProps(['resourceName', 'resourceId']),
}
</script>
