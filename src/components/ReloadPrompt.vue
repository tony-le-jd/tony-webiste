<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { onMounted } from 'vue'
// replaced dynamically
const reloadSW: any = 'true'
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegistered(r) {
    if (reloadSW === 'true') {
      r &&
        setInterval(async () => {
          await r.update()
        }, 20000)
    } else {
      console.log(`SW Registered: ${r}`)
    }
  },
})
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
onMounted(() => {
  if (offlineReady.value) console.log('App ready to work offline')
})
</script>

<template>
  <div v-if="needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span>New content available, click on reload button to update.</span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
    <button @click="close">Close</button>
  </div>
</template>

<style scoped lang="css">
.pwa-toast {
  @apply fixed right-0 bottom-0 border border-neutral rounded-md z-10 text-left shadow-lg bg-white m-4 p-4 w-1/2 sm:w-1/5;
}
.pwa-toast .message {
  @apply text-sm mb-2;
}
.pwa-toast button {
  @apply border border-neutral text-sm px-1 py-0.5 rounded-md hover:border-neutral-focus;
}
</style>
