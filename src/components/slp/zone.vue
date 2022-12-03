<template>
  <div class="container">
    <div class="main-block" @mouseover="zoneHover">
      <div class="label">
        <div class="text">
          Система
          <div class="highlightZone">{{ nameBlock[activeIndex] }}</div>
          позиционирования
        </div>
        <div v-if="!isMobile()" class="imgBlock">
          <img :class="oneImg" src="@/assets/slp/radar.png" alt="" />
          <img :class="twoImg" src="@/assets/slp/radar.png" alt="" />
          <img :class="threeImg" src="@/assets/slp/radar.png" alt="" />
        </div>
      </div>

      <swiper
        class="SLPSwiper"
        :spaceBetween="300"
        :speed="1000"
        :direction="direction"
        :slidesPerView="1"
        :mousewheel="true"
        :modules="modules"
      >
        <div
          v-if="isMobile() && isNotMoved"
          class="Arrow animate__animated animate__pulse animate__infinite"
        >
          >
        </div>
        <!-- _________________________________________________1_______________________________ -->

        <swiper-slide class="swiperEl"
          ><Characters
            :label="'Система зонального позиционирования'"
            :system="[
              'Отслеживать текущее местоположение персонала на плане объекта',
              'Отслеживать активное время в движении',
              'Контролировать неподвижность сотрудника с меткой',
              'Создавать зоны для сотрудников',
              'Определять падение',
              'Контролировать наличие защитной экипировки',
            ]"
            :chacharacters="[
              'Автономность до 3-х лет',
              'Метка в виде карты может иметь функциональность Wiegand карты',
            ]"
          />
          <div class="additionalContainer">
            <Description
              :type="'зонального'"
              :text="'Определения местоположения с помощью тегов и точек доступа, фиксирующих присутствие тега'"
            />
            <advantages :type="true" :text="'Автономность'" />
            <advantages :type="true" :text="'Использование в помещениях'" />
            <advantages :type="false" :text="'Точность'" />
            <advantages
              :type="false"
              :text="'Невозможность использования на открытом воздухе'"
            />
          </div>
        </swiper-slide>
        <!-- _________________________________________________2_______________________________ -->
        <swiper-slide class="swiperEl"
          ><Characters
            :label="'Система глобального позиционирования'"
            :system="[
              'Отслеживать текущее местоположение персонала на карте',
              'Отслеживать сигнал от метки при нажатии тревожной кнопки',
              'Контролировать сон на рабочем месте или полную неподвижность сотрудника с меткой',
              'Определение падения',
              'Строить отчеты по маршрутам за любой период',
            ]"
            :chacharacters="[
              'Точность 5-12 метров',
              'Автономность до 7 дней',
              'Возможность питания от сторонних источников питания',
            ]"
          />
          <div class="additionalContainer">
            <Description
              :type="'глобального'"
              :text="'Определения местоположения с помощью спутников GPS, ГЛОНАСС, Galileo, Compass'"
            />
            <advantages
              :type="true"
              :text="'Использование на открытом воздухе'"
            />
            <advantages
              :type="false"
              :text="'Практически невозможно использовать в помещениях'"
            />
            <advantages :type="false" :text="'Автономность'" />
            <advantages :type="false" :text="'Точность'" />
          </div>
        </swiper-slide>
        <!-- _________________________________________________3_______________________________ -->

        <swiper-slide class="swiperEl"
          ><Characters
            :label="'Система локального позиционирования'"
            :system="[
              'Отслеживать текущее местоположение персонала на плане объекта',
              'Отслеживать сигнал от метки при нажатии тревожной кнопки',
              'Контролировать сон на рабочем месте или полную неподвижность сотрудника с меткой',
              'Определять падение',
              'Строить отчеты по маршрутам за любой период',
            ]"
            :chacharacters="[
              'Точность до 15 см',
              'Автономность до 7 дней',
              'Возможность питания от сторонних источников',
            ]"
          />
          <div class="additionalContainer">
            <Description
              :type="'локального'"
              :text="'Определения местоположения с помощью тегов и точек доступа, фиксирующих присутствие тега'"
            />
            <advantages :type="true" :text="'Использование в помещениях'" />
            <advantages :type="true" :text="'Точность'" />
            <advantages
              :type="true"
              :text="'Использование на небольших открытых пространствахность'"
            />
            <advantages :type="false" :text="'Автономность'" />
          </div>
        </swiper-slide>
      </swiper>

      <!-- <div class="chacharacters">
        <p>Характеристики систем позиционирования</p>
        <div class="containers">
          

          <Characters
            :label="'Система глобального позиционирования'"
            :system="[
              'Отслеживать текущее местоположение персонала на карте',
              'Отслеживать сигнал от метки при нажатии тревожной кнопки',
              'Контролировать сон на рабочем месте или полную неподвижность сотрудника с меткой',
              'Определение падения',
              'Строить отчеты по маршрутам за любой период',
            ]"
            :chacharacters="[
              'Точность 5-12 метров',
              'Автономность до 7 дней',
              'Возможность питания от сторонних источников питания',
            ]"
          />

          <Characters
            :label="'Система локального позиционирования'"
            :system="[
              'Отслеживать текущее местоположение персонала на плане объекта',
              'Отслеживать сигнал от метки при нажатии тревожной кнопки',
              'Контролировать сон на рабочем месте или полную неподвижность сотрудника с меткой',
              'Определять падение',
              'Строить отчеты по маршрутам за любой период',
            ]"
            :chacharacters="[
              'Точность до 15 см',
              'Автономность до 7 дней',
              'Возможность питания от сторонних источников',
            ]"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper";
import Characters from "@/components/slp/characters.vue";
import Description from "@/components/slp/descripition.vue";
import Advantages from "@/components/slp/advantages.vue";

export default {
  name: "SLPZone",
  components: {
    Swiper,
    SwiperSlide,
    Characters,
    Description,
    Advantages,
  },
  data() {
    return {
      nameBlock: ["зонального", "глобального", "локального"],
      activeIndex: 0,
      oneImg: "deactivate",
      twoImg: "deactivate",
      threeImg: "deactivate",
      direction: "vertical",
      isNotMoved: true,
    };
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
  },
  methods: {
    zoneHover() {
      this.oneImg = "animate__animated animate__fadeInUp animate__fast";
      this.twoImg = "animate__animated animate__fadeInUp animate__slow";
      this.threeImg = "animate__animated animate__fadeInUp animate__slower";
    },
    changeBlock(val) {
      this.activeIndex = val.activeIndex;
      this.isNotMoved = false;
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

  beforeMount() {
    if (this.isMobile()) this.direction = "horizontal";
  },
  mounted() {
    const swiper = document.querySelector(".SLPSwiper").swiper;
    swiper.on("slideChange", this.changeBlock);
  },
};
</script>

<style lang="scss" scoped>
.deactivate {
  display: none;
}

.active {
  display: block;
}

.block {
  width: 40px;
  height: 40px;
}

.SLPSwiper {
  margin-top: 40px;
  margin-bottom: 40px;

  height: 700px;

  .swiperEl {
    background-color: #fff;
    border-radius: 50px;

    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    flex-direction: row;

    .additionalContainer {
      margin-top: 70px;
    }

    @media screen and (max-width: 700px) {
      .additionalContainer {
        margin-top: 0px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .swiperEl {
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
  }
}

@media screen and (max-width: 700px) {
  .SLPSwiper {
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .Arrow {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 2px;
    font-size: 100px;
    line-height: 200px;
    height: 200px;

    color: rgba(227, 6, 19, 0.3);
  }
}

.label {
  font-size: 25px;
  padding: 30px;
  border-radius: 50px;
  height: 20px;
  background-color: #fff;
  align-self: flex-start;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .highlightZone {
      border: rgba(227, 6, 19, 0.15) solid 3px;
      padding: 5px 20px 5px 20px;
      border-radius: 20px;
    }
  }

  @media screen and (max-width: 700px) {
    .text {
      width: 100%;
      flex-direction: column;
    }
  }

  img {
    width: 40px;
    margin-left: 20px;
  }

  .imgBlock {
    width: 220px;
    height: 40px;
    border-left: 3px dashed rgba(227, 6, 19, 0.15);
    margin-left: 20px;
  }
}

@media screen and (max-width: 700px) {
  .label {
    height: 60px;
  }
}

.container {
  .main-block {
    width: 80vw;

    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 700px) {
    .main-block {
      width: 90vw;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  background-color: rgba(227, 6, 19, 0.15);
  width: 99vw;
}
</style>
