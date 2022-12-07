<template>
  <div class="compData">
    <div v-for="(compelement, index) in projects" :key="index">
      <div v-if="activeIndexComp === index" class="competitionInfo">
        <div v-for="el in projects[index]" :key="el.id">
          <div v-if="isMobile()" class="mobileBlock">
            <div v-on:click="open_down(el.id)" class="BLockElement">
              <div class="topLabel">
                <p class="CompLabel">
                  {{ el.label }}
                </p>

                <img class="CompImg" :src="el.src" alt="" />
              </div>

              <p
                v-if="projects[activeIndexComp][el.id]['is_active']"
                class="CompLabel-min"
              >
                {{ el.text }}
              </p>
              <a>﹀</a>
            </div>
          </div>
          <div v-else>
            <div class="competitionEl COELREVERS" v-if="el.id % 2 === 0">
              <div>
                <p class="CompLabel">
                  {{ el.label }}
                </p>
                <div>
                  <p class="CompLabel-min">
                    {{ el.text }}
                  </p>
                </div>
              </div>
              <img class="CompImg" :src="el.src" alt="" />
            </div>
            <div class="competitionEl COEL" v-else>
              <div>
                <p class="CompLabel">
                  {{ el.label }}
                </p>
                <div>
                  <p class="CompLabel-min">
                    {{ el.text }}
                  </p>
                </div>
              </div>
              <img class="CompImg" :src="el.src" alt="" />
            </div>
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
  methods: {
    open_down(ind) {
      if (this.projects[this.activeIndexComp][ind]["is_active"])
        this.projects[this.activeIndexComp][ind]["is_active"] = false;
      else {
        for (let i = 0; i < this.projects[this.activeIndexComp].length; i++) {
          if (i === ind) {
            this.projects[this.activeIndexComp][i]["is_active"] = true;
          } else {
            this.projects[this.activeIndexComp][i]["is_active"] = false;
          }
        }
      }
      this.$emit("stop_scroll");
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

  data() {
    return {
      flag_on_dropdonw: [false, false, false, false, false, false],
      projects: [
        [
          {
            id: 0,
            label: "Система для маркировки товаров на складе",
            src: "/img/competitions/system_factory.jpg",
            text: "Разработан полнофункциональный прототип устройства по маркировки товаров на складе",
            is_active: false,
          },
          {
            id: 1,
            label: "Вспомогательный робот-спелеолог",
            src: "/img/competitions/system_factory.jpg",
            text: "Робот помогает спелеологам получить доступ в труднодоступные места, на борту имеется камера",
            is_active: false,
          },
        ],

        [
          {
            id: 0,
            label:
              "Система бесперебойного питания загородного дома на базе альтернативных источников энергии",
            src: "/img/competitions/green_home.jpg",
            text: "Данная система позволяет обеспечивать дом электричеством при её отключении, а так же позволяет экономить денежные средства на оплату электроэнергии",
            is_active: false,
          },
        ],

        [
          {
            id: 0,
            label: "Система контроля теплицы",
            src: "/img/competitions/green_garden.jpg",
            text: "Данная система позволяет отслеживать температуру и влажность в теплицах, а так же управлять освещением в ней",
            is_active: false,
          },
          {
            id: 1,
            label: "Desktop-приложение для управления беспилотным судном",
            src: "/img/competitions/sheep.png",
            text: "Данное приложение позволяет осуществлять управление беспилотным судном, а так же выводит все данные необходимые для оценки состояния судна в реальном времени",
            is_active: false,
          },
        ],

        [
          {
            id: 0,
            label: "Power bank с поддержкой выхода 220В",
            src: "/img/competitions/power_220.jpg",
            text: "Данное устройство позволяет заряжать устройства в походных условиях, а также использовать устройства работающие от 220В в дали от розеток",
            is_active: false,
          },
        ],

        [
          {
            id: 0,
            label:
              "Корпус и конструкционные части для проекта «Всевидящее око»",
            src: "/img/competitions/smth_sheet.jpg",
            text: "С помощью технологии 3D печати нами изготовлены конструкционные части и корпус для проекта «Всевидящее око»",
            is_active: false,
          },
          {
            id: 1,
            label: "Корпус для проекта «Wi-Fi репитер»",
            src: "/img/competitions/wifi.jpg",
            text: "С помощью технологии 3D печати нами изготовлены и корпус для проекта «Wi-Fi репитер»",
            is_active: false,
          },
        ],

        [
          {
            id: 0,
            label: "Модули для системы Smart home",
            src: "/img/competitions/smart_house.jpg",
            text: "Модули позволяют управлять полезными нагрузками в доме, обеспечивать безопасность жилища, а так же контролировать климат в комнатах",
            is_active: false,
          },
        ],

        [
          {
            id: 0,
            label:
              "Машинное зрение по распознаванию и определению положения человека для проекта «Всевидящее око»",
            src: "/img/competitions/CV_people.png",
            text: "Данная разработка позволяет определять точное положение человека в пространстве, а так же отслеживать его передвижение",
            is_active: false,
          },
          {
            id: 1,
            label:
              "Искусственный интеллект для игры в шахматы для «Умной» шахматной доски",
            src: "/img/competitions/chess_robot.jpg",
            text: "Данный ИИ позволяет «Умной» шахматной доске самостоятельно играть против людей различных уровней подготовки, уровень сложности игры настраивается",
            is_active: false,
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

.mobileBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  .BLockElement {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .topLabel {
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 600px) {
  .compData {
    padding-left: 1vw;
    width: 320px;
    height: 450px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .CompImg {
    width: 70px;
    margin-right: 10px;
    margin-left: 0;
  }

  .CompLabel {
    font-size: 15px;
    font-weight: 600;
    width: 220px;
    margin-bottom: 5px;
  }

  .CompLabel-min {
    font-size: 10px;
    font-weight: 200;
    width: 180px;
    margin: 0;
  }
}

@media screen and (min-height: 700px) {
  .CompImg {
    width: 90px;
    margin-right: 10px;
    margin-left: 0;
  }

  .CompLabel {
    font-size: 18px;
    font-weight: 600;
    width: 220px;
    margin-bottom: 5px;
    margin-left: 10px;
    padding-bottom: 5px;
    border-bottom: dotted 3px var(--color-red);
  }

  .CompLabel-min {
    font-size: 15px;
    font-weight: 200;
    width: 340px;
    margin: 0;
    text-align: justify;
    margin-bottom: 6px;
  }
}

// @media screen and (max-width: 600px) {
//   .compData {
//     padding-left: 1vw;
//     width: 320px;
//     height: 450px;

//     display: flex;
//     justify-content: center;
//     align-items: flex-start;

//     .competitionEl {
//       .mobileBlock {
//         .topLabel {
//           .CompImg {
//             width: 70px;
//             margin-right: 10px;
//             margin-left: 0;
//           }

//           .CompLabel {
//             font-size: 15px;
//             font-weight: 600;
//             width: 220px;
//             margin-bottom: 5px;
//           }

//           .CompLabel-min {
//             font-size: 10px;
//             font-weight: 200;
//             width: 220px;
//             margin: 0;
//           }

//           margin-bottom: 5px;
//         }
//       }
//     }
//     .COELREVERS {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: row-reverse;
//     }

//     .COEL {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: row;
//     }

//     .competitionInfo {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-content: center;
//     }
//   }

//   @media screen and (min-height: 700px) {
//     .compData {
//       .competitionEl {
//         .mobileBlock {
//           .topLabel {
//             display: flex;
//             flex-direction: row;

//             .CompImg {
//               width: 70px;
//               margin-right: 10px;
//               margin-left: 0;
//             }

//             .CompLabel {
//               font-size: 18px;
//               font-weight: 600;
//               width: 220px;
//               margin-bottom: 5px;
//             }

//             .CompLabel-min {
//               font-size: 12px;
//               font-weight: 200;
//               width: 220px;
//               margin: 0;
//             }

//             margin-bottom: 20px;
//           }
//         }
//       }
//     }
//   }
// }
</style>
