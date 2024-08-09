<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <div class="py-9">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>