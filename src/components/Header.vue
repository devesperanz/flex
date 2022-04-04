<template>
  <div>
    <v-sheet color="#F7F8F9" width="100%" class="header">
      <Nav />
      <Hero />
    </v-sheet>
    <Company />
    <svg
      class="curver"
      viewBox="0 0 1440 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z"
        fill="#F7F8F9"
      />
    </svg>
  </div>
</template>

<script>
import Company from "../components/Company.vue";
import Hero from "../components/Hero.vue";
import Nav from "../components/Nav.vue";
export default {
  components: { Nav, Hero, Company },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  margin: 0;
  padding: 0;
  &.curve {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 116px;
  }
}
</style>
