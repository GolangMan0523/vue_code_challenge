<template>
  <button
    type="button"
    class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center mx-2 px-1 pt-1 border-b-2 text-sm font-medium"
    @click="signup"
  >
    <span>{{ $t("menu.signup") }} </span>
  </button>
</template>

<script>
import { useAuth0 } from "@/auth";

export default {
  name: "SignupButton",
  props: {
    mobile: { type: Boolean, default: false },
    locale: { type: String, default: "en" },
  },

  setup(props) {
    const auth0 = useAuth0();

    const signup = () => {
      if (!auth0) {
        return;
      }

      var locale = props.locale;
      if (locale === "fr") {
        locale = "fr-CA";
      }

      auth0.login({ screen_hint: "signup", ui_locales: locale });
    };

    return {
      signup,
    };
  },
};
</script>
