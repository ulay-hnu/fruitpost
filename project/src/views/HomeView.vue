<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue'
import ItinerarySection from '../components/sections/ItinerarySection.vue'
import SafetySection from '../components/sections/SafetySection.vue'
import ToolsSection from '../components/sections/ToolsSection.vue'
import BudgetSection from '../components/sections/BudgetSection.vue'
import ChecklistSection from '../components/sections/ChecklistSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <ItinerarySection id="itinerary" />
    <SafetySection id="safety" />
    <ToolsSection id="tools" />
    <BudgetSection id="budget" />
    <ChecklistSection id="checklist" />
  </div>
</template>