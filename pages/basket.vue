<template>
  <div class="container mx-auto">
    <!--#region: Basket No Items Card-->
    <AppBasketNoItemsCard v-if="basketCount === 0"></AppBasketNoItemsCard>
    <!--#endregion: Basket No Items Card-->

    <!--#region: Basket Items and Basket Order Summart-->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div class="col-span-2" :class="{ 'col-span-3': basketCount === 0 }">
        <AppCard>
          <h3 class="font-bold">Basket Items ({{ basketCount }})</h3>
          <hr class="my-3" />

          <div class="grid grid-cols-1 gap-3">
            <AppBasketItem
              v-for="(basketItem, index) in basketItems"
              :basket-item="basketItem"
              :key="index"
              @remove-item="basket.removeItem({ index })"
            ></AppBasketItem>
          </div>
        </AppCard>
      </div>
      <div>
        <AppBasketOrderSummary
          :basket-items="basketItems"
        ></AppBasketOrderSummary>
      </div>
    </div>
    <!--#endregion: Basket Items and Basket Order Summart-->
  </div>
</template>

<script setup>
import { basket } from "@/store/basket";

import AppCard from "@/components/general/AppCard";
import AppBasketNoItemsCard from "@/components/ui/AppBasket/AppBasketNoItemsCard";
import AppBasketItem from "@/components/ui/AppBasket/AppBasketItem";
import AppBasketOrderSummary from "@/components/ui/AppBasket/AppBasketOrderSummary";

const basketItems = computed(() => {
  return basket.items;
});
const basketCount = computed(() => {
  return basket.items.length;
});

useHead({
  title: "BookStore - Basket",
});
</script>