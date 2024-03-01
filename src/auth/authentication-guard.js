import { isAuthenticated, isLoading, login } from "@/auth";
import { watch } from "vue";

export const authenticationGuard = (to, from, next) => {
  const guardAction = () => {
    if (isAuthenticated.value) {
      return next();
    }

    login({
      appState: {
        targetUrl: to.fullPath,
      },
    });
  };

  if (!isLoading.value) {
    return guardAction();
  }

  watch(isLoading, (currentValue) => {
    if (!currentValue) {
      return guardAction();
    }
  });
};
