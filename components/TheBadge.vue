<script setup lang="ts">
import {sizes} from '~/utils/getBadgeProperties'

const colors = getColors()

withDefaults(defineProps<{
  size?: Size
  color?: Color | string
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
