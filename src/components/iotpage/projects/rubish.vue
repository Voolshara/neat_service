<template>
  <div class="block" @mouseover="hover" @mouseleave="unhover">
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
</style>
