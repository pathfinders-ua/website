<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid/index'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const route = useRoute()

interface Category extends ParsedContent {
  title: string
  color: string
}

const { data: category } = await useAsyncData(`category-${route.params.category}`, () => (
  queryContent<Category>().where({ _path: route.path }).only(['title']).findOne()
))

const { data: honors } = await useAsyncData(`honors-${route.params.category}`, () => (
  queryContent().where({ _dir: route.params.category }).only(['_path', 'title', 'image', 'level']).sort({ level: 1 }).find()
))

useHead({
  title: category.value?.title,
})
</script>

<template>
  <TheHeader />

  <main class="py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-prose">
      <PageHeading :title="category.title" back="/honors" />
      <div class="mt-8 overflow-hidden bg-white dark:bg-zinc-900 border-y sm:border border-stone-200 dark:border-zinc-700 shadow sm:rounded-2xl">
        <ul role="list" class="divide-y divide-stone-200 dark:divide-zinc-700">
          <li v-for="h in honors" :key="h.title">
            <NuxtLink :to="h._path" class="block hover:bg-slate-50 dark:hover:bg-zinc-800">
              <div class="flex items-center px-4 py-4">
                <div class="flex gap-3 sm:gap-4 min-w-0 flex-1 items-center font-semibold">
                  <img :src="`/images/honors/${route.params.category}/${h.image}`" :alt="h.title" class="w-14 h-auto" />
                  <div class="flex flex-col gap-2">
                    <div class="pl-0.5 sm:pl-0 dark:text-zinc-50">{{ h.title }}</div>
                    <TheBadge class="w-max">Рівень тяжкості: {{ h.level}}</TheBadge>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon class="h-5 w-5 text-slate-400 dark:text-zinc-300" aria-hidden="true" />
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
