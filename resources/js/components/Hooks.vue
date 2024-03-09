<script setup>
defineProps({
  hooks: {
    type: Object,
    required: false,
    default: {}
  }
})
/**
 * @property hook.component
 * @property hook.componentData
 */
</script>

<template>
  <component v-for="(hook, index) in hooks" :key="index" :is="hook.component" :component-data="hook.componentData" />
</template>
