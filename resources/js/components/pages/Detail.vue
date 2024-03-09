<template>
  <Hooks
    :hooks="hooks.pages.Detail.before"
    :resourceName="resourceName"
    :resourceId="resourceId"
  />
  <ResourceDetail
    :resourceName="resourceName"
    :resourceId="resourceId"
    :shouldOverrideMeta="true"
    :shouldEnableShortcut="true"
  />
  <Hooks
    :hooks="hooks.pages.Detail.after"
    :resourceName="resourceName"
    :resourceId="resourceId"
  />
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
