<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <NavLogo mode="application" mobile />
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <AppMenu :navigation="navigation" :teams="teams" mobile />
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>
    <div
      class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden"
    >
      <button
        type="button"
        class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
        <SearchBar mobile />
        <div class="flex items-center">
          <!-- Profile dropdown -->
          <AccountMenu mobile />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { XIcon, MenuAlt1Icon } from "@heroicons/vue/solid";
import { ref } from "vue";
import AccountMenu from "@/components/menus/AccountMenu";
import SearchBar from "@/components/navbars/SearchBar";
import AppMenu from "@/components/menus/AppMenu";
import NavLogo from "@/components/navbars/NavLogo";

export default {
  name: "MobileAppNavBar",
  props: {
    navigation: { type: Array },
    teams: { type: Array },
  },
  components: {
    NavLogo,
    SearchBar,
    AccountMenu,
    Dialog,
    DialogOverlay,
    AppMenu,
    TransitionRoot,
    TransitionChild,
    XIcon,
    MenuAlt1Icon,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
    };
  },
};
</script>

<style scoped></style>
