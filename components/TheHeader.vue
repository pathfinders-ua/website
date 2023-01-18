<script setup lang="ts">
const el = ref<Document | null>(null)
const { y } = useScroll(el)

onMounted(() => {
  el.value = document
})
</script>

<template>
  <header class="bg-slate-800 text-slate-50 fixed top-0 left-0 right-0 duration-300 transition-spacing" :class="!y ? 'py-4' : 'py-2' ">
    <div class="px-6 lg:px-8 flex items-center gap-6">
      <NuxtLink to="/">
        <TheLogo class="w-auto transition-height duration-300" :class="!y ? 'h-8' : 'h-6'" />
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <NuxtLink to="/gems" class="whitespace-nowrap border-b pb-[1px]" active-class="font-semibold !border-b-2 !pb-0">Пам'ятні перлини</NuxtLink>
      </nav>
    </div>
  </header>
</template>
