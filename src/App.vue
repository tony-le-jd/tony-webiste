<script setup lang="ts">
import ReloadPrompt from './components/ReloadPrompt.vue'
import TheNavigation from './layout/TheNavigation.vue'
</script>

<template>
  <div class="bg-black">
    <the-navigation />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <reload-prompt />
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
