<template>
  <div class="container">
    <about />
    <formContainer style="margin-bottom: 150px" />
    <command />
  </div>
</template>

<script>
import about from "@/components/main/about.vue";
import Command from "@/components/main/command.vue";
import formContainer from "@/components/form.vue";
export default {
  components: { about, Command, formContainer },
  name: "MainPage",
};
</script>

<style lang="scss" scoped>
.container {
  .blocks {
    width: 80vw;
  }

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
}
</style>
