<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

import ContentfulIcon from '@/components/icons/ContentfulIcon.vue'
import MagentoIcon from '@/components/icons/MagentoIcon.vue'
import MailchimpIcon from '@/components/icons/MailchimpIcon.vue'
import NodejsIcon from '@/components/icons/NodejsIcon.vue'
import TailwindcssIcon from '@/components/icons/TailwindcssIcon.vue'
import VuejsIcon from '@/components/icons/VuejsIcon.vue'
import WooIcon from '@/components/icons/WooIcon.vue'
import { getProjects } from '@/schemas/Project'
import type { ProjectsType } from '@/typing'

import ProjectItem from '../components/ProjectItem.vue'
import ProjectItemShimmer from '../components/ProjectItemShimmer.vue'

const { result, loading } = useQuery<ProjectsType>(getProjects)
const projectsData = computed(() => (result.value !== undefined ? result.value.projects.data : []))
</script>
<template>
  <div>
    <h1 class="page-title">Projects</h1>
    <div class="dividers" />
    <!--    <div v-if="loading && !projectsData.length">-->
    <!--      <project-item-shimmer />-->
    <!--      <project-item-shimmer />-->
    <!--      <project-item-shimmer />-->
    <!--    </div>-->
    <!--    <div class="pi-container" v-else>-->
    <!--      <div v-for="project in projectsData" :key="project.attributes.project.id">-->
    <!--        <project-item :title="project.attributes.project.title" :url="project.attributes.project.url" :description="project.attributes.project.description">-->
    <!--          <template #image>-->
    <!--            <img-->
    <!--              v-if="project.attributes.project.image.data !== null"-->
    <!--              :src="project.attributes.project.image.data.attributes.url"-->
    <!--              :alt="project.attributes.project.title"-->
    <!--              class="project-item-image"-->
    <!--            />-->
    <!--          </template>-->
    <!--          <template #technology>-->
    <!--            <div class="pi-content">-->
    <!--              <p class="pi-title">Technology Stacks:</p>-->
    <!--              <img v-for="(icon, index) in project.attributes.project.stacks.icons.data" :key="index" alt="icon" :src="icon.attributes.url" class="pi-icon" />-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </project-item>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="pi-container">
      <!-- MJ Home -->
      <project-item
        title="MJ Home"
        description="A properties rental website where customers can search for properties in their area, contact agent for rental enquiry and more. While working on this project I have learnt so much about Vue.JS and Contentful"
        url="mjhome.co.nz"
        image="src/assets/mj-home-screenshot.png"
      >
        <template #image>
          <img src="../assets/mj-home-screenshot.png" alt="MJ Home" class="project-item-image" />
        </template>
        <template #technology>
          <div class="pi-content">
            <p class="pi-title">Technology Stacks:</p>
            <vuejs-icon class="pi-icon" />
            <tailwindcss-icon class="pi-icon" />
            <contentful-icon class="pi-icon" />
            <mailchimp-icon class="pi-icon" />
            <nodejs-icon class="pi-icon" />
          </div>
        </template>
      </project-item>
      <!-- Hanoi Eatery -->
      <project-item
        title="Hanoi Eatery"
        description="A Vietnamese restaurant website where customers can purchase food online and pickup. I have integrated the payment gateway with NZ PayMark and have also integrated the restaurant menu with WooCommerce."
        url="hanoieatery.co.nz"
        image="src/assets/hanoi-eatery-screenshot.png"
      >
        <template #image>
          <img src="../assets/hanoi-eatery-screenshot.png" alt="Hanoi Eatery" class="project-item-image" />
        </template>
        <template #technology>
          <div class="pi-content">
            <p class="pi-title">Technology Stacks:</p>
            <vuejs-icon class="pi-icon" />
            <tailwindcss-icon class="pi-icon" />
            <nodejs-icon class="pi-icon" />
            <woo-icon class="pi-icon" />
          </div>
        </template>
      </project-item>
      <!-- Expense Tracking -->
      <project-item
        title="Expense Tracking"
        description="An expense tracking application where users can track their expenses and keep track of their expenses. I have used Vite build tool for fast HMR, instant server start, and highly optimized static assets."
        url=""
        image="src/assets/expense-tracking-screenshot.png"
      >
        <template #image>
          <img src="../assets/expense-tracking-screenshot.png" alt="Expense Tracking" class="project-item-image" />
        </template>
        <template #technology>
          <div class="pi-content">
            <p class="pi-title">Technology Stacks:</p>
            <vuejs-icon class="pi-icon" />
            <nodejs-icon class="pi-icon" />
            <tailwindcss-icon class="pi-icon" />
          </div>
        </template>
      </project-item>
      <!-- Shosha Portal -->
      <project-item
        title="Shosha Portal"
        description="An admin and users dashboard for day to day operation of the largest Vape company in New Zealand. This portal allow the company to integrate with multiple platforms."
        url=""
        image="src/assets/portal-screenshot.png"
      >
        <template #image>
          <img src="../assets/portal-screenshot.png" alt="Shosha Portal" class="project-item-image" />
        </template>
        <template #technology>
          <div class="pi-content">
            <p class="pi-title">Technology Stacks:</p>
            <react-icon class="pi-icon" />
            <material-ui-icon class="pi-icon" />
            <nodejs-icon class="pi-icon" />
          </div>
        </template>
      </project-item>
      <!-- Shosha Magento -->
      <project-item
        title="Shosha eCommerce"
        description="A Magento Ecommerce website for the largest Vape company in New Zealand."
        url="shosha.co.nz"
        image="src/assets/shosha-screenshot.png"
      >
        <template #image>
          <img src="../assets/shosha-screenshot.png" alt="Shosha eCommerce" class="project-item-image" />
        </template>
        <template #technology>
          <div class="pi-content">
            <p class="pi-title">Technology Stacks:</p>
            <magento-icon class="pi-icon" />
          </div>
        </template>
      </project-item>
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
