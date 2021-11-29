<template>
  <div class="pt-6 px-4 sm:px-6">
    <div class="space-y-3">
      <h2 class="text-2xl text-white font-bold">Feature projects</h2>
      <p class="text-gray-500">A collection of recent projects that I have shipped recently.</p>
    </div>
    <div class="pt-10 space-y-5">
      <home-feature-projects-item
        title="MJ Home"
        url="https://www.mjhome.co.nz"
        description="A properties rental website where customers can search for properties in their area, contact agent for rental enquiry and more."
      >
        <template #image>
          <img src="../assets/mj-home-logo.png" class="h-24 w-auto sm:m-auto" alt="MJ Home" />
        </template>
      </home-feature-projects-item>
      <home-feature-projects-item
        title="Hanoi Eatery"
        url="https://hanoi-eatery.netlify.app/"
        description="A Vietnamese restaurant website where customers can purchase food online and pickup."
      >
        <template #image>
          <img src="../assets/hanoi-eatery-logo.png" class="h-24 w-auto sm:m-auto" alt="MJ Home" />
        </template>
      </home-feature-projects-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomeFeatureProjectsItem from './HomeFeatureProjectsItem.vue'

export default defineComponent({
  name: 'HomeFeatureProjects',
  components: { HomeFeatureProjectsItem },
})
</script>
