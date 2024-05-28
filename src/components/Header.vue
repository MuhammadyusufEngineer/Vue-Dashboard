<script setup lang="ts">
import { computed } from 'vue'
import MenuBtn from '/src/components/MenuBtn.vue'
import { useSidebarStore } from '@/stores/store'
const store = useSidebarStore()
const isSidebarVisible = computed(() => store.isSidebarVisible)

</script>
<template>
  <header class="flex items-center gap-[2vw]">
    <MenuBtn :class="{ 'block': !isSidebarVisible, 'hidden': isSidebarVisible }" />
    <div class="flex-1 flex items-center justify-between">
      <div class="bg-white flex items-center gap-[0.5vw] p-[1vw] rounded-lg w-1/2 md:w-auto">
        <img src="/search.svg" alt="search icon" />
        <input type="text" placeholder="Search anything" class="outline-none w-full" />
      </div>
      <div class="flex items-center gap-[4vw] md:gap-[2vw]">
        <div>
          <img src="/mail-up.svg" alt="mail icon" />
        </div>
        <div>
          <img src="/notification.svg" alt="notification bell icon" />
        </div>
        <div>
          <img src="/avatar.png" alt="user avatar" />
        </div>
      </div>
    </div>
  </header>
</template>
