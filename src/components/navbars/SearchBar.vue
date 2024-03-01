<template>
  <!-- Desktop version -->
  <div class="px-3 mt-5" v-if="!mobile">
    <label for="search" class="sr-only">Search</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        aria-hidden="true"
      >
        <SearchIcon class="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
        placeholder="Search"
      />
    </div>
  </div>
  <!-- Mobile version -->
  <div class="flex-1 flex" v-else>
    <form class="w-full flex md:ml-0" action="#" method="GET">
      <label for="search-field" class="sr-only">Search</label>
      <div class="relative w-full text-gray-400 focus-within:text-gray-600">
        <div
          class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
        >
          <SearchIcon class="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id="search-field"
          name="search-field"
          class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/solid";

export default {
  name: "SearchBar",
  props: { mobile: { type: Boolean, default: false } },
  components: { SearchIcon },
};
</script>

<style scoped></style>
