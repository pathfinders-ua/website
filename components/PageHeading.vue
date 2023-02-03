<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/20/solid'

defineProps<{
  title: string
  back?: string
}>()
</script>

<template>
  <div class="flex items-center justify-between px-4 sm:px-0">
    <NuxtLink v-if="back" :to="back" class="p-1.5 transition-colors rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 active:bg-slate-300 dark:active:bg-zinc-600">
      <ArrowLeftIcon class="h-5 w-5" />
    </NuxtLink>
    <h2 class="font-bold text-center text-lg font-display -mt-0.5 dark:text-zinc-100">
      {{ title }}
    </h2>
    <div v-if="back" class="h-8 w-8" />
  </div>
</template>
