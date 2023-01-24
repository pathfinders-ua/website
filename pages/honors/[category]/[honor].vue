<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/20/solid/index'

const route = useRoute()
const switcherClass = useSwitcherClass()

const { data: honor } = await useAsyncData(`honor-${route.params.category}-${route.params.honor}`, () => (
  queryContent().where({ _path: route.path }).findOne()
))

switcherClass.value = honor.value?.switcher

useHead({
  title: honor.value?.title,
})

onUnmounted(() => {
  switcherClass.value = null
})
</script>

<template>
  <TheHeader :background="honor.background" />

  <div class="-mt-8 pt-16 pb-4 top-0 right-0 left-0 px-4 sm:px-0" :class="honor.background">
    <div class="mx-auto max-w-prose relative">
      <div class="flex items-start justify-center px-4 sm:px-0">
        <NuxtLink :to="`/honors/${route.params.category}`" class="p-1.5 transition-colors rounded-full absolute top-0 left-0" :class="honor.button">
          <ArrowLeftIcon class="h-5 w-5" />
        </NuxtLink>
        <div class="flex flex-col sm:flex-row items-center gap-6 sm:px-12">
          <img :src="`/images/honors/${route.params.category}/${honor.image}`" :alt="honor.title" class="h-28 w-auto">
          <div class="flex flex-col gap-4" :class="honor.color">
            <h2 class="font-bold text-3xl text-center sm:text-left font-display -mt-0.5">
              {{ honor.title }}
            </h2>
            <div class="font-medium">
              <div><span class="font-bold">Рівень:</span> {{ honor.level }}</div>
              <div><span class="font-bold">Рік заснування:</span> {{ honor.year }}</div>
              <div><span class="font-bold">Затверджено:</span> {{ honor.authority }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="flex-1 pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-stone-800">
    <div class="mx-auto max-w-prose">
      <!--suppress JSUnresolvedVariable -->
      <ContentRenderer :value="honor" class="prose prose-li:font-medium dark:prose-invert" :class="honor.prose ?? 'prose-slate'" />
    </div>
  </main>
</template>
