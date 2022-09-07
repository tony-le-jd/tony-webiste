<script setup lang="ts">
import TheFooter from './layout/TheFooter.vue'
import TheNavigation from './layout/TheNavigation.vue'
const height = `calc(${window.innerHeight}px - 7.5rem)`
</script>

<template>
  <div class="app-container">
    <the-navigation />
    <main class="main-content" :style="{ minHeight: height }">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <the-footer />
  </div>
</template>
<style>
.app-container {
  @apply bg-black;
}
.dividers {
  @apply divider;
}
</style>
