<template>
  <div
    class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100"
  >
    <NavLogo mode="application" />
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
      <!-- User account dropdown -->
      <AccountMenu />
      <!-- Sidebar Search -->
      <SearchBar />
      <!-- Navigation -->
      <AppMenu :navigation="navigation" :teams="teams" />
    </div>
  </div>
</template>

<script>
import AccountMenu from "@/components/menus/AccountMenu";
import SearchBar from "@/components/navbars/SearchBar";
import AppMenu from "@/components/menus/AppMenu";
import NavLogo from "@/components/navbars/NavLogo";

export default {
  name: "DesktopAppNavBar",
  props: {
    navigation: { type: Array },
    teams: { type: Array },
  },
  components: {
    NavLogo,
    AppMenu,
    SearchBar,
    AccountMenu,
  },
};
</script>

<style scoped></style>
