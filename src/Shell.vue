<template>
  <App />
</template>

<script>
import App from "./App.vue";
import { provideAuth0 } from "./auth";

export default {
  name: "AppShell",
  components: { App },
  setup() {
    provideAuth0();
  },
};
</script>
