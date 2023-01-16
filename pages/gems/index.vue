<script setup lang="ts">
const now = useNow()

interface Gem {
   text: string
   location: string
}

const quarter = computed(() => Math.floor((now.value.getMonth() + 3) / 3))
const week = getWeekNumber(new Date(), quarter.value)

const { data } = await useAsyncData('current-gem', () => queryContent('/gems/q' + quarter.value).findOne())

const gem: Gem = {
   text: data.value?.gems?.[week - 1]?.text,
   location: data.value?.gems?.[week - 1]?.location,
}
</script>

<template>
   <Head>
      <Title>Пам'ятні перлини - Слідопити України</Title>
   </Head>

   <main class="py-8 px-6 lg:px-8">
      <div class="mx-auto max-w-prose">
         <div class="border border-slate-300 shadow-md rounded-2xl py-3 px-4 bg-yellow-50">
            <div v-html="gem.text"></div>
            <hr class="my-2 border-stone-200" />
            <div class="flex items-center justify-between font-display">
               <div>Квартал {{ quarter }}</div>
               <div>{{ gem.location }}</div>
            </div>
         </div>
      </div>
   </main>
</template>
