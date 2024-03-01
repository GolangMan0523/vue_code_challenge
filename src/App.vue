<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useAuth0 } from "./auth";
import { onMounted } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const { t } = useI18n({ useScope: "global" }); // call `useI18n`, and spread `t` from  `useI18n` returning
    const auth0 = useAuth0();

    onMounted(async () => {
      if (!auth0) {
        return;
      }

      await auth0.createClient();
      await auth0.handleCallback();
    });

    return { t, auth0 }; // return render context that included `t`
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(79 70 229);
}
</style>
