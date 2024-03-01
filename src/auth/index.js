import createAuth0Client from "@auth0/auth0-spa-js";
import { inject, provide, ref } from "vue";
import router from "../router";

const domain = process.env.VUE_APP_AUTH0_DOMAIN;
const clientId = process.env.VUE_APP_AUTH0_CLIENT_ID;
// Set to backend API once available
//const audience = process.env.VUE_APP_AUTH0_AUDIENCE;
const callbackUrl = process.env.VUE_APP_AUTH0_CALLBACK_URL;

const auth0Client = ref(null);
export const isAuthenticated = ref(false);
export const isLoading = ref(true);
const user = ref(null);
const error = ref(null);

const Auth0Symbol = Symbol();

const createClient = async () => {
  auth0Client.value = await createAuth0Client({
    domain,
    client_id: clientId,
    //    audience: audience,
    redirect_uri: callbackUrl,
  });
};

const handleCallback = async () => {
  if (!auth0Client.value) {
    return;
  }

  isAuthenticated.value = await auth0Client.value.isAuthenticated();

  if (isAuthenticated.value) {
    user.value = (await auth0Client.value.getUser()) || null;
    isLoading.value = false;

    window.history.replaceState({}, document.title, window.location.pathname);

    return;
  }

  const params = new URLSearchParams(window.location.search);
  const hasError = params.has("error");
  const hasCode = params.has("code");
  const hasState = params.has("state");

  if (hasError) {
    error.value = new Error(
      params.get("error_description") || "error completing login process"
    );

    isLoading.value = false;

    return;
  }

  if (hasCode && hasState) {
    try {
      const result = await auth0Client.value.handleRedirectCallback();

      let url = "/";

      if (result.appState && result.appState.targetUrl) {
        url = result.appState.targetUrl;
      }

      isAuthenticated.value = await auth0Client.value.isAuthenticated();

      if (isAuthenticated.value) {
        user.value = (await auth0Client.value.getUser()) || null;
        error.value = null;

        isLoading.value = false;

        await router.push(url);

        return;
      }
    } catch (err) {
      error.value = err;
    }
  }

  isLoading.value = false;
};

export const login = async (options) => {
  if (!auth0Client.value) {
    return;
  }

  try {
    await auth0Client.value.loginWithRedirect(options);
  } catch (err) {
    error.value = err;
  }
};

const logout = async (options) => {
  if (!auth0Client.value) {
    return;
  }

  try {
    auth0Client.value.logout(options);
  } catch (err) {
    error.value = err;
  }
};

const getAccessToken = async (options) => {
  if (!auth0Client.value) {
    return null;
  }

  return await auth0Client.value.getTokenSilently(options);
};

export const provideAuth0 = () => {
  const auth0 = {
    isAuthenticated,
    isLoading,
    user,

    createClient,
    handleCallback,
    login,
    logout,
    getAccessToken,
  };

  provide(Auth0Symbol, auth0);
};

export const useAuth0 = () => {
  const auth0 = inject(Auth0Symbol);

  if (!auth0) {
    return null;
  }

  return auth0;
};
