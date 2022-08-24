<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

import ProjectItem from '../components/ProjectItem.vue'
import ProjectItemShimmer from "../components/ProjectItemShimmer.vue";
import { getProjects } from '../schemas/Project'
import { ProjectsType } from '../typing'

const { result, loading } = useQuery<ProjectsType>(getProjects)
const projectsData = computed(() => result.value !== undefined ? result.value.projects.data : [])
</script>
<template>
  <div>
    <h1 class="page-title">Projects</h1>
    <div class="divider" />
    <div v-if="loading && !projectsData.length">
      <project-item-shimmer />
      <project-item-shimmer />
      <project-item-shimmer />
    </div>
    <div class="pi-container" v-else>
      <div v-for="project in projectsData" :key="project.attributes.project.id">
        <project-item
          :title="project.attributes.project.title"
          :url="project.attributes.project.url"
          :description="project.attributes.project.description"
          :image="`http://localhost:1337` + project.attributes.project.image.data.attributes.url"
        >
          <template #image>
            <img
              :src="`http://localhost:1337` + project.attributes.project.image.data.attributes.url"
              :alt="project.attributes.project.title"
              class="project-item-image"
            />
          </template>
          <template #technology>
            <div class="pi-content">
              <p class="pi-title">Technology Stacks:</p>
              <img
                v-for="(icon, index) in project.attributes.project.stacks.icons.data"
                :key="index"
                alt="icon"
                :src="`http://localhost:1337` + icon.attributes.url"
                class="pi-icon"
              />
            </div>
          </template>
        </project-item>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.project-item-image {
  @apply rounded-xl h-auto w-full border-neutral-focus border max-w-screen-lg mx-auto;
}
.pi-container {
  @apply space-y-14 sm:space-y-20;
}
.pi-content {
  @apply flex items-center space-x-3;
}
.pi-title {
  @apply text-base-300 space-y-3 leading-7 tracking-wide;
}
.pi-icon {
  @apply h-8 w-8;
}
</style>
