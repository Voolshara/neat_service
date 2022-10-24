<template>
  <div class="compData">
    <div v-for="(compelement, index) in projects" :key="index">
      <div v-if="activeIndexComp === index" class="competitionInfo">
        <div v-for="el in projects[index]" :key="el.id">
          <div class="competitionEl COELREVERS" v-if="el.id % 2 === 0">
            <div>
              <p class="CompLabel">
                {{ el.label }}
              </p>
              <p class="CompLabel-min">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident rerum a sapiente eos officia esse! Nemo provident
                maxime minus ipsum!
              </p>
            </div>
            <img class="CompImg" :src="el.src" alt="" />
          </div>
          <div class="competitionEl COEL" v-else>
            <div>
              <p class="CompLabel">
                {{ el.label }}
              </p>
              <p class="CompLabel-min">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident rerum a sapiente eos officia esse! Nemo provident
                maxime minus ipsum!
              </p>
            </div>
            <img class="CompImg" :src="el.src" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompositionElement",
  props: {
    activeIndexComp: Number,
  },
  data() {
    return {
      projects: [
        [
          {
            id: 0,
            label: "Система для маркировки товаров на складе",
            src: "/img/competitions/system_factory.jpg",
          },
          {
            id: 1,
            label: "Вспомогательный робот-спелеолог",
            src: "/img/competitions/system_factory.jpg",
          },
        ],

        [
          {
            id: 0,
            label:
              "Система бесперебойного питания загородного дома на базе альтернативных источников энергии",
            src: "/img/competitions/green_home.jpg",
          },
        ],

        [
          {
            id: 0,
            label: "Система контроля теплицы",
            src: "/img/competitions/green_garden.jpg",
          },
          {
            id: 1,
            label: "Desktop-приложение для управления беспилотным судном",
            src: "/img/competitions/sheep.png",
          },
        ],

        [
          {
            id: 0,
            label: "Аккумуляторы для электрических лодочных моторов",
            src: "/img/competitions/sheep_battery.jpg",
          },
          {
            id: 1,
            label: "Power bank с поддержкой выхода 220В",
            src: "/img/competitions/power_220.jpg",
          },
        ],

        [
          {
            id: 0,
            label:
              "Корпус и конструкционные части для проекта «Всевидящее око»",
            src: "/img/competitions/smth_sheet.jpg",
          },
          {
            id: 1,
            label: "Корпус для проекта «Wi-Fi репитер»",
            src: "/img/competitions/wifi.jpg",
          },
        ],

        [
          {
            id: 0,
            label: "Модули для системы Smart home",
            src: "/img/competitions/smart_house.jpg",
          },
          {
            id: 1,
            label: "Умный светильник-ночник с функцией будильник-рассвет",
            src: "/img/competitions/alarm.jpeg",
          },
        ],

        [
          {
            id: 0,
            label:
              "Машинное зрение по распознаванию и определению положения человека для проекта «Всевидящее око»",
            src: "/img/competitions/CV_people.png",
          },
          {
            id: 1,
            label:
              "Искусственный интеллект для игры в шахматы для «Умной» шахматной доски",
            src: "/img/competitions/chess_robot.jpg",
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.compData {
  padding-left: 5vw;
  width: 600px;
  height: 450px;

  display: flex;
  justify-content: center;
  align-items: center;

  .competitionEl {
    .CompImg {
      width: 200px;
      margin-right: 40px;
      margin-left: 40px;
    }

    .CompLabel {
      font-size: 20px;
      font-weight: 600;
      width: 400px;
    }

    .CompLabel-min {
      font-size: 15px;
      font-weight: 200;
      width: 400px;
    }

    margin-bottom: 20px;
  }

  .COELREVERS {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
  }

  .COEL {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .competitionInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}
</style>
