<template>
  <button type="button" :class="cssClass">
    <span class="sr-only">{{ $t("menu.notifications") }}</span>
    <BellIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>
import { BellIcon } from "@heroicons/vue/outline";

export default {
  name: "NotificationsButton",
  components: { BellIcon },
  props: { mobile: { type: Boolean, default: false } },
  computed: {
    cssClass() {
      if (this.mobile) {
        return "ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      }
      return "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    },
  },
};
</script>

<style scoped></style>
