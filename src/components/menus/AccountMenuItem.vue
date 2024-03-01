<template>
  <MenuItem v-slot="{ active }">
    <router-link
      :to="to"
      :class="[
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        'block px-4 py-2 text-sm',
      ]"
      >{{ $t(label) }}
    </router-link>
  </MenuItem>
</template>

<script>
import { MenuItem } from "@headlessui/vue";

export default {
  name: "AccountMenuItem",
  components: { MenuItem },
  props: {
    active: Object,
    label: String,
    to: String,
  },
};
</script>

<style scoped></style>
