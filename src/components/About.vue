<template>
  <div class="about">
    <div
      color="#DCFCE7"
      class="success--text text-caption mx-auto font-weight-medium mb-4 about__heading"
      rounded
    >
      FEATURES
    </div>
    <v-sheet color="transparent" max-width="917px" class="mx-auto text-center">
      <h1 class="darkNeutral--text about__header mb-2">
        Gain more insight into how people use your
      </h1>
      <p class="about__subtitle grey--text mb-0">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage every aspect of your business in one secure
        platform.
      </p>
    </v-sheet>
    <v-container class="mt-12">
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(feature, index) in features"
          :key="index"
        >
          <v-card
            max-width="359"
            max-height="272"
            :elevation="0"
            class="py-8 fill-height mx-auto"
          >
            <v-sheet
              color="success"
              class="pa-5 sup mb-6 text-center mx-auto"
              max-width="64"
            >
              <v-icon color="white"> {{ feature.icon }}</v-icon>
            </v-sheet>
            <v-card-text class="mb-0 pb-0 px-0 text-center">
              <h1
                class="font-weight-bold darkNeutral--text about__content-title mb-4"
              >
                {{ feature.title }}
              </h1>
              <p
                class="about__content-description grey--text mx-auto px-2 mb-0"
              >
                {{ feature.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="period py-16 my-0">
      <div class="period__content mx-auto">
        <v-sheet
          class="d-flex align-center justify-space-around flex-wrap"
          color="transparent"
        >
          <div class="period__details mt-16">
            <h1 class="white--text period__details-title">
              The fastest way from idea to live site. Period.
            </h1>
            <p class="period__details-subtitle gray--text mt-4">
              Flex is a Small SaaS Business. Flex isn’t a traditional company.
            </p>
          </div>
          <div>
            <v-btn large color="success" class="mr-6">Get Started</v-btn>
            <v-btn large>Learn More</v-btn>
          </div>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "mdi-email-multiple-outline",
          title: "Measure your performance",
          description:
            "Stay connected with your team and make quick decisions wherever you are.",
        },
        {
          icon: "mdi-chart-line-variant",
          title: "Custom analytics",
          description:
            "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
        },
        {
          icon: "mdi-account-multiple",
          title: "Team Management",
          description:
            "Our calendar lets you know what is happening with customer and projects so you",
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
        {
          icon: "mdi-cog-outline",
          title: "Easy setup",
          description:
            "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin-top: 92px;
  &__heading {
    background: #dcfce7;
    box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
    border-radius: 36px;
    font-size: 12px;
    line-height: 18px;
    padding: 2px 8px;
    max-width: 74px;
  }
  &__header {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    font-family: "Poppins", sans-serif;
    @media (max-width: 900px) {
      font-size: 24px;
      line-height: 35px;
    }
  }
  &__subtitle {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    margin: 0 auto;
    @media (max-width: 900px) {
      font-size: 16px;
      max-width: 650px;
    }
  }
  &__content {
    &-title {
      font-size: 24px;
      line-height: 32px;
      font-family: "Poppins", sans-serif;
      @media (max-width: 900px) {
        font-size: 20px;
        // max-width: 650px;
        // margin: 0 auto;
      }
    }
    &-description {
      font-size: 16px;
      line-height: 24px;
      max-width: 295px;
      font-weight: 500;
      @media (max-width: 900px) {
        font-size: 14px;
        // max-width: 650px;
        // margin: 0 auto;
      }
    }
  }
}
.period {
  background: linear-gradient(
    to bottom,
    #fff 0%,
    #fff 50%,
    #f7f8f9 50%,
    #f7f8f9 50%
  );
  @media (max-width: 800px) {
    margin: 10px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    margin-right: 0px;
  }
  &__content {
    background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1648916776/Flex/Frame_1_m1bcrk.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 1140px;
    height: 290px;
    @media (max-width: 1140px) {
      font-size: 14px;
      width: 900px;
    }
    @media (max-width: 1140px) {
      font-size: 14px;
      width: 750px;
      text-align: center;
      height: 350px;
    }
    @media (max-width: 800px) {
      font-size: 14px;
      width: 100%;
      margin: 30px;
      text-align: center;
      height: 320px;
    }
    // @media (max-width: 600px) {
    //   font-size: 14px;
    //   width: 550px;
    //   text-align: center;
    //   height: 350px;
    // }
  }
  &__details {
    max-width: 456px;
    width: 100%;
    &-title {
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      font-family: "Poppins", sans-serif;
      @media (max-width: 900px) {
        font-size: 24px;
        line-height: 35px;
      }
    }
    &-subtitle {
      font-size: 20px;
      line-height: 30px;
      letter-spacing: -0.02em;
      @media (max-width: 900px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
.sup {
  border-radius: 4px;
}
</style>
