<script setup lang="ts">
import { ref, computed } from 'vue'

const appCards = [
  {
    name: '高德地图',
    category: '导航',
    description: '精确导航、路况查询、限行提醒',
    icon: '🗺️'
  },
  {
    name: '携程/爱彼迎',
    category: '住宿',
    description: '酒店预订、民宿查询、特价房源',
    icon: '🏨'
  },
  {
    name: '大众点评',
    category: '美食',
    description: '餐厅推荐、用户评价、优惠券',
    icon: '🍽️'
  },
  {
    name: '交管12123',
    category: '应急',
    description: '交通违章查询、事故处理',
    icon: '🚨'
  },
  {
    name: 'e高速',
    category: '路况',
    description: '高速路况、服务区信息、收费标准',
    icon: '🛣️'
  },
  {
    name: '墨迹天气',
    category: '天气',
    description: '实时天气、预报、空气质量',
    icon: '☀️'
  }
]

const essentialItems = [
  { name: '身份证', category: '证件', icon: '📇' },
  { name: '驾驶证', category: '证件', icon: '🪪' },
  { name: '行驶证', category: '证件', icon: '📑' },
  { name: '晕车药', category: '药品', icon: '💊' },
  { name: '肠胃药', category: '药品', icon: '💊' },
  { name: '创可贴', category: '药品', icon: '🩹' },
  { name: '太阳镜', category: '装备', icon: '🕶️' },
  { name: '防晒霜', category: '装备', icon: '🧴' },
  { name: '泳衣', category: '装备', icon: '👙' },
  { name: '充电宝', category: '电子', icon: '🔋' },
  { name: '相机', category: '电子', icon: '📷' },
  { name: '蓝牙音箱', category: '电子', icon: '🔊' }
]

const categories = ['全部', '证件', '药品', '装备', '电子']
const selectedCategory = ref('全部')

const filteredItems = computed(() => {
  if (selectedCategory.value === '全部') {
    return essentialItems
  }
  return essentialItems.filter(item => item.category === selectedCategory.value)
})

function setCategory(category: string) {
  selectedCategory.value = category
}
</script>

<template>
  <section class="page-section bg-white" :id="$attrs.id">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">实用工具</h2>
      <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        旅行必备APP和物品清单，让你的旅程更加便捷
      </p>
      
      <!-- App Recommendations -->
      <h3 class="text-2xl font-bold mb-6">推荐APP</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div 
          v-for="(app, index) in appCards" 
          :key="index"
          class="card p-5 flex items-start hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-3xl mr-4">{{ app.icon }}</div>
          <div>
            <h4 class="font-bold text-lg">{{ app.name }}</h4>
            <div class="text-sm text-primary-600 mb-2">{{ app.category }}</div>
            <p class="text-gray-600">{{ app.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Essential Items -->
      <h3 class="text-2xl font-bold mb-6">必备物品</h3>
      
      <!-- Category Filter -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="setCategory(category)"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          :class="selectedCategory === category 
            ? 'bg-secondary-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Items Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="index"
          class="card p-4 text-center hover:bg-gray-50 transition-colors duration-200"
        >
          <div class="text-3xl mb-2">{{ item.icon }}</div>
          <h4 class="font-medium">{{ item.name }}</h4>
          <div class="text-xs text-gray-500">{{ item.category }}</div>
        </div>
      </div>
    </div>
  </section>
</template>