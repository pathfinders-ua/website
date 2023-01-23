<script setup lang="ts">
useHead({
  titleTemplate: (pageName) => pageName ? `${pageName} | Слідопити України` : 'Слідопити України',
})
</script>

<template>
  <Html class="h-full">
    <Body class="h-full" />
  </Html>

  <div class="min-h-full flex flex-col bg-slate-50 dark:bg-stone-900 pt-16">
    <slot />
  </div>
</template>
