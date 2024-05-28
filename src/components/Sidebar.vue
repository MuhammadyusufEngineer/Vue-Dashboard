<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarStore } from '@/stores/store'
import MenuBtn from '/src/components/MenuBtn.vue'
const store = useSidebarStore()
const isSidebarVisible = computed(() => store.isSidebarVisible)
const navIcons = <string[]>([
  'home',
  'dashboard',
  'chart',
  'db',
  'copy',
  'mail',
  'chat',
  'cart',
  'more',
  'circle',
  'calendar'
])
</script>
<template>
  <nav class="pt-[2vw] pb-[1.7vw] px-[1.7vw] flex flex-col gap-[3vw] duration-300 ease-out transform-gpu" :class="{
    'translate-x-0': isSidebarVisible, '-translate-x-full absolute': !isSidebarVisible
  }">
    <MenuBtn />
    <div class="flex flex-col items-center gap-[1vw]">
      <RouterLink :to="icon" v-for="(icon, index) in navIcons" :key="index"
        class="nav-item relative bg-none hover:bg-blue/10 px-[24px] py-[18px] rounded-2xl duration-200"
        :class="{ 'px-0': !isSidebarVisible }">
        <div class="indicator"></div>
        <img :src="`/${icon}.svg`" alt="icon" />
      </RouterLink>
    </div>
  </nav>
</template>