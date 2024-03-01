<template>
  <div class="flex-shrink-0 flex items-center" v-if="isMarketing">
    <img
      class="block lg:hidden h-8 w-auto"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
    <img
      class="hidden lg:block h-8 w-auto"
      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
      alt="Workflow"
    />
  </div>
  <div :class="divCssClass" v-else>
    <img
      class="h-8 w-auto"
      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
      alt="Workflow"
    />
  </div>
</template>

<script>
export default {
  name: "NavLogo",
  props: {
    mobile: { type: Boolean, default: false },
    mode: { type: String, default: "marketing" },
  },
  computed: {
    isMarketing() {
      return this.mode === "marketing";
    },
    isApplication() {
      return this.mode === "application";
    },
    divCssClass() {
      if (this.mobile) {
        return "flex-shrink-0 flex items-center px-4";
      }
      return "flex items-center flex-shrink-0 px-6";
    },
  },
};
</script>

<style scoped></style>
