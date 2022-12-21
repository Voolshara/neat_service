<template>
  <div class="container">
    <contact-us />
  </div>
</template>

<script>
import ContactUs from "@/components/devpage/contactUs.vue";
export default {
  components: { ContactUs },
  name: "aboutPage",
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  margin-bottom: 200px;
}
</style>
