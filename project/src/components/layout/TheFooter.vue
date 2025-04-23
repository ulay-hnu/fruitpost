<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">毕业旅行</h3>
          <p class="text-gray-400">
            为五位即将毕业的大学生设计的青岛-威海六天自驾毕业旅行计划。安全、愉快、难忘的旅程！
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">重要链接</h3>
          <ul class="space-y-2">
            <li><a href="#itinerary" class="text-gray-400 hover:text-white transition-colors">行程安排</a></li>
            <li><a href="#safety" class="text-gray-400 hover:text-white transition-colors">安全指南</a></li>
            <li><a href="#tools" class="text-gray-400 hover:text-white transition-colors">实用工具</a></li>
            <li><a href="#budget" class="text-gray-400 hover:text-white transition-colors">旅行预算</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">联系方式</h3>
          <ul class="space-y-2 text-gray-400">
            <li>紧急联系: 122 (交通事故)</li>
            <li>医疗急救: 120</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; {{ currentYear }} 毕业旅行策划小组. 版权所有.</p>
      </div>
    </div>
  </footer>
</template>