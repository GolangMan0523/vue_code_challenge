<template>
  <DisclosureButton as="a" :href="to" :class="cssClass"
    >{{ $t(label) }}
  </DisclosureButton>
</template>

<script>
import { useRoute } from "vue-router";
import { DisclosureButton } from "@headlessui/vue";

export default {
  name: "MobileNavBarButton",
  components: { DisclosureButton },
  props: {
    label: String,
    to: String,
  },
  computed: {
    cssClass() {
      if (useRoute().path === this.to) {
        return "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6";
      }
      return "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6";
    },
  },
};
</script>

<style scoped></style>
