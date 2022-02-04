<template>
  <div class="ats-container">
    <h2 class="ats-title">About this site</h2>
    <p class="ats-content">In case you were wondering about this site:</p>
    <ul role="list" class="ats-list">
      <li>Designed and built on a Mac using WebStorm.</li>
      <li>Coded in Vue.js, TailwindCSS, Vite.</li>
      <li>Hosted on Netlify.</li>
      <li>Using beautiful Comfortaa font.</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutThisSite',
})
</script>
<style lang="css" scoped>
.ats-container {
  @apply space-y-3;
}
.ats-title {
  @apply text-2xl text-white sm:text-3xl;
}
.ats-content {
  @apply text-gray-400;
}
.ats-list {
  @apply list-disc list-inside space-y-1 tracking-wide text-gray-400;
}
</style>
