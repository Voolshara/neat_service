<template>
  <div
    class="container"
    v-animate-onscroll="{ down: 'animated fadeInLeft' }"
    data-animate-onscroll-offset="100"
  >
    <div class="label">
      Внедрить очень просто
      <div class="label-2">
        Система начинает давать результат
        <div style="margin: 0 5px 0 5px; font-weight: 800">сразу</div>
        после установки
      </div>
    </div>

    <div v-if="isMobile()" class="circlesblock">
      <div class="circle">1</div>
      <div class="text">
        Датчики устанавливаются за пару дней, никаких проводов
      </div>
      <div class="circle">2</div>
      <div class="text">
        Программное обеспечение настраивается нашими силами, обучаем ваших
        специалистов
      </div>
      <div class="circle">3</div>
      <div class="text">
        Открытое, хорошо документированное API позволяет быстро сделать любые
        интеграции в ваши IT-системы
      </div>
    </div>

    <div v-else class="circlesblock">
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
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.circlesblock {
  display: grid;
  grid-template-rows: 350px 50px;
  gap: 50px;
  grid-template-columns: auto auto auto;

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

  .circle:hover {
    background-color: red;
    color: white;
  }

  .text {
    width: 350px;
    text-align: center;
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    .circle {
      width: 100px;
      height: 100px;
      font-size: 30px;
    }

    .text {
      width: 200px;
      font-size: 16px;
      text-align: left;
    }
  }
}

@media screen and (max-width: 700px) {
  .circlesblock {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 30px;
  }
}

.container {
  .label {
    margin-top: 80px;
    color: black;
    align-self: flex-start;
    padding-left: 300px;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 80px;

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

  @media screen and (max-width: 700px) {
    .label {
      padding-left: 0;
      align-self: center;
      width: 300px;

      .label-2 {
        width: 300px;
        flex-direction: column;
      }
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
