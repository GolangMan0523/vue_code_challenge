import { shallowMount } from "@vue/test-utils";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";

module.exports = {
  getRenderedComponent(Component, propsData) {
    return shallowMount(Component, {
      i18n,
      router,
      store,
      propsData,
    });
  },
};
