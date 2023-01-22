<script setup lang="ts">
const el = useDocumentElement()
const { y } = useScroll(el)

defineProps<{
  background?: string
}>()

onMounted(() => {
  el.value = document
})
</script>

<template>
  <header id="header" class="text-slate-50 fixed top-0 left-0 right-0 z-20" :class="background ?? 'bg-slate-800 dark:bg-zinc-800 border-b border-slate-800 dark:border-zinc-700'">
    <div class="overflow-x-auto flex items-center gap-6 transition-spacing duration-500 px-6 lg:px-8" :class="!y ? 'py-4' : 'py-2' ">
      <NuxtLink to="/">
        <TheLogo class="w-auto transition-height duration-500" :class="!y ? 'h-8' : 'h-6'" />
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <NuxtLink to="/gems" class="whitespace-nowrap border-b pb-[1px]" active-class="font-semibold !border-b-2 !pb-0">Памʼятні перлини</NuxtLink>
        <NuxtLink to="/honors" class="whitespace-nowrap border-b pb-[1px]" active-class="font-semibold !border-b-2 !pb-0">Спеціалізації</NuxtLink>
      </nav>
      <ColorModeSwither class="ml-auto" :y="y" />
    </div>
  </header>
</template>
