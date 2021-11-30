<template>
  <div class="space-y-3">
    <p class="text-2xl text-white sm:text-3xl">About this site</p>
    <p class="text-gray-400">In case you were wondering about this site:</p>
    <ul role="list" class="list-disc list-inside space-y-1 tracking-wide text-gray-400">
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
