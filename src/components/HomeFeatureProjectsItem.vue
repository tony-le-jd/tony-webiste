<template>
  <a :href="url" class="fp-item">
    <div class="fp-item-img">
      <slot name="image" />
    </div>
    <div class="fp-item-content">
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
.fp-item-img {
  @apply flex sm:items-center sm:col-span-1;
}
.fp-item-content {
  @apply space-y-3 sm:col-span-3;
}
.fp-item-title {
  @apply font-bold text-xl text-white;
}
.fp-item-description {
  @apply text-gray-400;
}
</style>
