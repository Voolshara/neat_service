<template>
  <div class="container">
    <div class="label">
      Внедрить очень просто
      <div class="label-2">
        Система начинает давать результат
        <div style="margin: 0 5px 0 5px; font-weight: 800">сразу</div>
        после установки
      </div>
    </div>

    <div class="circlesblock">
      <div class="circle">1</div>
      <div class="circle">2</div>
      <div class="circle">3</div>
      <div class="text">
        Датчики устанавливаются за пару дней, никаких проводов
      </div>
      <div class="text">
        Программное обеспечение настраивается нашими силами, обучаем ваших
        специалистов
      </div>
      <div class="text">
        Открытое, хорошо документированное API позволяет быстро сделать любые
        интеграции в ваши IT-системы
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IotWithPosition",
};
</script>

<style lang="scss" scoped>
.circlesblock {
  display: grid;
  grid-template-rows: 350px 50px;
  grid-template-columns: 420px 420px 420px;

  .circle {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border: red 5px solid;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 800;
    font-size: 100px;
  }

  .text {
    width: 350px;
    text-align: center;
    font-size: 20px;
  }
}

.container {
  .label {
    margin-top: 80px;
    color: black;
    align-self: center;
    margin-left: 300px;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 80px;
    width: 1560px;

    .label-2 {
      margin-top: 10px;
      margin-left: 5px;
      font-size: 20px;
      width: 800px;
      font-weight: 200;
      display: flex;
      flex-direction: row;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #f3e0be;
  margin-top: 100px;
  padding-bottom: 150px;
}
</style>
