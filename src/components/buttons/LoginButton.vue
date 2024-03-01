<template>
  <button
    v-if="!mobile"
    type="button"
    class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    @click="login"
  >
    <span>{{ $t("menu.login") }} </span>
  </button>
  <DisclosureButton
    v-if="mobile"
    as="a"
    href="#"
    class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
    @click="login"
    >{{ $t("menu.login") }}
  </DisclosureButton>
</template>

<script>
import { useAuth0 } from "@/auth";
import { DisclosureButton } from "@headlessui/vue";

export default {
  name: "LoginButton",
  components: { DisclosureButton },
  props: {
    mobile: { type: Boolean, default: false },
    locale: { type: String, default: "en" },
  },
  setup(props) {
    const auth0 = useAuth0();

    const login = () => {
      if (!auth0) {
        return;
      }
      var locale = props.locale;
      if (locale === "fr") {
        locale = "fr-CA";
      }
      auth0.login({ ui_locales: locale });
    };

    return {
      login,
    };
  },
};
</script>
