<script setup lang="ts">
import TheNavigation from './layout/TheNavigation.vue'
</script>

<template>
  <div class="bg-black">
    <the-navigation />
    <main class="max-w-screen-lg mx-auto px-4 mt-16 py-6 min-h-screen sm:px-6 sm:py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
