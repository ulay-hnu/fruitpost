<script setup lang="ts">
import { ref, computed } from 'vue'

const confirmationItems = [
  { id: 1, text: '车辆全面检测（出发前3天）', checked: false },
  { id: 2, text: '下载必备APP', checked: false },
  { id: 3, text: '预订所有住宿', checked: false },
  { id: 4, text: '准备常用药品', checked: false },
  { id: 5, text: '准备证件（身份证、学生证、驾驶证）', checked: false },
  { id: 6, text: '购买短期自驾保险', checked: false },
  { id: 7, text: '检查相机/手机存储空间', checked: false },
  { id: 8, text: '预定特殊活动（如星空电影）', checked: false }
]

const graduationTips = [
  {
    title: '拍摄创意',
    description: '在小麦岛用无人机拍5人毕业字母阵',
    icon: '📷'
  },
  {
    title: '定制纪念品',
    description: '啤酒博物馆定制啤酒瓶标签（¥30/瓶）',
    icon: '🍺'
  },
  {
    title: '仪式感',
    description: '每人准备一封信，最后一天集体朗读',
    icon: '✉️'
  },
  {
    title: '集体照',
    description: '每个城市找一处标志性建筑合影',
    icon: '👨‍👩‍👧‍👦'
  }
]

function toggleItem(id: number) {
  const item = confirmationItems.find(i => i.id === id)
  if (item) {
    item.checked = !item.checked
  }
}

const checkedCount = computed(() => {
  return confirmationItems.filter(item => item.checked).length
})

const progress = computed(() => {
  return (checkedCount.value / confirmationItems.length) * 100
})
</script>

<template>
  <section class="page-section bg-accent-50" :id="$attrs.id">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">最终确认</h2>
      <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        出发前的最后检查清单和毕业旅行专属建议
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Checklist -->
        <div class="card p-6">
          <h3 class="text-xl font-bold mb-4">最终确认清单</h3>
          
          <!-- Progress -->
          <div class="mb-6">
            <div class="flex justify-between mb-2">
              <span class="text-sm text-gray-600">完成进度</span>
              <span class="text-sm font-medium">{{ checkedCount }}/{{ confirmationItems.length }}</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div 
                class="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                :style="{ width: `${progress}%` }"
              ></div>
            </div>
          </div>
          
          <!-- Checklist Items -->
          <ul class="space-y-3">
            <li 
              v-for="item in confirmationItems" 
              :key="item.id"
              class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              @click="toggleItem(item.id)"
            >
              <div 
                class="w-5 h-5 rounded mr-3 flex items-center justify-center border"
                :class="item.checked ? 'bg-green-500 border-green-500' : 'border-gray-300'"
              >
                <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span :class="{ 'line-through text-gray-400': item.checked }">{{ item.text }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Graduation Special Tips -->
        <div class="card p-6">
          <h3 class="text-xl font-bold mb-6">毕业旅行专属建议</h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div 
              v-for="(tip, index) in graduationTips" 
              :key="index"
              class="p-4 rounded-lg bg-white border border-gray-200 hover:border-accent-300 transition-colors"
            >
              <div class="text-2xl mb-2">{{ tip.icon }}</div>
              <h4 class="font-bold">{{ tip.title }}</h4>
              <p class="text-gray-600 text-sm">{{ tip.description }}</p>
            </div>
          </div>
          
          <div class="mt-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 class="font-bold text-blue-800 mb-2">温馨提示</h4>
            <p class="text-blue-700">
              记录旅途中每一个珍贵时刻，这是属于你们最后的大学时光。祝你们拥有一段安全又难忘的毕业旅行！
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>