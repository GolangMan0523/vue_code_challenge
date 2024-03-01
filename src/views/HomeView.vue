<template>
  <div class="relative bg-white overflow-hidden">
    <ComingSoonHero />
  </div>
</template>

<script>
// @ is an alias to /src
import ComingSoonHero from "@/components/marketing/ComingSoonHero";

export default {
  name: "HomeView",
  components: {
    ComingSoonHero,
  },
};
</script>
