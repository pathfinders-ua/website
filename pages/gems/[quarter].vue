<script setup lang="ts">
const { data } = await useAsyncData('gem', () => queryContent('/gems/q' + useRoute().params.quarter).findOne())
</script>

<template>
   <main class="py-8 px-6 lg:px-8">
      <div class="mx-auto max-w-prose">
         <pre>
            {{ data }}
         </pre>
      </div>
   </main>
</template>
