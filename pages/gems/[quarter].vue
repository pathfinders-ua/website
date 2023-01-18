<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'
import { colors } from '~/utils/getBadgeProperties'
import { ArrowLeftIcon } from '@heroicons/vue/20/solid/index'

const router = useRouter()

interface Quarter extends ParsedContent {
  title: string
  color: Color
  gems: Gem[]
}

const { data: quarter }: {
  data: Ref<Pick<Quarter, string> | null>
} = await useAsyncData('gem', () => queryContent('/gems/q' + useRoute().params.quarter).findOne())

useHead({
  title: quarter.value?.title,
})

const goBack = () => {
  if (window?.history?.length > 2) {
    router.back()
  } else {
    return navigateTo('/gems')
  }
}
</script>

<template>
  <div class="mx-auto max-w-prose">
    <div class="flex items-center justify-between px-4 sm:px-0">
      <button @click="goBack" class="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300">
        <ArrowLeftIcon class="h-5 w-5" />
      </button>
      <h2 class="font-bold text-center text-lg font-display -mt-0.5">{{ quarter.title }}</h2>
      <div class="h-8 w-8" />
    </div>
    <div class="mt-6 overflow-hidden bg-white border-y sm:border border-stone-200 shadow sm:rounded-2xl">
      <ul role="list" class="divide-y divide-stone-200">
        <li v-for="(g, i) in quarter?.gems" :key="g.location">
          <div v-if="!g.text" class="flex justify-center px-4 py-4 font-medium">
            Немає перлини
          </div>
          <div v-else class="flex items-center px-4 py-4">
            <div class="min-w-0 flex-1 flex flex-col">
              <TheBadge size="lg" :color="Object.keys(colors)[i]" class="self-center">Тиждень {{ i + 1 }}</TheBadge>
              <div class="mt-2 pl-0.5 sm:pl-0" v-html="g.text" />
              <TheBadge size="base" class="mt-2 self-end">{{ g.location }}</TheBadge>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
