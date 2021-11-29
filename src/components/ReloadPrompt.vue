<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
// replaced dynamically
const reloadSW: any = 'false'
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegistered(r) {
    if (reloadSW === 'true') {
      r &&
        setInterval(async () => {
          await r.update()
        }, 2000 /* 20s for testing purposes */)
    } else {
      console.log(`SW Registered: ${r}`)
    }
  },
})
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else> New content available, click on reload button to update. </span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
    <button @click="close">Close</button>
  </div>
</template>

<style scoped lang="css">
.pwa-toast {
  @apply fixed right-0 bottom-0 border border-neutral rounded-md z-10 text-left shadow-lg bg-white m-4 p-4 w-1/5;
}
.pwa-toast .message {
  @apply text-sm mb-2;
}
.pwa-toast button {
  @apply border border-neutral text-sm px-1 py-0.5 rounded-md hover:border-neutral-focus;
}
</style>
