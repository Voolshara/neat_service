<template>
  <div class="advantage">
    <img v-if="type" src="@/assets/slp/plus.png" alt="" />
    <img v-else src="@/assets/slp/minus.png" alt="" />
    <p class="advText">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "SLPAdvantages",
  props: {
    type: Boolean,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.advantage {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 20px;

  img {
    width: 25px;
    height: 25px;
  }

  .advText {
    font-size: 23px;
    font-weight: 200;
    margin: 0;
    margin-left: 20px;
    width: 400px;
  }
}
</style>
