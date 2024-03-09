<template>
  <Hooks
    :hooks="hooks.pages.Update.before"
    :resourceName="resourceName"
    :resourceId="resourceId"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :viaRelationship="viaRelationship"
  />
  <ResourceUpdate
    :resource-name="resourceName"
    :resource-id="resourceId"
    :via-resource="viaResource"
    :via-resource-id="viaResourceId"
    :via-relationship="viaRelationship"
    :form-unique-id="formUniqueId"
  />
  <Hooks
    :hooks="hooks.pages.Update.after"
    :resourceName="resourceName"
    :resourceId="resourceId"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :viaRelationship="viaRelationship"
  />
</template>

<script>
import { mapProps } from '@/mixins'
import ResourceUpdate from '@/views/Update'
import { uid } from 'uid/single'

export default {
  name: 'Update',

  components: {
    ResourceUpdate,
  },

  props: mapProps([
    'resourceName',
    'resourceId',
    'viaResource',
    'viaResourceId',
    'viaRelationship',
  ]),

  data: () => ({
    formUniqueId: uid(),
    hooks: Nova.config('hooks')
  }),
}
</script>
