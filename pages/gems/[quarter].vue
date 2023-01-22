<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'

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
</script>

<template>
  <TheHeader />

  <main class="py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-prose">
      <PageHeading :title="quarter.title" />
      <div class="mt-6 overflow-hidden bg-white dark:bg-zinc-900 border-y sm:border border-stone-200 dark:border-zinc-700 shadow sm:rounded-2xl">
        <ul role="list" class="divide-y divide-stone-200 dark:divide-zinc-700">
          <li v-for="(g, i) in quarter?.gems" :key="g.location">
            <div v-if="!g.text" class="flex justify-center px-4 py-4 font-medium">
              Немає перлини
            </div>
            <div v-else class="flex items-center px-4 py-4">
              <div class="min-w-0 flex-1 flex flex-col">
                <TheBadge size="lg" :color="Object.keys(getColors())[i]" class="self-center">Тиждень {{ i + 1 }}</TheBadge>
                <div class="mt-2 pl-0.5 sm:pl-0" v-html="g.text" />
                <TheBadge size="base" class="mt-2 self-end">{{ g.location }}</TheBadge>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
