<template>
  <v-app>
    <Home />
  </v-app>
</template>
<script>
import Home from "./views/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  font-weight: 500;
  color: #556987;
  text-decoration: none;
}
</style>
