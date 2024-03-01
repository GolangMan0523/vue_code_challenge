import { createApp } from "vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./index.css";
import AppLayout from "@/layouts/AppLayout";
import Shell from "./Shell.vue";

const app = createApp(Shell);
app
  .use(store)
  .use(router)
  .use(i18n)
  .component("AppLayout", AppLayout)
  .mount("#app");
