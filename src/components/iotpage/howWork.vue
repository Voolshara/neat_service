<template>
  <div class="howWork">
    <p class="label">Как работает IOT?</p>
    <div class="IotScheme">
      <img
        v-animate-onscroll="{ down: 'animated fadeInLeft' }"
        class="ImgScheme"
        src="@/assets/iot/iot.png"
        alt=""
      />
      <div
        v-animate-onscroll="{ down: 'animated fadeInRight' }"
        class="DescScheme"
      >
        <p v-if="isMobile()" class="header">Основные компоненты IOT:</p>
        <p v-else class="header">Основные компоненты:</p>
        <div class="DescEl">
          <p class="Elementlabel">1) БАЗОВАЯ СТАНЦИЯ</p>
          Обслуживает > 100 000 датчиков в радиусе до 10 км в городе и до 50 км
          в сельской местности (на открытом пространстве)
        </div>

        <div class="DescEl">
          <p class="Elementlabel">2) ДАТЧИКИ</p>
          До 5 лет автономной работы. Выходная мощность передатчика 25 мВт. Не
          требуют регистрации
        </div>

        <div class="DescEl">
          <p class="Elementlabel">3) СЕРВЕР СЕТИ</p>
          Сбор и обработка всех данных
        </div>

        <div class="DescEl">
          <p class="Elementlabel">4) ПРОГРАМНОЕ ОБЕСПЕЧЕНИЕ</p>
          Облачный сервис. Есть API и другие механизмы интеграции. Также
          возможна локальная установка программно-аппаратного комплекса.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IOThowWOrk",
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
.label {
  align-self: flex-start;
  font-size: 45px;
  margin-top: 50px;
  margin-left: 200px;
  margin-bottom: 100px;
}

@media screen and (max-width: 700px) {
  .label {
    // align-self: center;
    // width: 300px;
    // margin-left: 0;
    // text-align: center;
    // font-size: 40px;
    // margin-bottom: 20px;
    display: none;
  }
}

.DescEl {
  margin-left: 20px;
  .Elementlabel {
    color: var(--color-red);
    margin-left: -20px;
    font-size: 20px;
  }
}

.IotScheme {
  .DescScheme {
    width: 35vw;

    .header {
      font-size: 34px;
    }
  }
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;
}

@media screen and (max-width: 700px) {
  .IotScheme {
    flex-direction: column-reverse;
    align-items: center;
    .DescScheme {
      width: 300px;
      margin-top: 50px;

      .header {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}

.ImgScheme {
  width: 40vw;
}

@media screen and (max-width: 700px) {
  .ImgScheme {
    margin-top: 40px;
    width: 80vw;
    transition: all 0.2s ease-in-out;
  }

  .ImgScheme:hover {
    transform: scale(1.15);
  }
}

.howWork {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}

@media screen and (max-width: 700px) {
  .howWork {
    margin-bottom: 40px;
  }
}
</style>
