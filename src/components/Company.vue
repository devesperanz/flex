<template>
  <div class="company">
    <p class="text-body-1 lightGray--text text-center mb-6">
      Join 4,000+ companies already growing
    </p>

    <v-container>
      <div class="d-flex justify-space-between align-center">
        <img
          :src="company"
          alt=""
          v-for="(company, index) in companies"
          :key="index"
          width="15%"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        "https://res.cloudinary.com/frozenchicken/image/upload/v1648885306/Flex/Logo_1_ancboc.png",
        "https://res.cloudinary.com/frozenchicken/image/upload/v1648885305/Flex/Logo_2_vz4ptq.png",
        "https://res.cloudinary.com/frozenchicken/image/upload/v1648885304/Flex/Logo_3_etny57.png",
        "https://res.cloudinary.com/frozenchicken/image/upload/v1648885642/Flex/Logo_6_q1mjtr.png",
        "https://res.cloudinary.com/frozenchicken/image/upload/v1648885302/Flex/Logo_5_v5ybvk.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.company {
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1648878968/Flex/Logo_Cloud_1a_1_nzd8en.png");
  background-size: cover;
  background-repeat: no-repeat;
  // height: 280px;
  padding: 88px 0;
}
</style>
