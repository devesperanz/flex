<template>
  <div class="hero mx-auto mt-5">
    <v-sheet
      color="success"
      rounded="lg"
      max-width="62"
      class="white--text text-caption text-center mx-auto font-weight-medium mb-6"
    >
      HEADER
    </v-sheet>
    <v-sheet
      max-width="714"
      color="transparent"
      class="mx-auto hero__content text-center"
    >
      <h1 class="white--text hero__content-title mb-6">
        A small business is only as good as its tools.
      </h1>
      <p class="gray--text font-weight-medium hero__content-subtitle">
        We’re different. Flex is the only saas business platform that lets you
        run <br />
        your business on one platform, seamlessly across all digital channels.
      </p>
      <div
        class="mt-6 mx-auto hero__content-action 101 d-flex flex-wrap justify-center mx-auto"
        width="330px"
      >
        <v-text-field
          label="Enter your work email"
          solo
          height="56"
          class="hero__content-input"
          hide-details=""
          prepend-inner-icon="mdi-email-outline"
        ></v-text-field>

        <v-btn color="success" class="btn" large>Get early access</v-btn>
      </div>
      <p class="gray--text mt-4 font-weight-medium hero__content-subtitle">
        Start your free 14-day trial today, no credit card required.
      </p>
    </v-sheet>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
.hero {
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1648819763/Flex/Frame_18_xueap8.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  width: 1140px;
  height: 568px;
  padding: 88px 0px;
  @media (max-width: 1140px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 700px;
    padding: 55px 0px;
  }
  @media (max-width: 700px) {
    max-width: 600px;
    padding: 55px 0px;
  }
  @media (max-width: 600px) {
    width: 500px;
    padding: 55px 0px;
  }
  @media (max-width: 490px) {
    width: 400px;
    padding: 38px 0px;
  }
  &__content {
    &-title {
      font-size: 60px;
      line-height: 72px;
      font-family: "Poppins", sans-serif;
      letter-spacing: -0.02em;
      @media (max-width: 900px) {
        font-size: 46px;
        padding: 30px 0px;
        padding-bottom: 15px;
        line-height: 52px;
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        font-size: 36px;
      }
      @media (max-width: 490px) {
        font-size: 28px;
        line-height: 38px;
      }
    }
    &-subtitle {
      line-height: 30px;
      @media (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
      }
      @media (max-width: 490px) {
        line-height: 24px;
        font-size: 12px;
      }
    }
    &-action {
      button {
        @media (max-width: 768px) {
          margin-bottom: 0px !important;
        }
      }
      @media (max-width: 900px) {
        display: block !important;
        margin: 28px !important;
      }
    }
    &-input {
      @media (max-width: 768px) {
        margin-right: 0px !important;
      }
    }
  }
}
.btn {
  padding: 14px 28px !important;
  line-height: 28px;
  height: 56px !important;
  font-weight: 500;
  text-transform: none !important;

  margin-left: 14px;
  @media (max-width: 900px) {
    margin-left: 0px;
    margin-top: 14px;
  }
}
</style>
