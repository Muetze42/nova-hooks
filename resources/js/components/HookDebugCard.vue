<script setup>
defineProps({
  componentData: {
    type: [Object, String, Array, Number, Boolean, null],
    required: false,
    default: null
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
</script>
<template>
  <Card>
    <h2 class="font-medium text-lg mb-2 p-4">Hook</h2>
    <table class="w-full">
      <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">data</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ componentData }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">resourceName</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ resourceName }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">resourceId</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ resourceId }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">relatedResourceName</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ relatedResourceName }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">viaResource</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ viaResource }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">viaRelationship</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ viaRelationship }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">parentResource</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ parentResource }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">name</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ name }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">lens</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ lens }}
          </div>
        </td>
      </tr>
      <tr>
        <td class="px-4 py-2">
          <h3 class="font-bold">viaPivotId</h3>
          <div class="font-mono border px-1 border-gray-200 dark:border-gray-700">
            {{ viaPivotId }}
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </Card>
</template>
