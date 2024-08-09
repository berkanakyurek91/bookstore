<template>
  <header class="bg-slate-950 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl">
        <NuxtLink
          to="/"
          class="flex items-center hover:opacity-75 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            class="w-7 mr-2"
          >
            <title>bookshelf</title>
            <path
              d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"
            />
          </svg>
          Book<strong>Store</strong>
        </NuxtLink>
      </h1>
      <NuxtLink
        to="/basket"
        class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
      >
        Basket ({{ basketCount }})
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { basket } from "@/store/basket";

const basketCount = computed(() => {
  return basket.items.length;
});
</script>

