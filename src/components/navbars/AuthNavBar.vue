<template>
  <div class="flex items-center">
    <div v-if="!isAuthenticated && !isLoading" class="flex-shrink-0">
      <LoginButton :locale="this.$i18n.locale" />
      <SignupButton :locale="this.$i18n.locale" />
    </div>
    <LocaleButton />
    <div
      v-if="user"
      class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"
    >
      <NotificationsButton />
      <!-- Profile dropdown -->
      <Menu as="div" class="ml-3 relative z-50">
        <div>
          <MenuButton
            class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">{{ $t("menu.user") }}</span>
            <img
              class="h-8 w-8 rounded-full"
              :src="user.picture"
              :alt="user.name"
            />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem>
              <span
                class="block px-4 py-3 text-base font-medium text-gray-800 shadow"
                >{{ user.name }}</span
              >
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <router-link
                to="/app/profile"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >{{ $t("menu.profile") }}
              </router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                @click="logout"
                >{{ $t("menu.logout") }}</a
              >
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script>
import LoginButton from "@/components/buttons/LoginButton";
import { useAuth0 } from "@/auth";
import { computed } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import NotificationsButton from "@/components/buttons/NotificationsButton";
import SignupButton from "@/components/buttons/SignUpButton";
import LocaleButton from "@/components/buttons/LocaleButton";

export default {
  name: "AuthNavBar",
  components: {
    LocaleButton,
    SignupButton,
    NotificationsButton,
    LoginButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
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
