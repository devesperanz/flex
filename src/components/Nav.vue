<template>
  <v-app-bar :elevation="0" color="transparent" :height="80">
    <v-container fluid class="d-flex align-center">
      <div class="d-flex align-center">
        <v-img
          src="https://res.cloudinary.com/frozenchicken/image/upload/v1648760140/Flex/Group_ljmndx.png"
          max-width="25.68"
        />
        <h3 class="ml-3">Flex</h3>
      </div>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link to="/" class="ml-12 grey--text">Products</router-link>
        <router-link to="/" class="ml-12 grey--text">Features</router-link>
        <router-link to="/" class="ml-12 grey--text">Pricing</router-link>
        <router-link to="/" class="ml-12 grey--text">Resources</router-link>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          href="https://letesend.com/"
          target="_blank"
          class="mr-6 font-weight-medium grey--text"
          text
        >
          Log In
        </v-btn>
        <v-btn color="success" class="" :elevation="0"> Sign Up </v-btn>
      </div>
    </v-container>
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      color="black"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer app absolute v-model="drawer" right>
      <v-list two-line>
        <v-list-item>
          <router-link to="/" class="ml-12 grey--text">Products</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/" class="ml-12 grey--text">Features</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/" class="ml-12 grey--text">Pricing</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/" class="ml-12 grey--text">Resources</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-left: 90.05px !important;
  margin-right: 88px !important;
}
.navs {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
</style>
