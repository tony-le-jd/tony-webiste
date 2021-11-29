<script setup lang="ts">
import ContentfulIcon from '../components/icons/ContentfulIcon.vue'
import MagentoIcon from '../components/icons/MagentoIcon.vue'
import MailchimpIcon from '../components/icons/MailchimpIcon.vue'
import MaterialUiIcon from '../components/icons/MaterialUiIcon.vue'
import NodejsIcon from '../components/icons/NodejsIcon.vue'
import ReactIcon from '../components/icons/ReactIcon.vue'
import TailwindcssIcon from '../components/icons/TailwindcssIcon.vue'
import VuejsIcon from '../components/icons/VuejsIcon.vue'
import WooIcon from '../components/icons/WooIcon.vue'
import ProjectItem from '../components/ProjectItem.vue'
</script>
<template>
  <div>
    <h1 class="page-title">Projects</h1>
    <div class="divider" />
    <div class="space-y-14 sm:space-y-20">
      <!-- MJ Home -->
      <project-item
        title="MJ Home"
        description="A properties rental website where customers can search for properties in their area, contact agent for rental enquiry and more. While working on this project I have learnt so much about Vue.JS and Contentful"
        url="mjhome.co.nz"
        image="src/assets/mj-home-screenshot.png"
      >
        <template #technology>
          <div class="flex items-center space-x-3">
            <p class="text-base-300 space-y-3 leading-7 tracking-wide">Technology Stacks:</p>
            <vuejs-icon class="h-8 w-8" />
            <tailwindcss-icon class="h-8 w-8" />
            <contentful-icon class="h-8 w-8" />
            <mailchimp-icon class="h-8 w-8" />
            <nodejs-icon class="h-8 w-8" />
          </div>
        </template>
      </project-item>
      <!-- Hanoi Eatery -->
      <project-item
        title="Hanoi Eatery"
        description="A Vietnamese restaurant website where customers can purchase food online and pickup. I have integrated the payment gateway with NZ PayMark and have also integrated the restaurant menu with WooCommerce."
        url="hanoi-eatery.netlify.app"
        image="src/assets/hanoi-eatery-screenshot.png"
      >
        <template #technology>
          <div class="flex items-center space-x-3">
            <p class="text-base-300 space-y-3 leading-7 tracking-wide">Technology Stacks:</p>
            <vuejs-icon class="h-8 w-8" />
            <tailwindcss-icon class="h-8 w-8" />
            <nodejs-icon class="h-8 w-8" />
            <woo-icon class="h-8 w-8" />
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
        <template #technology>
          <div class="flex items-center space-x-3">
            <p class="text-base-300 space-y-3 leading-7 tracking-wide">Technology Stacks:</p>
            <vuejs-icon class="h-8 w-8" />
            <nodejs-icon class="h-8 w-8" />
            <tailwindcss-icon class="h-8 w-8" />
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
        <template #technology>
          <div class="flex items-center space-x-3">
            <p class="text-base-300 space-y-3 leading-7 tracking-wide">Technology Stacks:</p>
            <react-icon class="h-8 w-8" />
            <material-ui-icon class="h-8 w-8" />
            <nodejs-icon class="h-8 w-8" />
          </div>
        </template>
      </project-item>
      <!-- Shosha Magento -->
      <project-item
        title="Shosha ECommerce"
        description="A Magento Ecommerce website for the largest Vape company in New Zealand."
        url="shosha.co.nz"
        image="src/assets/shosha-screenshot.png"
      >
        <template #technology>
          <div class="flex items-center space-x-3">
            <p class="text-base-300 space-y-3 leading-7 tracking-wide">Technology Stacks:</p>
            <magento-icon class="h-8 w-8" />
          </div>
        </template>
      </project-item>
    </div>
  </div>
</template>
