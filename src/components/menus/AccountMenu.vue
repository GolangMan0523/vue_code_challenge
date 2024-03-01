<template>
  <Menu
    as="div"
    :class="mobile ? 'ml-3 relative' : 'px-3 relative inline-block text-left'"
  >
    <div v-if="!mobile">
      <MenuButton
        class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        <span class="flex w-full justify-between items-center">
          <span class="flex min-w-0 items-center justify-between space-x-3">
            <img
              class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
              :src="user.picture"
              :alt="user.name"
            />
            <span class="flex-1 flex flex-col min-w-0">
              <span class="text-gray-900 text-sm font-medium truncate">{{
                user.name
              }}</span>
              <span class="text-gray-500 text-sm truncate">{{
                user.email === user.name ? "" : user.email
              }}</span>
            </span>
          </span>
          <SelectorIcon
            class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </span>
      </MenuButton>
    </div>
    <div v-else>
      <MenuButton
        class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        :class="
          !mobile
            ? 'z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
            : 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
        "
      >
        <div class="py-1">
          <AccountMenuItem
            :active="{ active }"
            to="/app/profile"
            label="menu.profile"
          />
          <AccountMenuItem
            :active="{ active }"
            to="/app/settings"
            label="menu.settings"
          />
          <AccountMenuItem
            :active="{ active }"
            to="/app/notifications"
            label="menu.notifications"
          />
        </div>
        <div class="py-1">
          <AccountMenuItem
            :active="{ active }"
            to="#"
            label="menu.logout"
            @click="logout"
          />
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { SelectorIcon } from "@heroicons/vue/solid";
import { useAuth0 } from "@/auth";
import { computed } from "vue";
import AccountMenuItem from "@/components/menus/AccountMenuItem";

export default {
  name: "AccountMenu",
  props: { mobile: { type: Boolean, default: false } },
  components: {
    AccountMenuItem,
    Menu,
    MenuButton,
    MenuItems,
    SelectorIcon,
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
