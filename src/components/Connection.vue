<template>
  <div class="mx-auto text-center connect">
    <v-sheet
      color="#DCFCE7"
      class="success--text text-caption font-weight-medium mx-auto text-center"
      rounded="lg"
      max-width="75"
    >
      CONTACT
    </v-sheet>
    <div class="mt-4 mb-16">
      <h1 class="connect__header">Let’s stay connected</h1>
      <p class="grey--text connect__subtitle mt-4">
        It's never been easier to get in touch with Flex. Call us, use our live
        chat widget or email and we'll get back to you as soon as possible!
      </p>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card :elevation="0" max-width="261" class="mx-auto">
            <v-btn fab dark color="success" class="mb-6" :elevation="0">
              <v-icon dark>mdi-email-open-outline</v-icon>
            </v-btn>
            <h1 class="connect__card-head mb-2">Email</h1>
            <p class="mb-0 grey--text connect__subtitle">contact@flex.co</p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card :elevation="0" max-width="261" class="mx-auto">
            <v-btn fab dark color="success" class="mb-6" :elevation="0">
              <v-icon dark>mdi-phone-in-talk</v-icon>
            </v-btn>
            <h1 class="connect__card-head mb-2">Phone</h1>
            <p class="mb-0 grey--text connect__subtitle">+7-843-672-431</p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card :elevation="0" max-width="261" class="mx-auto">
            <v-btn fab dark color="success" class="mb-6" :elevation="0">
              <v-icon dark>mdi-grid</v-icon>
            </v-btn>
            <h1 class="connect__card-head mb-2">Socials</h1>
            <div>
              <v-icon color="success" class="mx-4">mdi-facebook</v-icon>
              <v-icon color="success" class="mx-4">mdi-twitter</v-icon>
              <v-icon color="success" class="mx-4">mdi-instagram</v-icon>
              <v-icon color="success" class="mx-4">mdi-linkedin</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.connect {
  padding-top: 88px;
  padding-bottom: 62px;
  &__header {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    font-family: "Poppins", sans-serif;
    @media (max-width: 900px) {
      font-size: 36px;
      line-height: 35px;
    }
  }
  &__subtitle {
    font-size: 20px;
    line-height: 30px;
    max-width: 919px;
    font-weight: 500;
    margin: 0 auto;
    @media (max-width: 900px) {
      font-size: 16px;
      line-height: 35px;
      max-width: 600px;
    }
  }
  &__card {
    &-head {
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      font-family: "Poppins", sans-serif;
    }
  }
}
</style>
