<template>
  <div>
    <p class="headline">{{ user }}</p>
  </div>
</template>

<script>
import { useAuth0 } from "@/auth";

export default {
  name: "ProfileView",
  head() {
    return {
      title: "this.$t('ProfileView.meta.title')",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this.$t('ProfileView.meta.description')",
        },
      ],
    };
  },
  setup() {
    const auth0 = useAuth0();

    const user = auth0 ? auth0.user : null;

    return {
      user,
    };
  },
};
</script>

<style scoped></style>
