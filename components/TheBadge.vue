<script setup lang="ts">
import {sizes, colors} from '~/utils/getBadgeProperties'

withDefaults(defineProps<{
  size: Size
  color: Color | string
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
