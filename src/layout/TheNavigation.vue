<template>
  <div class="navbar bg-black border-b border-gray-600 fixed top-0 w-full h-16">
    <div class="navbar-start">
      <router-link to="/"><logo-horizontal class="w-20 sm:w-40" /></router-link>
    </div>
    <div class="navbar-end space-x-2 sm:space-x-4">
      <router-link v-for="route in routes" :to="route.path" :key="route.name" class="navbar-item">{{ route.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LogoHorizontal from '../components/icons/LogoHorizontal.vue'
import { routes } from '../router'

export default defineComponent({
  name: 'TheNavigation',
  components: { LogoHorizontal },
  setup() {
    return {
      routes,
    }
  },
})
</script>
<style scoped lang="css">
.navbar-item {
  @apply text-gray-500 rounded-lg px-4 py-2 font-bold hover:bg-gray-500 hover:text-white;
}
.navbar-end .router-link-active.router-link-exact-active {
  @apply bg-gray-500 text-white;
}
</style>
