<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid/index'

useHead({
   title: "Пам'ятні перлини",
})

const { data: quarters } = await useAsyncData('all-gems', () => queryContent('/gems').find())

const gem = await getCurrentGem()
</script>

<template>
   <div class="mx-auto max-w-prose">
      <div class="border-y sm:border border-slate-300 shadow sm:rounded-2xl py-3 px-4 bg-yellow-50">
         <div v-html="gem.text"></div>
         <hr class="my-2 border-stone-200" />
         <div class="flex items-center justify-between font-display">
            <div>Тиждень {{ gem.week }}</div>
            <div>{{ gem.location }}</div>
         </div>
      </div>
      <div class="mt-8 overflow-hidden bg-white border-y sm:border border-stone-200 shadow sm:rounded-2xl">
         <ul role="list" class="divide-y divide-stone-200">
            <li v-for="(q, i) in quarters" :key="q.title">
               <NuxtLink :to="'/gems/' + (i + 1)" class="block hover:bg-slate-50">
                  <div class="flex items-center px-4 py-4">
                     <div class="flex gap-2 sm:gap-4 flex-col sm:flex-row min-w-0 flex-1 items-start sm:items-center font-semibold">
                        <TheBadge size="lg" :color="q.color">Квартал {{ i + 1 }}</TheBadge>
                        <div class="pl-0.5 sm:pl-0">{{ q.title }}</div>
                     </div>
                     <div>
                        <ChevronRightIcon class="h-5 w-5 text-slate-400" aria-hidden="true" />
                     </div>
                  </div>
               </NuxtLink>
            </li>
         </ul>
      </div>
   </div>
</template>
