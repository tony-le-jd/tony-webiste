<template>
  <div class="home-hero-container">
    <h1 class="home-hero--title">First, solve the problem. Then write the code.</h1>
    <div class="home-hero--intro">
      <p>
        I'm The Ton Le or Tony, a New Zealand based web developer with over 2 years of experience. I specialise in front-end and back-end development with a
        focus on usability and simplicity.
      </p>
      <p>
        I've been working at Jayden Digital Ltd for almost 2 years as a Web Developer Lead. Working at JDL is a great pleasure to me because I could work to
        work with Vue.js, React.js, Node.js, etc. and I'm very excited to continue learning and improving my skills.
      </p>
    </div>
    <div class="home-hero--links">
      <a href="https://github.com/tony-le-jd"><img src="../assets/GitHub-Mark-64px.png" alt="Github image" class="home-hero--img" /></a>
      <a href="mailto:theton369@gmail.com" class="app-btn">Email Me</a>
    </div>
  </div>
</template>
<style lang="css" scoped>
.home-hero-container {
  @apply p-4 text-left sm:p-6;
}
.home-hero--title {
  @apply text-4xl text-white font-bold leading-normal sm:text-5xl;
}
.home-hero--intro {
  @apply pt-5 space-y-12 text-lg text-gray-400 leading-8 tracking-wide;
}
.home-hero--links {
  @apply pt-10 flex space-x-6 items-center;
}
.home-hero--img {
  @apply h-8 w-8 filter invert;
}
</style>
