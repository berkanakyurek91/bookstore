<template>
  <div>
    <input
      type="search"
      class="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search Books by Title or Author"
      v-model="model"
      required
    />
  </div>
</template>

<script setup>
const model = defineModel();
</script>