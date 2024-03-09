<script setup>
defineProps({
  hooks: {
    type: Object,
    required: false,
    default: {}
  },
  resourceName: {
    type: String,
    required: false,
    default: null
  },
  resourceId: {
    type: [Number, String, null],
    required: false,
    default: null
  },
  relatedResourceName: {
    type: [String, null],
    required: false,
    default: null
  },
  viaResource: {
    type: [String, null],
    required: false,
    default: null
  },
  viaResourceId: {
    type: [Number, String, null],
    required: false,
    default: null
  },
  viaRelationship: {
    type: [String, null],
    required: false,
    default: null
  },
  parentResource: {
    type: [String, null],
    required: false,
    default: null
  },
  name: {
    type: [String, null],
    required: false,
    default: null
  },
  lens: {
    type: [String, null],
    required: false,
    default: null
  },
  viaPivotId: {
    type: [Number, String, null],
    required: false,
    default: null
  }
})
/**
 * @property hook.component
 * @property hook.componentData
 */
</script>

<template>
  <div class="mb-4">
    {{ resourceName }}
  </div>
  <component v-for="(hook, index) in hooks"
             :key="index"
             :is="hook.component"
             :component-data="hook.componentData"
             :resourceName="resourceName"
             :resourceId="resourceId"
             :relatedResourceName="relatedResourceName"
             :viaResource="viaResource"
             :viaResourceId="viaResourceId"
             :viaRelationship="viaRelationship"
             :parentResource="parentResource"
             :name="name"
             :lens="lens"
             :viaPivotId="viaPivotId"
  />
</template>
