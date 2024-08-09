<template>
  <div
    class="border rounded bg-gray-50 p-3 grid grid-cols-5 lg:grid-cols-6 gap-3 items-center"
  >
    <div class="lg:col-span-2">
      <div>{{ props.basketItem.title }}</div>
      <div class="text-xs text-slate-700">{{ props.basketItem.author }}</div>
    </div>
    <div class="text-center text-sm">
      <strong>Price</strong><br />{{
        parseFloat(props.basketItem.price).toFixed(2)
      }}
      TL
    </div>
    <div class="text-center text-sm">
      <strong>Quantity</strong><br />{{ props.basketItem.quantity }}
    </div>
    <div class="text-center text-sm">
      <strong>Total</strong><br />
      <span class="text-rose-800 font-bold">
        {{
          parseFloat(
            props.basketItem.quantity * props.basketItem.price
          ).toFixed(2)
        }}
        TL
      </span>
    </div>
    <div>
      <button
        @click="$emit('removeItem')"
        class="px-4 py-2 font-semibold text-sm bg-slate-950 hover:bg-slate-700 text-white rounded shadow-sm w-full"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
import AppCard from "@/components/general/AppCard";

const props = defineProps({
  basketItem: Object,
});
</script>