<script setup lang="ts">
const safetyTips = [
  {
    category: '自驾安全须知',
    icon: 'car',
    tips: [
      '出发前全面检查车辆：轮胎、刹车、灯光、机油、冷却液',
      '注意特殊路段限速：青岛单行线多，威海环海路限速40km/h',
      '长途驾驶每2小时进服务区休息，避免疲劳驾驶',
      '保持足够车距，雨天减速慢行',
      '严禁酒后驾车，啤酒博物馆饮酒后休息至少1小时'
    ]
  },
  {
    category: '旅行安全',
    icon: 'shield',
    tips: [
      '贵重物品随身携带，乘船时特别注意',
      '游泳区域不要超出安全范围，遵守警示标志',
      '海滩活动注意潮汐时间表',
      '随身携带常用药品：晕车药、肠胃药、创可贴',
      '保持手机电量充足，存好紧急联系方式'
    ]
  },
  {
    category: '紧急联系方式',
    icon: 'phone',
    tips: [
      '交通事故：122',
      '医疗急救：120',
      '匪警：110',
      '火警：119',
      '高速公路救援：12122'
    ]
  }
]
</script>

<template>
  <section class="page-section bg-blue-50" :id="$attrs.id">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">安全指南</h2>
      <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        确保旅途安全无忧的重要提示和紧急联系方式
      </p>
      
      <!-- Safety Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(safety, index) in safetyTips" 
          :key="index"
          class="card p-6 hover:transform hover:scale-105 transition-all duration-300"
        >
          <!-- Icon -->
          <div class="flex justify-center mb-4">
            <div 
              class="w-16 h-16 rounded-full flex items-center justify-center text-white"
              :class="{
                'bg-primary-500': safety.icon === 'car',
                'bg-accent-500': safety.icon === 'shield',
                'bg-red-500': safety.icon === 'phone'
              }"
            >
              <svg v-if="safety.icon === 'car'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 6h8m-8 6h8" />
              </svg>
              <svg v-else-if="safety.icon === 'shield'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-bold text-center mb-4">{{ safety.category }}</h3>
          <ul class="space-y-3">
            <li 
              v-for="(tip, tipIndex) in safety.tips" 
              :key="tipIndex"
              class="flex items-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ tip }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>