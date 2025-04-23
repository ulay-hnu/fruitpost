<script setup lang="ts">
import { ref } from 'vue'
import DayCard from '../ui/DayCard.vue'

const activeDay = ref(1)

// 行程数据
const itineraryData = [
  {
    day: 1,
    title: '北京→青岛（轻松过渡日）',
    activities: [
      { time: '08:30', description: '北京出发（G18荣乌高速，建议2小时轮换司机）' },
      { time: '12:00', description: '东营服务区午餐（黄河口鲜鱼汤¥35/人）' },
      { time: '15:00', description: '抵达青岛，入住市南区民宿（推荐「熹知·空间」）' },
      { time: '16:30', description: '自由活动：台东步行街（小吃推荐：怀胎豆腐¥12）' },
      { time: '19:00', description: '晚餐：波螺油子（人均¥80）' },
      { time: '20:30', description: '毕业活动：石老人海滩夜光风筝（租风筝¥20/小时）' },
      { time: '22:00', description: '返回住宿' }
    ],
    safetyTips: [
      '出发前检查轮胎胎压、刹车、机油、冷却液',
      '青岛老城区单行线多，建议用高德地图实时导航',
      '夜间海滩活动注意潮汐'
    ],
    image: 'https://images.pexels.com/photos/9486861/pexels-photo-9486861.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    day: 2,
    title: '青岛文艺日',
    activities: [
      { time: '08:30', description: '早餐：甜沫+火烧（¥10）' },
      { time: '10:00', description: '小麦岛野餐（停留2小时）' },
      { time: '12:30', description: '午餐：船歌鱼水饺（人均¥70）' },
      { time: '14:30', description: '啤酒博物馆（门票¥60）' },
      { time: '17:00', description: '自由时间：大学路网红墙' },
      { time: '19:00', description: '晚餐：大杰海鲜锅（人均¥100）' },
      { time: '21:00', description: '毕业活动：民宿桌游/微醺派对' }
    ],
    safetyTips: [
      '啤酒博物馆饮酒后至少休息1小时再驾车'
    ],
    image: 'https://images.pexels.com/photos/13647310/pexels-photo-13647310.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    day: 3,
    title: '崂山轻徒步',
    activities: [
      { time: '09:00', description: '自驾崂山仰口景区（门票¥90）' },
      { time: '11:00', description: '青山渔村拍照' },
      { time: '12:30', description: '午餐：渔村农家宴（人均¥60）' },
      { time: '14:00', description: '贝壳DIY体验（¥20）' },
      { time: '16:00', description: '返回市区' },
      { time: '18:30', description: '晚餐：民宿自制海鲜（人均¥50）' },
      { time: '20:00', description: '毕业活动：金沙滩星空电影（¥200/场）' }
    ],
    safetyTips: [
      '崂山盘山路禁止夜间行驶'
    ],
    image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    day: 4,
    title: '青岛→威海',
    activities: [
      { time: '09:00', description: '退房出发' },
      { time: '12:00', description: '威海午餐：韩乐坊「真利味脊骨锅」（人均¥60）' },
      { time: '14:00', description: '入住威海橙烨青旅' },
      { time: '15:30', description: '火炬八街拍照' },
      { time: '18:00', description: '小石岛赶海（工具租赁¥20）' },
      { time: '20:00', description: '晚餐：烧烤摊（人均¥40）' }
    ],
    safetyTips: [
      '威海环海路限速40km/h'
    ],
    image: 'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    day: 5,
    title: '威海深度日（方案A：海岛控）',
    activities: [
      { time: '09:30', description: '乘船至刘公岛（门票¥122，甲午战争博物馆必看）' },
      { time: '12:30', description: '午餐：岛上「邓州街小吃」（人均¥30）' },
      { time: '14:00', description: '返回市区，租电动车环环海路（¥50/车）' },
      { time: '16:30', description: '自由活动：国际海水浴场游泳' },
      { time: '18:30', description: '日落吧「SUNSET」喝特调（人均¥45）' },
      { time: '20:00', description: '晚餐：韩乐坊「高基五春川炒鸡排」（人均¥60）' }
    ],
    safetyTips: [
      '刘公岛渡轮保管好贵重物品',
      '电动车骑行戴头盔'
    ],
    image: 'https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    day: 6,
    title: '威海→北京（安全返程）',
    activities: [
      { time: '08:00', description: '早餐后退房' },
      { time: '08:30', description: '威海出发（G18荣乌高速，全程约700公里）' },
      { time: '12:00', description: '东营服务区午餐+休息（推荐「高速美食城」）' },
      { time: '14:00', description: '河北段切换G2京沪高速（车流较少）' },
      { time: '17:00', description: '大羊坊检查站进京（避开晚高峰）' },
      { time: '18:30', description: '抵达北京' }
    ],
    safetyTips: [
      '出发前加满油（威海油价较便宜）',
      '下载「e高速」APP查实时路况',
      '每2小时强制休息（推荐服务区：东营、沧州）'
    ],
    image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
]

const setActiveDay = (day: number) => {
  activeDay.value = day
}

// Get current active day data
const getCurrentDayData = () => {
  return itineraryData.find(data => data.day === activeDay.value) || itineraryData[0]
}
</script>

<template>
  <section class="page-section bg-white" :id="$attrs.id">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">行程安排</h2>
      <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        六天详细行程表，包含每日活动安排、用餐推荐和安全提示
      </p>
      
      <!-- Day Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          v-for="day in 6" 
          :key="day"
          @click="setActiveDay(day)"
          class="rounded-full px-4 py-2 font-medium transition-colors"
          :class="activeDay === day 
            ? 'bg-primary-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          Day {{ day }}
        </button>
      </div>
      
      <!-- Day Content -->
      <div class="relative">
        <transition name="slide" mode="out-in">
          <DayCard 
            :key="activeDay"
            :day="getCurrentDayData().day"
            :title="getCurrentDayData().title"
            :activities="getCurrentDayData().activities"
            :safetyTips="getCurrentDayData().safetyTips"
            :image="getCurrentDayData().image"
          />
        </transition>
      </div>
      
      <!-- Navigation Arrows -->
      <div class="flex justify-center mt-8 gap-4">
        <button 
          @click="setActiveDay(activeDay > 1 ? activeDay - 1 : 6)"
          class="btn btn-outline"
          aria-label="上一天"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          上一天
        </button>
        <button 
          @click="setActiveDay(activeDay < 6 ? activeDay + 1 : 1)"
          class="btn btn-outline"
          aria-label="下一天"
        >
          下一天
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>