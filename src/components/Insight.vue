<template>
  <div class="insight">
    <v-container>
      <v-sheet
        color="#DCFCE7"
        class="success--text text-caption font-weight-medium mb-4 insight__heading"
        rounded="lg"
        max-width="75"
      >
        FEATURES
      </v-sheet>
      <h1 class="darkNeutral--text insight__header mb-2">
        Gain more insight into how people use your
      </h1>
      <v-sheet color="transparent" max-width="919px" class="mb-12">
        <p class="insight__subtitle grey--text mb-0">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </v-sheet>
      <div class="d-flex justify-space-between flex-wrap align-center more">
        <v-sheet max-width="456px" class="more__content" color="transparent">
          <div
            class="d-flex align-center mb-10"
            v-for="(item, index) in info"
            :key="index"
          >
            <v-sheet
              color="success"
              class="pa-4 sup mb-6"
              max-width="64"
              rounded
            >
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-sheet>
            <v-sheet class="mt-4 ml-6" color="transparent" max-width="375">
              <h1 class="font-weight-bold darkNeutral--text more__header">
                {{ item.title }}
              </h1>
              <p class="more__subtitle grey--text mb-0">
                {{ item.description }}
              </p>
            </v-sheet>
          </div>
        </v-sheet>
        <v-img
          src="https://res.cloudinary.com/frozenchicken/image/upload/v1648930111/Flex/Group_33_oonrbh.png"
          alt=""
          max-width="568px"
          width="100%"
          class="more__img"
        />
      </div>
      <div class="d-flex justify-space-between align-center flex-wrap resource">
        <v-img
          src="https://res.cloudinary.com/frozenchicken/image/upload/v1648930111/Flex/Group_33_oonrbh.png"
          alt=""
          max-width="568px"
          width="100%"
          class="resource__img"
        />
        <div class="mx-auto">
          <v-sheet
            color="#DCFCE7"
            class="success--text text-caption font-weight-medium mb-4 insight__heading"
            rounded="lg"
            max-width="75"
          >
            FEATURES
          </v-sheet>
          <v-sheet
            class="mt-4 resource__content"
            color="transparent"
            max-width="456px"
          >
            <h1
              class="font-weight-bold darkNeutral--text resource__header mb-4"
            >
              Gain more insight into how people use your
            </h1>
            <p class="resource__subtitle grey--text mb-0">
              With our integrated CRM, project management, collaboration and
              invoicing capabilities, you can manage every aspect of your
              business in one secure platform.
            </p>
          </v-sheet>
          <div class="resource__btn mt-6">
            <v-btn color="success" :elevation="0"> Get Started </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          icon: "mdi-email-multiple-outline",
          title: "Measure your performance",
          description:
            "Stay connected with your team and make quick decisions wherever you are. ",
        },
        {
          icon: "mdi-pencil",
          title: "Build your website",
          description:
            "A tool that lets you build a dream website even if you know nothing about web design or programming.",
        },
        {
          icon: "mdi-view-grid-outline",
          title: "Connect multiple apps",
          description:
            "The first business platform to bring together all of your products from one place.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.insight {
  padding-top: 90px;
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1648878968/Flex/Logo_Cloud_1a_1_nzd8en.png");
  background-size: cover;
  background-repeat: no-repeat;
  &__heading {
    background: #dcfce7;
    box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
    border-radius: 36px;
    font-size: 12px;
    line-height: 18px;
    padding: 2px 8px;
    max-width: 74px;
    @media (max-width: 1258px) {
      margin: 0 auto;
    }
  }
  &__header {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    font-family: "Poppins", sans-serif;
    @media (max-width: 1258px) {
      margin: 0 auto;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
    }
  }
  &__subtitle {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    @media (max-width: 1258px) {
      margin: 0 auto;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      max-width: 650px;
    }
  }
}
.more {
  padding-bottom: 90px;
  @media (max-width: 956px) {
    margin: 0 auto !important;
  }
  &__img {
    @media (max-width: 1258px) {
      margin: 0 auto;
    }
  }
  &__content {
    @media (max-width: 1258px) {
      margin: 0 auto;
    }
  }
  &__header {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
    font-family: "Poppins", sans-serif;
  }
  &__subtitle {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
}
.resource {
  padding-bottom: 90px;
  @media (max-width: 1256px) {
    margin: 0 auto !important;
    flex-direction: column-reverse;
  }
  &__img {
    @media (max-width: 1258px) {
      margin: 0 auto;
    }
  }
  &__content {
    @media (max-width: 1258px) {
      margin: 0 auto;
    }
  }
  &__header {
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.02em;
    font-family: "Poppins", sans-serif;
    @media (max-width: 1258px) {
      margin: 0 auto;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
    }
  }
  &__subtitle {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    max-width: 456px;
    @media (max-width: 1258px) {
      margin: 0 auto;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      max-width: 650px;
    }
  }
  &__btn {
    //  padding-bottom: 90px;
    margin-bottom: 60px;
    @media (max-width: 1258px) {
      text-align: center;
    }
  }
}
</style>
