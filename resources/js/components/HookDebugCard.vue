<script setup>
defineProps(['componentData'])
</script>
<template>
  <Card class="p-4">
    <h2 class="font-medium text-lg">Hook</h2>
    <code class="font-mono">
      {{ componentData }}
    </code>
  </Card>
</template>
