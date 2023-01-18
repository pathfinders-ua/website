<template>
  <header class="bg-slate-800 text-slate-50 py-4">
    <div class="px-6 lg:px-8 flex items-center gap-6">
      <NuxtLink to="/">
        <TheLogo class="h-8 w-auto" />
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <NuxtLink to="/gems" class="whitespace-nowrap border-b pb-[1px]" active-class="font-semibold !border-b-2 !pb-0">Пам'ятні перлини</NuxtLink>
      </nav>
    </div>
  </header>
</template>
