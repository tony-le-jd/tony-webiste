<template>
  <nav class="navbar-container">
    <div class="navbar-start">
      <router-link to="/"><logo-horizontal class="navbar-logo" /></router-link>
    </div>
    <div class="navbar-end-container">
      <router-link v-for="route in routes" :to="route.path" :key="route.name" class="navbar-item">{{ route.name }}</router-link>
    </div>
  </nav>
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
.navbar-container {
  @apply navbar bg-black border-b border-gray-600 fixed top-0 w-full h-16;
}
.navbar-logo {
  @apply w-20 sm:w-40;
}
.navbar-item {
  @apply text-gray-500 rounded-lg px-4 py-2 font-bold hover:bg-gray-500 hover:text-white;
}
.navbar-end-container {
  @apply navbar-end space-x-2 sm:space-x-4;
}
.navbar-end-container .router-link-active.router-link-exact-active {
  @apply bg-gray-500 text-white;
}
</style>
