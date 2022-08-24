<template>
  <div class="space-y-4 animate-pulse">
    <div class="shimmer-common shimmer-image" />
    <div class="shimmer-body">
      <div class="shimmer-common shimmer-title" />
      <div class="shimmer-common shimmer-description" />
      <div class="shimmer-common shimmer-technology" />
      <div class="shimmer-btn" />
    </div>
  </div>
</template>
<style scoped lang="css">
.shimmer-common {
  @apply rounded-xl bg-neutral-focus
}
.shimmer-image {
  @apply h-60 lg:h-96 w-full max-w-screen-lg mx-auto;
}
.shimmer-body {
  @apply space-y-3;
}
.shimmer-title {
  @apply h-10 w-1/2;
}
.shimmer-description {
  @apply h-28 w-full;
}
.shimmer-technology {
  @apply h-10;
}
.shimmer-btn {
  @apply h-12 w-20;
}
</style>
