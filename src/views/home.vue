<script setup lang="ts">
import Header from '../components/Header.vue'
import Title from '../components/Title.vue'

interface stringType {
  [key: string]: string
}
const months = <string[]>([
  'Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'Jul', 'Aug', 'Sep', 'oct', 'nov', 'dec'
])
const info: stringType[] = [
  { icon: 'users', color: 'bg-blue/10', title: 'Users', info: '72.6K', summary: '+25%' },
  { icon: 'sessions', color: 'bg-orange/10', title: 'Sessions', info: '87.2K', summary: '+47%' },
  { icon: 'rate', color: 'bg-blue/10', title: 'Bounce rate', info: '26.3%', summary: '-28%' },
  {
    icon: 'duration',
    color: 'bg-green/10',
    title: 'Session Duration',
    info: '2m 18s',
    summary: '+13%'
  }
]
const sessions: stringType[] = [
  { class: 'bg-blue w-[70%]', percentage: '70' },
  { class: 'bg-orange w-[80%]', percentage: '80' },
  { class: 'bg-green w-[50%]', percentage: '50' }
]

const overview: stringType[] = [
  { date: 'Today', today: '5,461', expectation: 'Expected', expected: '8,085' },
  { date: 'Today', today: '140', expectation: 'Expected', expected: '120' }
]

const sessionDevice: stringType[] = [
  { title: 'Desktop', count: '8,085', percent: '13%' },
  { title: 'Mobile', count: '8,085', percent: '30%' },
  { title: 'Tablet', count: '8,085', percent: '25%' }
]
</script>
<template>
  <div class="bg-body flex-1 min-h-screen p-[1.7vw] duration-300 ease-out">
    <Header text="Performance" />
    <main class="block md:grid grid-cols-7  gap-[5vw] md:gap-[2vw] mt-[5vw] md:mt-[2vw] self-stretch">
      <div class="col-span-4 row-span-3">
        <div class="flex items-center justify-between mb-[5vw] md:mb-0">
          <Title>Performance</Title>
          <p class="text-[4vw] md:text-[1vw] text-primary text-end font-rbold leading-none">Year</p>
        </div>
        <div class="p-[3vw] md:p-[2vw] rounded-2xl bg-white flex-grow">
          <span
            class="period relative float-right text-[4vw] md:text-[1vw] text-primary text-end font-rbold leading-none z-10">
            Current Period
          </span>
          <div class="mt-[2vw]">
            <img class="w-full" src="/chart-dash.svg" alt="" />
          </div>
          <div class="flex flex-wrap md:justify-between gap-[2vw] mt-[1.5vw]">
            <p v-for="(item, index) in months" :key="index"
              class="text-[4vw] md:text-[1vw] text-secondary font-rmedium capitalize">
              {{ item }}</p>
          </div>
        </div>
      </div>
      <div class="col-span-3 row-span-3">
        <div class="flex items-center justify-between">
          <Title>Sessions by device</Title>
          <p class="text-[4vw] md:text-[1vw] text-primary text-end font-rbold leading-none">Year</p>
        </div>
        <div class="p-[5vw] md:p-[3vw] rounded-2xl bg-white flex items-center gap-[6vw]">
          <div class="flex-1">
            <img src="/circle-graph.svg" class="w-full" alt="" />
          </div>
          <div class="flex-1">
            <div v-for="(item, index) in sessionDevice" :key="index">
              <p class="text-[4vw] md:text-[1vw] text-secondary">{{ item.title }}</p>
              <span class="text-[4.5vw] md:text-[1.2vw] text-primary mr-[0.5vw]">{{ item.count }}</span>
              <span class="text-[3.7vw] md:text-[0.7vw] text-secondary">{{ item.percent }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-4 row-span-2 grid md:flex md:items-stretch grid-cols-2 gap-[5vw] md:gap-[2vw] my-[5vw] md:my-0">
        <div v-for="(item, index) in info" :key="index"
          class="col-span-1 bg-white md:flex-1 rounded-xl p-[5vw] md:p-[1.5vw]">
          <div class="size-[15vw] md:size-[3.3vw] p-[5vw] md:p-[1.2vw] rounded-xl" :class="item.color">
            <img :src="`/${item.icon}.svg`" :alt="`${item.icon} icon`" />
          </div>
          <p class="text-[4.2vw] md:text-[1.2vw] text-secondary font-rbold leading-none mt-[2vw]">
            {{ item.title }}
          </p>
          <p class="text-[4.7vw] md:text-[1.7vw] text-primary font-rbold my-[1vw] leading-none">{{ item.info }}</p>
          <p class="text-[4.2vw] md:text-[1.2vw] text-secondary font-rmedium leading-none">{{ item.summary }}</p>
        </div>
      </div>
      <div class="col-span-3 row-span-3 rounded-xl bg-white p-[5vw] md:p-[2vw]">
        <Title>Sessions by device</Title>
        <div class="flex gap-[5vw] md:gap-[2vw] mt-[5vw] md:mt-0">
          <p class="flex-basis text-[4vw] md:text-[1vw] text-primary font-rbold">Channel</p>
          <p class="flex-1 text-[4vw] md:text-[1vw] text-primary font-rbold">Traffic (%)</p>
          <p class="flex-basis text-[4vw] md:text-[1vw] text-primary font-rbold">Value</p>
        </div>
        <div class="flex flex-col gap-[5vw] md:gap-[2vw] mt-[2.5vw]">
          <div class="flex items-center gap-[2vw]" v-for="(item, index) in sessions" :key="index">
            <p class="flex-basis text-[4vw] md:text-[0.9vw] text-secondary">Direct</p>
            <div class="bg-body h-[2vw] md:h-[0.5vw] rounded-xl flex-1 relative overflow-hidden">
              <div class="absolute h-full rounded-xl" :class="item.class"></div>
            </div>
            <p class="flex-basis text-[4vw] md:text-[0.9vw] text-secondary">{{ item.percentage }}%</p>
          </div>
        </div>
      </div>
      <div class="col-span-4 row-span-3 mt-[5vw] md:mt-0">
        <div class="flex items-center justify-between mb-[5vw] md:mb-[1vw]">
          <Title>Sessions by device</Title>
          <button
            class="bg-white/80 text-primary text-[4vw] md:text-[1vw] font-rmedium px-[5vw] py-[3vw] md:px-[3vw] md:py-[1vw] rounded-xl cursor-pointer">
            Export
          </button>
        </div>
        <div class="flex flex-col md:flex-row items-stretch justify-between gap-[5vw] md:gap-[2vw]">
          <div v-for="(item, index) in overview" :key="index"
            class="w-full h-full flex items-center justify-center bg-white gap-[5vw] md:gap-[3vw] py-[5vw] md:py-[2.5vw] px-[1.5vw] rounded-xl">
            <div class="flex-basis">
              <p class="text-[4.7vw] md:text-[1.7vw] text-primary font-rbold mb-[0.8vw] leading-none">
                {{ item.today }}
              </p>
              <p class="text-[4vw] md:text-[1vw] text-secondary font-rbold leading-none">{{ item.date }}</p>
            </div>
            <div class="flex-1 max-w-[25%]">
              <img class="w-full" :src="`/users-overview-${index + 1}.svg`" alt="rounded percentage graph icon" />
            </div>
            <div class="flex-basis">
              <p class="text-[4.7vw] md:text-[1.7vw] text-primary font-rbold mb-[0.8vw] leading-none">
                {{ item.expected }}
              </p>
              <p class="text-[4vw] md:text-[1vw] text-secondary font-rbold leading-none">
                {{ item.expectation }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-3 row-span-2 flex items-center justify-between bg-white rounded-xl py-[5vw] md:py-[3vw] px-[2vw] my-[5vw] md:my-0">
        <div>
          <Title>Sessions by device</Title>
          <p class="flex-basis text-[4vw] md:text-[0.9vw] text-secondary leading-none">Top Region & session</p>
        </div>
        <button
          class="bg-blue text-white text-[4vw] md:text-[1vw] font-rmedium px-[5vw] py-[3vw] md:px-[3vw] md:py-[1vw] rounded-xl cursor-pointer">
          View
        </button>
      </div>
    </main>
  </div>
</template>
<style scoped></style>