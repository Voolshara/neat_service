<template>
  <div class="block" @mouseover="hover" @mouseleave="unhover">
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
    async unhover() {
      this.stopHover = false;
      this.hoverClass =
        "animate__animated animate__fadeOutLeft animate__faster";
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
      if (!this.stopHover) this.ishovered = false;
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
</style>
