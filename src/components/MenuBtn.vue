<template>
  <div @click="toggleSidebar" class="flex items-center justify-center p-[1vw] cursor-pointer">
    <img src="/menu.svg" alt="" />
  </div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '@/stores/store';
const toggleSidebar = () => {
  useSidebarStore().toggleSidebar()
}
</script>
