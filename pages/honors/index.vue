<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const colors = getColors(true)

useHead({
  title: 'Спеціалізації',
})

const { data: categories } = await useAsyncData('all-categories', () => (
  queryContent().where({ _dir: 'honors' }).only(['_path', 'title', 'color']).find()
))
</script>

<template>
  <TheHeader />

  <main class="py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-prose">
      <div class="mt-8 overflow-hidden bg-white dark:bg-zinc-900 border-y sm:border border-stone-200 dark:border-zinc-700 shadow sm:rounded-2xl">
        <ul role="list" class="divide-y divide-stone-200 dark:divide-zinc-700">
          <li v-for="c in categories" :key="c.title">
            <NuxtLink :to="c._path" class="block" :class="colors[c.color]">
              <div class="flex items-center px-4 py-4">
                <div class="flex gap-2 sm:gap-4 flex-col sm:flex-row min-w-0 flex-1 items-start sm:items-center font-semibold">
                  <div class="pl-0.5 sm:pl-0 dark:text-zinc-50">{{ c.title }}</div>
                </div>
                <div>
                  <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
