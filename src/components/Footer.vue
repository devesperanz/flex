<template>
  <div class="footer text-center">
    <div class="d-flex align-center justify-center">
      <v-img
        src="https://res.cloudinary.com/frozenchicken/image/upload/v1648760140/Flex/Group_ljmndx.png"
        max-width="25.68"
      />
      <h3 class="ml-3 white--text">Flex</h3>
    </div>
    <div class="footer__route container">
      <v-row>
        <v-col
          cols="12"
          md="1"
          sm="12"
          v-for="(link, index) in links"
          :key="index"
          class="mx-auto"
        >
          <router-link to="/" class="gray--text">{{ link }}</router-link>
        </v-col>
      </v-row>
    </div>
    <v-divider class="mb-4 footer__divider" color="#333F51"></v-divider>
    <div class="mt-10">
      <p class="gray--text">© {{ currentYear }} Flex. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
      links: [
        "Products",
        "Features",
        "Pricing",
        "Resources",
        "Career",
        "Help",
        "Privacy",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1649013691/Flex/Pattern_Dark_rjzyvl.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 176px;
  padding-bottom: 84px;
  @media (max-width: 900px) {
    padding-top: 66px;
    padding-bottom: 44px;
  }
  &__route {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  &__divider {
    border: 1px solid;
  }
}
</style>
