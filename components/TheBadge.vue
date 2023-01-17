<script setup lang="ts">
import { PickFrom } from 'nuxt/dist/app/composables/asyncData';

type Size = 'base' | 'lg'
type Color = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

const sizes: Record<Size, string> = {
   base: 'px-2.5 text-xs',
   lg: 'px-3 text-sm',
}

const colors: Record<Color, string> = {
   gray: 'bg-gray-100 text-gray-800',
   red: 'bg-red-100 text-red-800',
   yellow: 'bg-yellow-100 text-yellow-800',
   green: 'bg-green-100 text-green-800',
   blue: 'bg-blue-100 text-blue-800',
   indigo: 'bg-indigo-100 text-indigo-800',
   purple: 'bg-purple-100 text-purple-800',
   pink: 'bg-pink-100 text-pink-800',
}

withDefaults(defineProps<{
   size: Size
   color: Color
}>(), {
   size: 'base',
   color: 'gray',
})
</script>

<template>
   <span class="inline-flex items-center rounded-full py-0.5 font-medium" :class="[sizes[size], colors[color]]">
      <slot />
   </span>
</template>
