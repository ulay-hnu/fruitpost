<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const budgetData = [
  { category: '住宿', min: 700, max: 1000, icon: '🏨', color: 'from-blue-400 to-blue-600' },
  { category: '餐饮', min: 800, max: 1000, icon: '🍽️', color: 'from-green-400 to-green-600' },
  { category: '交通', min: 600, max: 800, icon: '🚗', color: 'from-yellow-400 to-yellow-600' },
  { category: '门票', min: 400, max: 600, icon: '🎫', color: 'from-purple-400 to-purple-600' },
  { category: '纪念品', min: 200, max: 400, icon: '🎁', color: 'from-red-400 to-red-600' },
  { category: '其他', min: 300, max: 400, icon: '📌', color: 'from-indigo-400 to-indigo-600' }
]

const totalMin = budgetData.reduce((sum, item) => sum + item.min, 0)
const totalMax = budgetData.reduce((sum, item) => sum + item.max, 0)

onMounted(() => {
  gsap.from('.budget-bar', {
    scaleX: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    transformOrigin: 'left center'
  })
})
</script>

<template>
  <section class="page-section bg-gray-50" :id="$attrs.id">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">旅行预算</h2>
      <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        人均费用估算和每项支出明细，助你合理规划旅行资金
      </p>
      
      <!-- Total Budget -->
      <div class="card p-8 text-center mb-12">
        <h3 class="text-xl font-bold mb-2">总预算（人均）</h3>
        <div class="text-4xl font-bold text-primary-600 mb-4">
          ¥{{ totalMin }} - ¥{{ totalMax }}
        </div>
        <p class="text-gray-600">
          此预算是基于五人同行的估算，包含全程食宿、交通、门票和活动费用。
        </p>
      </div>
      
      <!-- Budget Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left: Bar Chart -->
        <div class="card p-6">
          <h3 class="text-xl font-bold mb-6">费用分布</h3>
          
          <div class="space-y-6">
            <div v-for="(item, index) in budgetData" :key="index" class="space-y-2">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <span class="mr-2 text-xl">{{ item.icon }}</span>
                  <span class="font-medium">{{ item.category }}</span>
                </div>
                <span class="font-medium">¥{{ item.min }} - ¥{{ item.max }}</span>
              </div>
              
              <div class="h-6 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  class="budget-bar h-full rounded-full bg-gradient-to-r"
                  :class="item.color"
                  :style="{
                    width: `${(item.max / totalMax) * 100}%`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Budget Tips -->
        <div class="card p-6">
          <h3 class="text-xl font-bold mb-6">省钱小贴士</h3>
          
          <ul class="space-y-4">
            <li class="flex items-start">
              <div class="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold">分享住宿费用</h4>
                <p class="text-gray-600">选择多人间民宿或公寓，每人可省100-200元</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <div class="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold">当地居民价格</h4>
                <p class="text-gray-600">使用学生证，许多景点可享受优惠价</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <div class="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold">自带零食和水</h4>
                <p class="text-gray-600">景点内食品价格高，自带可节省100-150元</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <div class="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold">错峰出行</h4>
                <p class="text-gray-600">避开节假日，住宿和门票可省20%-30%</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>