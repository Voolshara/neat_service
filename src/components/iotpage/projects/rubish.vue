<template>
  <div v-if="isMobile()" class="block" v-on:click="click">
    <div class="container">
      <img class="prg-img" src="@/assets/IotPage/rubbish-bin.png" alt="" />
      <div class="textPrj">
        <div class="name">Мониторинг мусорных контейнеров</div>
        <div class="desc">
          Датчик контролирует уровень заполнености мусорных баков
        </div>
      </div>
    </div>
    <div v-show="isclicked" :class="'additionalBlock ' + hoverClass">
      <div class="description">
        <p class="DescLabel">
          Датчик мусора применяется для любых типов контейнеров:
        </p>
        <div class="Elements">
          <div class="ElementContainer">
            <img src="@/assets/IotPage/eco.png" alt="" />
            <p class="name">Экобоксы</p>
          </div>
          <div class="ElementContainer">
            <img src="@/assets/IotPage/fandomat.png" alt="" />
            <p class="name">Фандоматы</p>
          </div>
          <div class="ElementContainer">
            <img src="@/assets/IotPage/euroContainer.png" alt="" />
            <p class="name">Евроконтейнеры</p>
          </div>
          <div class="ElementContainer">
            <img src="@/assets/IotPage/metalContainer.png" alt="" />
            <p class="name">Металлические контейнеры</p>
          </div>
        </div>
      </div>

      <div class="Architecture">
        <p class="ArchLabel">Архитектура решения</p>
        <div class="Elements2IOT">
          <div>
            <p class="AcrchDesc">• Датчик огня</p>
            <p class="AcrchDesc">• Срок службы 5 лет</p>
            <p class="AcrchDesc">• Оповещение при перевороте</p>
          </div>
          <div>
            <div class="ElementContainer">
              <img src="@/assets/IotPage/rubish_bin_min.png" alt="" />
              <p class="name">Металлические контейнеры</p>
            </div>

            <div class="ElementContainer">
              <img src="@/assets/IotPage/network.png" alt="" />
              <p class="name">Сетевой шлюз</p>
            </div>

            <div class="ElementContainer">
              <img src="@/assets/IotPage/software.png" alt="" />
              <p class="name">Программное обеспечение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- _________________________________________________- -->

  <div v-else class="block" @mouseover="hover" @mouseleave="unhover">
    <div class="container">
      <img class="prg-img" src="@/assets/IotPage/rubbish-bin.png" alt="" />
      <div class="textPrj">
        <div class="name">Мониторинг мусорных контейнеров</div>
        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          officia.
        </div>
      </div>
    </div>
    <div v-show="ishovered" :class="'additionalBlock ' + hoverClass">
      <div class="description">
        <p class="DescLabel">
          Датчик мусора применяется для любых типов контейнеров:
        </p>
        <div class="Elements">
          <div class="ElementContainer">
            <img src="@/assets/IotPage/eco.png" alt="" />
            <p class="name">Экобоксы</p>
          </div>
          <div class="ElementContainer">
            <img src="@/assets/IotPage/fandomat.png" alt="" />
            <p class="name">Фандоматы</p>
          </div>
          <div class="ElementContainer">
            <img src="@/assets/IotPage/euroContainer.png" alt="" />
            <p class="name">Евроконтейнеры</p>
          </div>
          <div class="ElementContainer">
            <img src="@/assets/IotPage/metalContainer.png" alt="" />
            <p class="name">Металлические контейнеры</p>
          </div>
        </div>
      </div>

      <div class="Architecture">
        <p class="ArchLabel">Архитектура решения</p>
        <div class="Elements">
          <div>
            <p class="AcrchDesc">• Датчик огня</p>
            <p class="AcrchDesc">• Срок службы 5 лет</p>
            <p class="AcrchDesc">• Оповещение при перевороте</p>
          </div>

          <div class="ElementContainer">
            <img src="@/assets/IotPage/rubish_bin_min.png" alt="" />
            <p class="name">Металлические контейнеры</p>
          </div>

          <div class="ElementContainer">
            <img src="@/assets/IotPage/network.png" alt="" />
            <p class="name">Сетевой шлюз</p>
          </div>

          <div class="ElementContainer">
            <img src="@/assets/IotPage/software.png" alt="" />
            <p class="name">Программное обеспечение</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RubishPrj",
  data() {
    return {
      ishovered: false,
      isclicked: false,
      hoverClass: "",
      stopHover: false,
    };
  },
  methods: {
    hover() {
      this.ishovered = true;
      this.hoverClass = "animate__animated animate__fadeInLeft animate__faster";
      this.stopHover = true;
    },
    async click() {
      console.log("QU");
      if (this.isclicked) {
        this.hoverClass =
          "animate__animated animate__fadeOutUp animate__faster";
        await new Promise((resolve) => {
          setTimeout(resolve, 300);
        });
        this.isclicked = false;
      } else {
        this.isclicked = true;
        this.hoverClass =
          "animate__animated animate__fadeInDown animate__faster";
      }
    },
    async unhover() {
      this.stopHover = false;
      this.hoverClass =
        "animate__animated animate__fadeOutLeft animate__faster";
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
      if (!this.stopHover) this.ishovered = false;
    },
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
.additionalBlock {
  .ArchLabel {
    font-size: 20px;
    margin: 0;
    margin-bottom: 15px;
  }

  .DescLabel {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .Elements {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;

    justify-content: center;

    img {
      height: 70px;
    }

    .ElementContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 150px;
    }

    .name {
      font-size: 15px;
      margin: 0;
      color: black;
    }

    .AcrchDesc {
      margin-bottom: 3px;
      font-size: 13px;
      width: 120px;
    }
  }

  color: black;
  background-color: white;
  z-index: 2;
  height: 426px;
  position: relative;
  left: -95px;
  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-right: 30px;
  padding-left: 30px;

  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
.textPrj {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.desc {
  font-size: 20px;
  font-weight: 200;
  color: white;
  width: 70%;
}
.name {
  font-size: 30px;
  font-weight: 400;
  color: white;
  padding-bottom: 7px;

  text-align: left;

  width: 70%;
  text-align: left;
}

.prg-img {
  margin-bottom: 30px;
  height: 180px;
}

.block {
  align-self: flex-start;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  color: black;

  padding: 10px;
  padding-right: 40px;
  border: 3px solid white;
  height: 400px;
  width: 600px;

  margin-left: 13vw;
}

@media screen and (max-width: 700px) {
  .block {
    flex-direction: column;
    align-self: center;
    margin-bottom: 40px;
  }

  .container {
    width: 300px;
    margin-left: 0;
    padding-right: 10px;
    padding-bottom: 95px;

    padding-top: 20px;

    height: 325px;

    .name {
      width: 80%;
    }

    .desc {
      width: 80%;
    }

    img {
      height: 70px;
    }
  }

  .additionalBlock {
    .DescLabel {
      width: 280px;
      font-size: 16px;
      margin: 0 0 10px 0;
    }

    .Elements {
      display: grid;
      grid-template-columns: auto auto;
      flex-direction: column;

      img {
        height: 40px;
      }

      .ElementContainer {
        flex-direction: column;
      }

      .name {
        font-size: 10px;
        text-align: center;
      }
    }

    .Elements2IOT {
      display: flex;
      flex-direction: row;

      img {
        height: 40px;
      }

      .ElementContainer {
        display: flex;
        flex-direction: column;

        align-items: center;

        img {
          height: 30px;
        }
      }

      .name {
        font-size: 10px;
        text-align: center;
        color: black;
      }
    }

    width: 300px;
    left: 0;
    top: -90px;

    height: 480px;
    padding-left: 12px;
    padding-right: 12px;

    border-top-right-radius: 0;
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }
}
</style>
