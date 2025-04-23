<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

interface Activity {
  time: string
  description: string
}

defineProps<{
  day: number
  title: string
  activities: Activity[]
  safetyTips: string[]
  image: string
}>()

onMounted(() => {
  gsap.from('.activity-item', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power1.out'
  })
})
</script>

<template>
  <div class="day-card grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
    <!-- Left: Image -->
    <div class="lg:col-span-1">
      <div class="rounded-xl overflow-hidden h-64 lg:h-full">
        <img :src="image" :alt="`Day ${day}: ${title}`" class="w-full h-full object-cover"/>
      </div>
    </div>
    
    <!-- Right: Content -->
    <div class="lg:col-span-2">
      <div class="flex items-center mb-4">
        <span class="bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">DAY {{ day }}</span>
        <h3 class="text-2xl font-bold">{{ title }}</h3>
      </div>
      
      <!-- Timeline -->
      <div class="space-y-4">
        <div 
          v-for="(activity, index) in activities" 
          :key="index"
          class="activity-item flex"
        >
          <div class="mr-4 flex flex-col items-center">
            <div class="bg-primary-50 text-primary-700 font-medium text-sm px-2 py-1 rounded">
              {{ activity.time }}
            </div>
            <div class="w-px h-full bg-gray-200 my-1" v-if="index !== activities.length - 1"></div>
          </div>
          <div class="pt-1">
            <p>{{ activity.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Safety Tips -->
      <div class="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
        <h4 class="font-bold text-red-700 mb-2">安全提示</h4>
        <ul class="space-y-1 text-red-800">
          <li v-for="(tip, index) in safetyTips" :key="index" class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {{ tip }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>