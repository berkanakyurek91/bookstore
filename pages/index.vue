<template>
  <div class="container mx-auto">
    <AppLoader
      v-if="booksLoaders"
      class="bg-white rounded text-center py-10"
    ></AppLoader>

    <AppHomeSearchBar
      v-if="booksIsShown"
      v-model="searchText"
      class="mb-6"
    ></AppHomeSearchBar>

    <div
      v-if="booksIsShown"
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
    >
      <AppHomeProductCard
        v-for="book in booksAsFiltered"
        :key="book.id"
        :book="book"
        @add-basket="addBasket({ book })"
      ></AppHomeProductCard>
    </div>
  </div>
</template>

<script setup>
import { basket } from "@/store/basket";

import AppLoader from "@/components/general/AppLoader";
import AppHomeSearchBar from "@/components/ui/AppHome/AppHomeSearchBar";
import AppHomeProductCard from "@/components/ui/AppHome/AppHomeProductCard";

const getBooks = async () => {
  booksLoaders.value = true;

  await fetch("https://dev-test.360y.co/books")
    .then((response) => response.json())
    .then((response) => {
      setTimeout(() => {
        books.value = response;
        booksLoaders.value = false;
      }, 1000);
    })
    .catch(() => {
      booksLoaders.value = false;
    });
};

const searchText = ref("");

const booksLoaders = ref(false);
const books = ref([]);

const booksIsShown = computed(() => {
  return books.value.length > 0 && !booksLoaders.value;
});
const booksAsFiltered = computed(() => {
  if (searchText.value === null || searchText.value === "") return books.value;

  return books.value.filter((book) => {
    const { title, author } = book;
    const searchableText = [title, author].join(" ");

    return (
      searchableText
        .toLocaleLowerCase()
        .indexOf(searchText.value.toLocaleLowerCase()) > -1
    );
  });
});

const addBasket = ({ book }) => {
  basket.addItem({ item: book });

  alert("Book added to basket successfully!");
};

getBooks();

useHead({
  title: "BookStore - Books",
});
</script>