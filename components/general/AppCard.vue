<template>
  <div
    class="rounded-lg p-3 shadow bordered bg-white"
    :class="{ 'hover:shadow-xl transition-shadow': props.hover }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  hover: {
    type: Boolean,
    default: false,
  },
});
</script>