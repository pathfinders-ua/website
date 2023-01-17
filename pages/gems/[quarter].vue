<script setup lang="ts">
const { data: quarter } = await useAsyncData('gem', () => queryContent('/gems/q' + useRoute().params.quarter).findOne())

useHead({
   title: quarter.value?.title
})
</script>

<template>
   <div class="mx-auto max-w-prose">
      <pre>
         {{ quarter }}
      </pre>
   </div>
</template>
