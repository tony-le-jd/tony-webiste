<template>
  <div class="project-item-divider">
    <div class="project-item-image">
      <slot name="image" />
    </div>
    <div class="project-item-body">
      <p class="project-item-title">{{ title }}</p>
      <div class="project-item-description">
        <p>{{ description }}</p>
      </div>
      <slot name="technology" />
      <button class="app-btn" v-if="url !== ''">
        <a :href="url" class="btn-link">
          <span class="self-center">{{ url }}</span> <arrow-up-icon class="project-item-icon"
        /></a>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ArrowUpIcon from './icons/ArrowUpIcon.vue'

export default defineComponent({
  name: 'ProjectItem',
  components: { ArrowUpIcon },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
})
</script>
<style scoped lang="css">
.project-item-divider {
  @apply space-y-4;
}
.project-item-body {
  @apply text-left max-w-3xl mx-auto space-y-3;
}
.project-item-title {
  @apply text-3xl font-bold text-white;
}
.project-item-description {
  @apply text-base-300 space-y-3 leading-7 tracking-wide;
}
.project-item-icon {
  @apply w-5 h-5 ml-1 fill-current rotate-45 text-gray-500;
}
.btn-link {
  @apply flex items-center;
}
</style>
