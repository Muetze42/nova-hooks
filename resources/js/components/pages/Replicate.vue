<template>
  <Hooks
    :hooks="hooks.pages.Replicate.before"
    :resourceName="resourceName"
    :resourceId="resourceId"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :viaRelationship="viaRelationship"
  />
  <CreateForm
    @resource-created="handleResourceCreated"
    @create-cancelled="handleCreateCancelled"
    mode="form"
    :resource-name="resourceName"
    :from-resource-id="resourceId"
    :via-resource="viaResource"
    :via-resource-id="viaResourceId"
    :via-relationship="viaRelationship"
    @update-form-status="onUpdateFormStatus"
    :should-override-meta="true"
    :form-unique-id="formUniqueId"
  />
  <Hooks
    :hooks="hooks.pages.Replicate.after"
    :resourceName="resourceName"
    :resourceId="resourceId"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :viaRelationship="viaRelationship"
  />
</template>

<script>
import { mapProps } from '@/mixins'
import ResourceCreate from '@/views/Create'

export default {
  name: 'Replicate',

  extends: ResourceCreate,

  props: mapProps(['resourceName', 'resourceId']),

  data: () => ({
    hooks: Nova.config('hooks')
  })
}
</script>
