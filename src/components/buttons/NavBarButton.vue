<template>
  <router-link :to="to" :class="cssClass">{{ $t(label) }} </router-link>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "NavBarButton",
  props: {
    label: String,
    to: String,
  },
  computed: {
    cssClass() {
      if (useRoute().path === this.to) {
        return "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
      }
      return "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
    },
  },
};
</script>

<style scoped></style>
