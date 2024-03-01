<template>
  <div v-if="user" class="pt-4 pb-3 border-t border-gray-200">
    <div class="flex items-center px-4 sm:px-6">
      <div class="flex-shrink-0">
        <img
          class="h-10 w-10 rounded-full"
          :src="user.picture"
          :alt="user.name"
        />
      </div>
      <div class="ml-3">
        <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
        <div
          v-if="user.name !== user.email"
          class="text-sm font-medium text-gray-500"
        >
          {{ user.email }}
        </div>
      </div>
      <NotificationsButton mobile />
    </div>
    <div class="mt-3 space-y-1">
      <MobileNavBarButton label="menu.profile" to="/app/profile" />
      <DisclosureButton
        as="a"
        href="#"
        class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
        @click="logout"
        >{{ $t("menu.logout") }}</DisclosureButton
      >
    </div>
  </div>
</template>

<script>
import { DisclosureButton } from "@headlessui/vue";
import MobileNavBarButton from "@/components/buttons/MobileNavBarButton";
import NotificationsButton from "@/components/buttons/NotificationsButton";
import { useAuth0 } from "@/auth";
import { computed } from "vue";

export default {
  name: "MobileAuthNavBar",
  components: {
    NotificationsButton,
    DisclosureButton,
    MobileNavBarButton,
  },
  setup() {
    const auth0 = useAuth0();

    const isAuthenticated = computed(() => {
      if (!auth0) {
        return null;
      }

      return auth0.isAuthenticated.value;
    });

    const isLoading = auth0 ? auth0.isLoading : null;

    const user = auth0 ? auth0.user : null;

    const logout = () => {
      if (!auth0) {
        return;
      }

      auth0.logout({
        returnTo: window.location.origin,
      });
    };

    return {
      isAuthenticated,
      isLoading,
      user,
      logout,
    };
  },
};
</script>

<style scoped></style>
