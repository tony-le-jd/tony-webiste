<template>
  <div class="hfp-container">
    <div class="hfp-title-content">
      <h2 class="hfp-title-content--h2">Feature projects</h2>
      <p class="hfp-title-content--content">A collection of recent projects that I have shipped recently.</p>
    </div>
    <div class="hfp-project">
      <home-feature-projects-item
        title="MJ Home"
        url="https://www.mjhome.co.nz"
        description="A properties rental website where customers can search for properties in their area, contact agent for rental enquiry and more."
      >
        <template #image>
          <img src="../assets/mj-home-logo.png" class="hfp-project-item--img" alt="MJ Home" />
        </template>
      </home-feature-projects-item>
      <home-feature-projects-item
        title="Hanoi Eatery"
        url="https://hanoieatery.co.nz/"
        description="A Vietnamese restaurant website where customers can purchase food online and pickup."
      >
        <template #image>
          <img src="../assets/hanoi-eatery-logo.png" class="hfp-project-item--img" alt="MJ Home" />
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
<style lang="css" scoped>
.hfp-container {
  @apply pt-6 px-4 sm:px-6;
}
.hfp-title-content {
  @apply space-y-3;
}
.hfp-title-content--h2 {
  @apply text-2xl text-white font-bold;
}
.hfp-title-content--content {
  @apply text-gray-500;
}
.hfp-project {
  @apply pt-10 space-y-5;
}
.hfp-project-item--img {
  @apply h-24 w-auto sm:m-auto;
}
</style>
