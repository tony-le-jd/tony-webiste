<template>
  <div>
    <div class="about-intro">
      <p>
        I'm The Ton Le or Tony, a New Zealand based web developer with over 2 years of experience. I specialise in front-end and back-end development with a
        focus on usability and simplicity.
      </p>
      <p>
        I've been working at Jayden Digital Ltd for almost 2 years as a Web Developer Lead. Working at JDL is a great pleasure to me because I could work to
        work with Vue.js, React.js, Node.js, etc. and I'm very excited to continue learning and improving my skills.
      </p>
    </div>
    <div class="divider" />
    <about-this-site />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import AboutThisSite from '../components/AboutThisSite.vue'
export default {
  components: { AboutThisSite }
}
defineComponent({
  name: 'AboutMe',
})
</script>
<style scoped lang="css">
.about-intro {
  @apply text-gray-400 tracking-wide space-y-3
}
</style>
