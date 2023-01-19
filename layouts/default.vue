<script setup lang="ts">
useHead({
   titleTemplate: (pageName) => (
      pageName
         ? `${pageName} | Слідопити України`
         : 'Слідопити України'
   ),
})
</script>

<template>
   <Html class="h-full">
      <Body class="h-full" />
   </Html>

   <div class="min-h-full bg-slate-50 dark:bg-stone-900 pt-16">
      <TheHeader />
      
      <main class="py-8 sm:px-6 lg:px-8">
         <slot />
      </main>
   </div>
</template>
