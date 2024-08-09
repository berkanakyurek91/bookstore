<template>
  <AppCard>
    <h3 class="font-bold">Order Summary</h3>
    <hr class="my-3" />
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="font-bold">Subtotal</div>
      <div class="text-right">{{ totalPrice }} TL</div>
      <div class="font-bold">Delivery Fee</div>
      <div class="text-right">Free</div>
      <div class="font-bold text-base">Total</div>
      <div class="text-right text-base text-rose-800 font-bold">{{ totalPrice }} TL</div>
    </div>
  </AppCard>
</template>

<script setup>
import AppCard from "@/components/general/AppCard";

const props = defineProps({
  basketItems: Array,
});

const totalPrice = computed(() => {
  let total = 0;

  for (const { price, quantity } of props.basketItems) {
    total += price * quantity;
  }

  return parseFloat(total).toFixed(2);
});
</script>