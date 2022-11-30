<template>
  <div class="blockDesc">
    <div class="blockName">
      Система
      <p class="highlight">{{ type }}</p>
      позиционирования
    </div>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "SLPDesc",
  props: {
    type: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.blockDesc {
  width: 350px;

  font-weight: 200;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 0;
  padding: 30px;

  border-radius: 20px;

  border: 4px dashed rgba(227, 6, 19, 0.1);

  .highlight {
    margin: 0;
    width: 65%;
    margin: 5px 0 5px 0;
    padding-left: 5px;
    background-color: rgba(227, 6, 19, 0.1);
  }

  .blockName {
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 28px;

    width: 300px;
  }
}
</style>
