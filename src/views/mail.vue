<script setup lang="ts">
import Header from '../components/Header.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPage = computed(() => {
  return route.name ? route.name.toString() : 'Unknown'
})
</script>
<template>
  <div class="bg-body flex-1 min-h-screen p-[2vw]">
    <Header />
    <div class="flex items-center justify-center">
      <p class="text-7xl text-blue">{{ currentPage }} page</p>
    </div>
  </div>
</template>
