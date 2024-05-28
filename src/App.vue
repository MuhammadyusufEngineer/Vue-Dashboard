<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const loading = ref<boolean>(true)

onMounted(() => {
  loading.value = false
})
</script>

<template>
  <div>
    <div v-if="loading" class="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50">
      <p>Loading...</p>
    </div>
    <div v-else class="flex">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
