<template>
  <Hooks :hooks="hooks.pages.Lens.before" />
  <ResourceLens
    :resourceName="resourceName"
    :lens="lens"
    :searchable="searchable"
  />
  <Hooks :hooks="hooks.pages.Lens.after" />
</template>

<script>
import { mapProps } from '@/mixins'
import ResourceLens from '@/views/Lens'

export default {
  name: 'Lens',

  components: {
    ResourceLens,
  },

  props: {
    lens: {
      type: String,
      required: true,
    },

    searchable: {
      type: Boolean,
      default: false,
    },

    ...mapProps(['resourceName']),
  },

  data: () => ({
    hooks: Nova.config('hooks')
  })
}
</script>
