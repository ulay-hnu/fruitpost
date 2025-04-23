<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { name: '行程安排', href: '#itinerary' },
  { name: '安全指南', href: '#safety' },
  { name: '实用工具', href: '#tools' },
  { name: '预算', href: '#budget' },
]

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'"
  >
    <div class="container flex items-center justify-between">
      <a href="#" class="flex items-center">
        <span class="text-2xl font-display font-bold" :class="isScrolled ? 'text-primary-700' : 'text-white'">
          毕业旅行
        </span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="font-medium transition-colors duration-200"
          :class="isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-gray-200'"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6"
          :class="isScrolled ? 'text-gray-700' : 'text-white'"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div 
      id="mobile-menu" 
      class="md:hidden absolute w-full bg-white shadow-md"
      :class="isMenuOpen ? 'block' : 'hidden'"
    >
      <div class="container py-3 space-y-2">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="block py-2 font-medium text-gray-700 hover:text-primary-600"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </header>
</template>