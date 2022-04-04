<template>
  <div>
    <Header />
    <About />
    <Insight />
    <Connection />
    <Map />
    <Footer />
  </div>
</template>
<script>
import Connection from "../components/Connection.vue";
import Footer from "../components/Footer.vue";
import Insight from "../components/Insight.vue";
import Map from "../components/map.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
export default {
  components: {
    Header,
    About,
    Insight,
    Connection,
    Map,
    Footer,
  },
};
</script>
<style lang="scss"></style>
