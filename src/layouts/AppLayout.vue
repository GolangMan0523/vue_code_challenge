<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from "./AppLayoutDefault";
import EmptyLayout from "./EmptyLayout";
import { shallowRef, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "AppLayout",
  setup() {
    const layout = shallowRef(AppLayoutDefault);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        if (route.meta.layout !== "none") {
          try {
            const component = await require(`@/layouts/${meta.layout}.vue`);
            layout.value = component?.default || AppLayoutDefault;
          } catch (e) {
            layout.value = AppLayoutDefault;
          }
        } else {
          layout.value = EmptyLayout;
        }
      }
    );
    return { layout };
  },
};
</script>
