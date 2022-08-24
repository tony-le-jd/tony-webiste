import './index.css'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApp, h, provide } from 'vue'

import App from './App.vue'
import { apolloClient } from './config'
import router from './router'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router)

app.mount('#app')
