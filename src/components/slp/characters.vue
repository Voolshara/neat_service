<template>
  <div class="containerSLP">
    <p class="name">{{ label }}</p>
    <div class="firstEl">
      <p class="head">Система позволяет:</p>
      <ul>
        <li class="element" v-for="(item, index) in system" :key="index">
          {{ item }}
        </li>
      </ul>
      <p class="head">Характеристики:</p>
      <ul>
        <li class="element" v-for="(item, index) in chacharacters" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="secondEl"></div>
  </div>
</template>

<script>
export default {
  name: "SLPShacharacters",
  props: {
    label: String,
    system: Array,
    chacharacters: Array,
  },
};
</script>

<style lang="scss" scoped>
.containerSLP {
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 4px dashed rgba(227, 6, 19, 0.15);
  border-radius: 30px;
  padding: 15px;
  margin-top: 50px;

  .name {
    margin: 0;
    font-size: 30px;
  }

  .firstEl {
    .head {
      font-size: 23px;
      color: var(--color-blue);
    }

    .element {
      margin-bottom: 5px;
    }
  }
}
</style>
