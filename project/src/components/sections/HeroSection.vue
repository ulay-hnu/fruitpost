<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.hero-button', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.out'
  }, '-=0.3')
})
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://images.pexels.com/photos/1486631/pexels-photo-1486631.jpeg?auto=compress&cs=tinysrgb&w=1600'); filter: brightness(0.7);"
    ></div>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
    
    <!-- Content -->
    <div class="container relative z-10 text-center text-white px-4 sm:px-6">
      <h1 class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">青岛-威海6天自驾毕业旅行</h1>
      <p class="hero-subtitle text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
        完整行程 · 安全指南 · 实用工具 · 应急措施
      </p>
      <a href="#itinerary" class="hero-button btn btn-primary text-lg px-8 py-4">
        探索行程
      </a>
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>