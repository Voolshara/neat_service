<template>
  <div v-if="isMobile()" class="block" v-on:click="click">
    <div class="container">
      <img class="prg-img" src="@/assets/IotPage/rotation.png" alt="" />
      <div class="textPrj">
        <div class="name">
          Мониторинг наклона или падения деревьев или высотных конструкций
        </div>
        <div class="desc">
          Датчик наклона предназначен для непрерывного измерения угла наклона
          объекта от вертикальной оси, точность 0,1 градуса
        </div>
      </div>
    </div>
    <div v-show="isclicked" :class="'additionalBlock ' + hoverClass">
      <div class="Architecture">
        <p class="ArchLabel">Применяется для контроля отклонения:</p>
        <div class="Elements">
          <p class="AcrchDesc">
            • опор ЛЭП падения деревьев дорожных знаков строительных кранов
            рекламных щитов и др. высотных конструкций
          </p>
          <p class="AcrchDesc">
            • башенной инфраструктуры (АМС) «сотовых» операторов
          </p>
          <p class="AcrchDesc">
            • падения деревьев, дорожных знаков, знаков строительных кранов
          </p>
        </div>
      </div>
      <div class="description">
        <div class="ElementContainer">
          <img src="@/assets/IotPage/protected.png" alt="" />
          <p class="name">Герметичный корпус, IP68</p>
        </div>
        <div class="ElementContainer">
          <img src="@/assets/IotPage/antenna.png" alt="" />
          <p class="name">Высокая дальность</p>
        </div>
        <div class="ElementContainer">
          <img src="@/assets/IotPage/battery.png" alt="" />
          <p class="name">До 5 лет автономной работы</p>
        </div>
        <div class="ElementContainer">
          <img src="@/assets/IotPage/temperature.png" alt="" />
          <p class="name">Диапазон рабочих температур - 40… + 85 °С</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="block" @mouseover="hover" @mouseleave="unhover">
    <div class="container">
      <img class="prg-img" src="@/assets/IotPage/rotation.png" alt="" />
      <div class="textPrj">
        <div class="name">
          Мониторинг наклона или падения деревьев или высотных конструкций
        </div>
        <div class="desc">
          датчик наклона предназначен для непрерывного измерения угла наклона
          объекта от вертикальной оси, точность 0,1 градуса
        </div>
      </div>
    </div>
    <div v-show="ishovered" :class="'additionalBlock ' + hoverClass">
      <div class="Architecture">
        <p class="ArchLabel">Применяется для контроля отклонения:</p>
        <div class="Elements">
          <p class="AcrchDesc">
            • опор ЛЭП падения деревьев дорожных знаков строительных кранов
            рекламных щитов и др. высотных конструкций
          </p>
          <p class="AcrchDesc">
            • башенной инфраструктуры (АМС) «сотовых» операторов
          </p>
          <p class="AcrchDesc">
            • падения деревьев, дорожных знаков, знаков строительных кранов
          </p>
          <p class="AcrchDesc">• и др.</p>
        </div>
      </div>
      <div class="description">
        <div class="ElementContainer">
          <img src="@/assets/IotPage/protected.png" alt="" />
          <p class="name">Герметичный корпус, IP68</p>
        </div>
        <div class="ElementContainer">
          <img src="@/assets/IotPage/antenna.png" alt="" />
          <p class="name">
            Высокая дальность: до 10 км в городе, до 50 км за городом
          </p>
        </div>
        <div class="ElementContainer">
          <img src="@/assets/IotPage/battery.png" alt="" />
          <p class="name">
            До 5 лет автономной работы (не требует технического обслуживания)
          </p>
        </div>
        <div class="ElementContainer">
          <img src="@/assets/IotPage/temperature.png" alt="" />
          <p class="name">Диапазон рабочих температур - 40… + 85 °С</p>
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
      this.hoverClass =
        "animate__animated animate__fadeInRight animate__faster";
      this.stopHover = true;
    },
    async unhover() {
      this.stopHover = false;
      this.hoverClass =
        "animate__animated animate__fadeOutRight animate__faster";
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
      if (!this.stopHover) this.ishovered = false;
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
  .DescLabel {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .description {
    width: 300px;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 70px;
    }

    .ElementContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;

      .name {
        font-size: 13px;
        margin: 0;
        color: black;
        margin-left: 20px;
      }
    }
  }

  .ArchLabel {
    font-size: 20px;
    margin: 0;
    margin-top: 55px;
  }

  .Elements {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 250px;
    justify-content: center;

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
      font-size: 15px;
      width: 250px;
    }
  }

  color: black;
  background-color: white;
  z-index: 2;
  height: 426px;
  position: relative;
  right: -95px;
  width: 600px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  padding-right: 30px;
  padding-left: 30px;

  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.textPrj {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.desc {
  font-size: 17px;
  font-weight: 200;
  color: white;
  width: 75%;
}
.name {
  font-size: 30px;
  font-weight: 400;
  color: white;
  padding-bottom: 7px;

  text-align: left;

  width: 75%;
  text-align: left;
}

.prg-img {
  margin-bottom: 30px;
  height: 150px;
}

.block {
  align-self: flex-end;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  margin-right: 15vw;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  color: black;

  padding: 10px;
  padding-left: 40px;
  border: 3px solid white;
  height: 400px;
  width: 600px;
}

@media screen and (max-width: 700px) {
  .block {
    flex-direction: column;
    align-self: center;
    margin-right: 0;
    margin-bottom: 40px;
  }

  .container {
    width: 300px;
    margin-left: 0;
    padding-left: 10px;
    padding-bottom: 95px;

    padding-top: 20px;

    height: 325px;

    .name {
      font-size: 22px;
      width: 90%;
    }

    .desc {
      width: 90%;
    }

    img {
      height: 70px;
    }
  }

  .additionalBlock {
    .ArchLabel {
      width: 280px;
      font-size: 16px;
      margin: 0 0 10px 0;
    }

    .Elements {
      display: flex;
      flex-direction: column;

      .AcrchDesc {
        margin-top: 5px;
      }
    }

    .description {
      img {
        height: 40px;
      }

      .ElementContainer {
        flex-direction: column;
        width: 70px;
      }

      .name {
        font-size: 10px !important;
        width: 60px;
        margin-left: 0 !important;
        text-align: center;
      }

      margin-top: 5px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    width: 300px;
    left: 0;
    top: -90px;

    height: 400px;
    padding-left: 12px;
    padding-right: 12px;

    flex-direction: column;

    border-top-left-radius: 0;
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }
}
</style>
