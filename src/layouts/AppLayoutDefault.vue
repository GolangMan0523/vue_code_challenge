<template>
  <div>
    <NavBar mode="marketing" />
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/navbars/NavBar";
export default {
  components: { NavBar },
};
</script>
