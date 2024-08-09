<template>
  <AppCard hover>
    <NuxtImg
      :src="props.book.coverImageUrl"
      :alt="props.book.title"
      class="object-cover object-center h-52 w-full rounded mb-3"
      :placeholder="[50, 25, 75, 5]"
      onerror="this.onerror=null;this.src='https://dummyimage.com/600x400/363636/fff.png&text=No+Image'"
    />
    <h3 class="font-bold">{{ props.book.title }}</h3>
    <div class="text-sm text-slate-700 mb-3">{{ props.book.author }}</div>
    <div class="text-rose-800 font-bold mb-3">
      {{ parseFloat(props.book.price).toFixed(2) }} TL
    </div>

    <button
      @click="$emit('addBasket')"
      class="px-4 py-2 font-semibold text-sm bg-slate-950 hover:bg-slate-700 text-white rounded shadow-sm w-full"
    >
      Add Basket
    </button>
  </AppCard>
</template>

<script setup>
import AppCard from "@/components/general/AppCard";

const props = defineProps({ book: Object });
</script>