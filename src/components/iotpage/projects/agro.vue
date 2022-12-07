<template>
  <div v-if="isMobile()" class="block" v-on:click="click">
    <div class="container">
      <img class="prg-img" src="@/assets/IotPage/agronomy.png" alt="" />
      <div class="textPrj">
        <div class="name">Готовые решения для сельского хозяйства</div>
        <div class="desc">Мониторинг большого колличества параметров</div>
      </div>
    </div>
    <div v-show="isclicked" :class="'additionalBlock ' + hoverClass">
      <div class="baseAgro">
        <p class="label">Мониторинг влажности почвы</p>
        <div class="baseContainer">
          <p class="descAgro">
            Беспроводной тензометрический датчик важности почвы
          </p>
          <img class="imgAgro" src="@/assets/IotPage/ground.png" alt="" />
        </div>
        <p class="label">Мониторинг температуры в теплицах</p>

        <div class="baseContainer2">
          <p class="descAgro">
            С помощью датчиков температуры можно создать цифровую карту теплицы
          </p>
          <img class="imgAgro" src="@/assets/IotPage/greenhouse.png" alt="" />
        </div>
      </div>

      <!-- <div class="moreAgro">sdfd</div> -->
    </div>
  </div>
  <div v-else class="block" @mouseover="hover" @mouseleave="unhover">
    <div class="container">
      <img class="prg-img" src="@/assets/IotPage/agronomy.png" alt="" />
      <div class="textPrj">
        <div class="name">Готовые решения для сельского хозяйства</div>
        <div class="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          sit ut cum doloremque eaque et obcaecati ducimus veritatis?
        </div>
      </div>
    </div>
    <div v-show="ishovered" :class="'additionalBlock ' + hoverClass">
      <div class="baseAgro">
        <div class="baseContainer">
          <p class="label">Мониторинг влажности почвы</p>
          <p class="descAgro">
            Беспроводной тензометрический датчик важности почвы
          </p>
          <img class="imgAgro" src="@/assets/IotPage/ground.png" alt="" />
        </div>

        <div class="baseContainer">
          <p class="label">Мониторинг температуры в теплицах</p>
          <p class="descAgro">
            С помощью датчиков температуры можно создать цифровую карту теплицы
          </p>
          <img class="imgAgro" src="@/assets/IotPage/greenhouse.png" alt="" />
        </div>
      </div>

      <!-- <div class="moreAgro">sdfd</div> -->
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
  .baseAgro {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    .baseContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .label {
        font-size: 25px;
        font-weight: 400;
      }

      .descAgro {
        font-size: 15px;
        font-weight: 200;
      }

      .imgAgro {
        height: 160px;
      }
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
  align-self: flex-start;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  margin-left: 15vw;
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
}

@media screen and (max-width: 700px) {
  .prg-img {
    margin-bottom: 10px;
  }
  .block {
    flex-direction: column;
    align-self: center;
    margin-bottom: 0px;
    margin-left: 0;
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
    .baseAgro {
      flex-direction: column;

      .baseContainer {
        flex-direction: row;

        .imgAgro {
          height: 100px;
        }
      }
      .label {
        font-size: 20px;
        margin: 0;
      }

      .baseContainer2 {
        flex-direction: column;

        .descAgro {
          font-weight: 200;
        }

        img {
          width: 280px;
        }
      }
    }

    width: 300px;
    left: 0;
    top: -85px;

    height: 480px;
    padding-left: 12px;
    padding-right: 12px;

    border-top-right-radius: 0;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
  }
}
</style>
