<template>
  <Hooks
    :hooks="hooks.pages.UpdateAttached.before"
    :resourceName="resourceName"
    :resourceId="resourceId"
    :relatedResourceName="relatedResourceName"
    :relatedResourceId="relatedResourceId"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :parentResource="parentResource"
    :viaRelationship="viaRelationship"
    :viaPivotId="viaPivotId"
  />
  <UpdateAttachedResource
    :resource-name="resourceName"
    :resource-id="resourceId"
    :related-resource-name="relatedResourceName"
    :related-resource-id="relatedResourceId"
    :via-resource="viaResource"
    :via-resource-id="viaResourceId"
    :parent-resource="parentResource"
    :via-relationship="viaRelationship"
    :via-pivot-id="viaPivotId"
    :polymorphic="polymorphic"
    :form-unique-id="formUniqueId"
  />
  <Hooks
    :hooks="hooks.pages.UpdateAttached.after"
    :resourceName="resourceName"
    :resourceId="resourceId"
    :relatedResourceName="relatedResourceName"
    :relatedResourceId="relatedResourceId"
    :viaResource="viaResource"
    :viaResourceId="viaResourceId"
    :parentResource="parentResource"
    :viaRelationship="viaRelationship"
    :viaPivotId="viaPivotId"
  />
</template>

<script>
import { uid } from 'uid/single'

export default {
  name: 'UpdateAttached',

  props: {
    resourceName: {
      type: String,
      required: true,
    },
    resourceId: {
      required: true,
    },
    relatedResourceName: {
      type: String,
      required: true,
    },
    relatedResourceId: {
      required: true,
    },
    viaResource: {
      default: '',
    },
    viaResourceId: {
      default: '',
    },
    parentResource: {
      type: Object,
    },
    viaRelationship: {
      default: '',
    },
    viaPivotId: {
      default: null,
    },
    polymorphic: {
      default: false,
    },
  },

  data: () => ({
    formUniqueId: uid(),
  }),
}
</script>
