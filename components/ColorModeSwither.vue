<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline/index'

withDefaults(defineProps<{
  y: number
}>(), {
  y: 0,
})

const colorMode = useColorMode()

const temporallyDisableTransitions = () => {
  document.documentElement.classList.add('[&_*]:!transition-none')
  setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
}

const switchColorMode = () => {
  temporallyDisableTransitions()

  if (colorMode.preference === 'system') {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  } else {
    colorMode.preference = 'system'
  }
}
</script>

<template>
  <div class="flex items-center">
    <button @click="switchColorMode" class="p-1.5 rounded-full transition-colors hover:bg-slate-700 dark:hover:bg-zinc-700">
      <SunIcon class="hidden transition-sizes duration-500 dark:block" :class="!y ? 'h-6 w-6' : 'h-5 w-5'" height="24" width="24" />
      <MoonIcon class="block transition-sizes duration-500 dark:hidden" :class="!y ? 'h-6 w-6' : 'h-5 w-5'" height="24" width="24" />
    </button>
  </div>
</template>
