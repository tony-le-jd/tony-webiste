<template>
  <a :href="url" class="fp-item">
    <div class="flex sm:items-center sm:col-span-1">
      <slot name="image" />
    </div>
    <div class="space-y-3 sm:col-span-3">
      <p class="fp-item-title">{{ title }}</p>
      <p class="fp-item-description">{{ description }}</p>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeFeatureProjectsItem',
  props: {
    url: { type: String, required: true },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>
<style scoped lang="css">
.fp-item {
  @apply rounded-box grid grid-cols-1 shadow-md bg-neutral-focus px-4 py-4 space-y-4 sm:grid-cols-4 sm:space-y-0 hover:bg-neutral;
}
.fp-item-title {
  @apply font-bold text-xl text-white;
}
.fp-item-description {
  @apply text-gray-400;
}
</style>
