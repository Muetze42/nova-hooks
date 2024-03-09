<template>
  <Hooks
    :hooks="hooks.pages.Detail.before"
    :resourceName="resourceName"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :viaRelationship="viaRelationship"
  />
  <ResourceCreate
    :resource-name="resourceName"
    :via-resource="viaResource"
    :via-resource-id="viaResourceId"
    :via-relationship="viaRelationship"
    mode="form"
  />
  <Hooks
    :hooks="hooks.pages.Detail.after"
    :resourceName="resourceName"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :viaRelationship="viaRelationship"
  />
</template>

<script>
import { mapProps } from '@/mixins'
import ResourceCreate from '@/views/Create'

export default {
  name: 'Create',

  components: {
    ResourceCreate,
  },

  data: () => ({
    hooks: Nova.config('hooks')
  }),

  props: mapProps([
    'resourceName',
    'viaResource',
    'viaResourceId',
    'viaRelationship',
  ]),
}
</script>
