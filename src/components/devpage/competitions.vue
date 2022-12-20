<template>
  <div class="container">
    <p class="Name">Наши компетенции</p>
    <div class="swiperCompContainer">
      <swiper
        v-if="isMobile()"
        :direction="'horizontal'"
        :slidesPerView="1"
        :centeredSlides="true"
        :grabCursor="true"
        :spaceBetween="200"
        :pagination="false"
        :modules="modules"
        :autoplay="autoplay"
        class="CompSwiper"
      >
        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[0]">
            <img
              class="imgComp"
              src="@/assets/competition_block/robot.png"
              alt=""
            />
            <div>
              <p class="labelComp">Мехатроника и робототехника</p>
              <p class="descComp">
                Разработка роботов-манипуляторов и роботехнических систем
                специального назначения
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[1]">
            <img
              class="imgComp"
              src="@/assets/competition_block/green_energy.png"
              alt=""
            />
            <div>
              <p class="labelComp">Альтернативная энергетика</p>
              <p class="descComp">
                Разработка и установка энергетических систем, включающих
                альтернативные источники питания
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[2]">
            <img
              class="imgComp"
              src="@/assets/competition_block/programming.png"
              alt=""
            />
            <div>
              <p class="labelComp">Пользовательские интерфейсы</p>
              <p class="descComp">
                Windows, Mac, Android, IOS, Linux. Разработка ПО под разные
                операционные системы
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[3]">
            <img
              class="imgComp"
              src="@/assets/competition_block/battery.png"
              alt=""
            />
            <div>
              <p class="labelComp">Аккумуляторные системы</p>
              <p class="descComp">
                Проектирование и изготовление систем для запаса энергии и
                последующего её использования
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[4]">
            <img
              class="imgComp"
              src="@/assets/competition_block/3d_print.png"
              alt=""
            />
            <div>
              <p class="labelComp">3D печать</p>
              <p class="descComp">
                Моделирование, печать, постобработка изделия, покраска
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[5]">
            <img
              class="imgComp"
              src="@/assets/competition_block/iot.png"
              alt=""
            />
            <div>
              <p class="labelComp">IoT (интернет-вещей)</p>
              <p class="descComp">
                Разработка устройств на основе интернета-вещей
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[6]">
            <img
              class="imgComp"
              src="@/assets/competition_block/CV.png"
              alt=""
            />
            <div>
              <p class="labelComp">Машинное зрение и нейронные сети</p>
              <p class="descComp">
                Разработка систем машинного зрения и обучение нейронных сетей
              </p>
            </div>
          </div></swiper-slide
        >
      </swiper>

      <swiper
        v-else
        :direction="'vertical'"
        :slidesPerView="3"
        :centeredSlides="true"
        :grabCursor="true"
        :spaceBetween="50"
        :pagination="false"
        :modules="modules"
        :autoplay="autoplay"
        class="CompSwiper"
      >
        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[0]">
            <img
              class="imgComp"
              src="@/assets/competition_block/robot.png"
              alt=""
            />
            <div>
              <p class="labelComp">Мехатроника и робототехника</p>
              <p class="descComp">
                Разработка роботов-манипуляторов и роботехнических систем
                специального назначения
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[1]">
            <img
              class="imgComp"
              src="@/assets/competition_block/green_energy.png"
              alt=""
            />
            <div>
              <p class="labelComp">Альтернативная энергетика</p>
              <p class="descComp">
                Разработка и установка энергетических систем, включающих
                альтернативные источники питания
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[2]">
            <img
              class="imgComp"
              src="@/assets/competition_block/programming.png"
              alt=""
            />
            <div>
              <p class="labelComp">Пользовательские интерфейсы</p>
              <p class="descComp">
                Windows, Mac, Android, IOS, Linux. Разработка ПО под разные
                операционные системы
              </p>
            </div>
          </div></swiper-slide
        >titions.vue"; import Projects from "@/components/devpage/projects

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[3]">
            <img
              class="imgComp"
              src="@/assets/competition_block/battery.png"
              alt=""
            />
            <div>
              <p class="labelComp">Аккумуляторные системы</p>
              <p class="descComp">
                Проектирование и изготовление систем для запаса энергии и
                последующего её использования
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[4]">
            <img
              class="imgComp"
              src="@/assets/competition_block/3d_print.png"
              alt=""
            />
            <div>
              <p class="labelComp">3D печать</p>
              <p class="descComp">
                Моделирование, печать, постобработка изделия, покраска
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[5]">
            <img
              class="imgComp"
              src="@/assets/competition_block/iot.png"
              alt=""
            />
            <div>
              <p class="labelComp">IoT (интернет-вещей)</p>
              <p class="descComp">
                Разработка устройств на основе интернета-вещей
              </p>
            </div>
          </div></swiper-slide
        >

        <swiper-slide
          ><div :class="'oneCompetition ' + activeIndexClasses[6]">
            <img
              class="imgComp"
              src="@/assets/competition_block/CV.png"
              alt=""
            />
            <div>
              <p class="labelComp">Машинное зрение и нейронные сети</p>
              <p class="descComp">
                Разработка систем машинного зрения и обучение нейронных сетей
              </p>
            </div>
          </div></swiper-slide
        >
      </swiper>
      <CompElement
        @stop_scroll="stop_scroll_method"
        :activeIndexComp="activeIndexComp"
      />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import CompElement from "./compElement.vue";

export default {
  name: "CompetitionBlock",
  components: {
    Swiper,
    SwiperSlide,
    CompElement,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  data() {
    return {
      activeIndexClasses: ["oneCompetition-active", "", "", "", "", "", ""],
      activeIndexComp: 0,
      autoplay: { delay: 12000 },
      swiperDirection: "vertiical",
    };
  },
  methods: {
    change_dynamic_class(val) {
      if (val) {
        // this.DynamicClassLabel =
        //   "animate__animated animate__zoomIn animate__delay-800ms";
        // this.DynamicsClassText =
        //   "animate__animated animate__fadeInUp animate__delay-800ms";
      }
    },
    stop_scroll_method() {
      this.autoplay = { delay: 1000000 };
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
    change_el(val) {
      this.activeIndexComp = val.activeIndex;
      switch (val.activeIndex) {
        case 0:
          this.activeIndexClasses = [
            "oneCompetition-active",
            "",
            "",
            "",
            "",
            "",
            "",
          ];
          break;
        case 1:
          this.activeIndexClasses = [
            "",
            "oneCompetition-active",
            "",
            "",
            "",
            "",
            "",
          ];
          break;
        case 2:
          this.activeIndexClasses = [
            "",
            "",
            "oneCompetition-active",
            "",
            "",
            "",
            "",
          ];
          break;
        case 3:
          this.activeIndexClasses = [
            "",
            "",
            "",
            "oneCompetition-active",
            "",
            "",
            "",
          ];
          break;
        case 4:
          this.activeIndexClasses = [
            "",
            "",
            "",
            "",
            "oneCompetition-active",
            "",
            "",
          ];
          break;
        case 5:
          this.activeIndexClasses = [
            "",
            "",
            "",
            "",
            "",
            "oneCompetition-active",
            "",
          ];
          break;
        case 6:
          this.activeIndexClasses = [
            "",
            "",
            "",
            "",
            "",
            "",
            "oneCompetition-active",
          ];
          break;
      }
    },
  },
  mounted() {
    const swiper = document.querySelector(".CompSwiper").swiper;
    swiper.on("slideChange", this.change_el);
  },
};
</script>

<style lang="scss" scoped>
.CompSwiper {
  width: 400px;
  height: 55vh;

  position: relative;
  z-index: 2;

  border-right: 1px solid var(--color-red);
  padding-right: 70px;
}

.oneCompetition {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 400px;

  border: 1px solid rgba($color: #000000, $alpha: 0);

  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;

  border-radius: 30px;

  p {
    margin: 0;
  }

  .imgComp {
    height: 60px;
    padding-right: 30px;
  }

  .labelComp {
    font-size: 23px;
    margin-bottom: 7px;
  }

  .descComp {
    width: 300px;
    font-weight: 200;
  }
}

.oneCompetition-active {
  border: 1px solid var(--color-red);
}

.swiperCompContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.container {
  width: 100%;
  height: 100%;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .Name {
    font-size: 50px;
    font-size: 200;
    margin: 0;
    margin-bottom: 30px;
  }
}

@media screen and (min-height: 840px) {
  .container {
    .Name {
      margin-bottom: 50px;
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    justify-content: flex-start;
    .Name {
      font-size: 30px;
      font-size: 200;
      margin: 0;
      margin-top: 110px;
    }
  }
  .swiperCompContainer {
    flex-direction: column;
  }

  .CompSwiper {
    width: 320px;
    height: 136px;

    position: relative;
    z-index: 2;

    border-bottom: 1px solid var(--color-red);
    border-right: none;
    padding-bottom: 20px;
    padding-right: 0;

    display: flex;
    align-items: center;
  }

  .oneCompetition {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 0;

    width: 280px;

    border: 1px solid rgba($color: #000000, $alpha: 0);

    padding-bottom: 20px;
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;

    border-radius: 30px;

    p {
      margin: 0;
    }

    .imgComp {
      height: 50px;
      padding-right: 10px;
    }

    .labelComp {
      font-size: 23px;
      line-height: 22px;

      margin-bottom: 3px;
    }

    .descComp {
      width: 200px;
      font-size: 13px;
      line-height: 15px;
      font-weight: 200;
    }
  }

  .oneCompetition-active {
    // border-right: 1px solid var(--color-red);
    // border-left: 1px solid var(--color-red);
    border-right: 0;
    border-left: 0;
  }
}
</style>
