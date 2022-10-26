<template>
  <div>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :speed="600"
      :parallax="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="isUseNavigation"
      :modules="modules"
      autoplay
      class="mySwiperParalax"
    >
      <div class="parallax-bg" data-swiper-parallax="-23%"></div>
      <swiper-slide
        v-for="el in projects"
        :key="el.id"
        class="swiper-element-container"
      >
        <div class="swiper-element">
          <div class="title">
            <a class="word-prj">Проект:</a>
            {{ "" + el.label }}
          </div>
          <div class="subtitle">{{ el.desc }}</div>
          <div class="text">
            <p class="text-label">Технические характеристики:</p>
            <div class="tech">
              <div v-for="techEl in el.tech" :key="techEl.id">
                <div class="tech-el">
                  <img
                    class="tech-img"
                    src="@/assets/check-mark-white.png"
                    alt=""
                  />
                  <p class="tech-label">{{ techEl.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img class="img-prj" :src="el.src" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default {
  name: "BlockProjects",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isUseNavigation: true,
      projects: [
        {
          id: 0,
          label: "Беспилотное судно для очистки поверхности водоёмов от мусора",
          desc: "Нашей командой был разработан полнофункциональный прототип беспилотного судна для очистки поверхности водоёмов от мусора. Судно можно эксплуатировать на озерах, реках, водохранилищах, прудах и т.д. На борту судна имеется система машинного зрения для определения наличия мусора перед беспилотником",
          src: "/img/sheep-prj.jpg",
          tech: [
            { id: 0, src: "", label: "Полная автономность" },
            {
              id: 1,
              src: "",
              label: "Батареи хватает на 8 часов беспрерывной работы",
            },
            { id: 2, src: "", label: "Дальность связи до 3 км" },
            { id: 3, src: "", label: "Машинное зрение" },
            { id: 4, src: "", label: "Объём мусорного отсека 100л" },
          ],
        },

        {
          id: 1,
          label: "Система информирования септика",
          desc: "Нашей командой была разработана система оповещения для септика. При изменение состояние каких-либо узлов септика на смартфон приходит сообщение. Так же имеется возможность принудительно запросить состояние всех узлов в данный момент",
          src: "/img/septick_info.png",
          tech: [
            { id: 0, src: "", label: "Доступ из любой точки мира" },
            {
              id: 1,
              src: "",
              label: "Собственный телеграмм-бот",
            },
            { id: 2, src: "", label: "Работа с различными органами септика" },
            { id: 3, src: "", label: "Низкая стоимость" },
          ],
        },

        {
          id: 2,
          label: "Контроллер для светодиодных костюмов",
          desc: "Нашей компанией был разработан контроллер для светодиодных костюмов применяемых в световых шоу. Контроллер позволяет дистанционно с помощью ПК управлять костюмами",
          src: "/img/lcd-prj.png",
          tech: [
            { id: 0, src: "", label: "Поддержка системой до 255 костюмов" },
            {
              id: 1,
              src: "",
              label: "Радиус управления до 100 метров",
            },
            { id: 2, src: "", label: "Управление разными типами костюмов" },
          ],
        },

        {
          id: 3,
          label: "Всевидящее око",
          desc: "Устройство с помощью датчиков движения, лидара и машинного зрения следит за человеком находящимся в определённой области помещения. Для изготовления сферических частей применялась технология 3D печати. Для движения век установлены сервопривода, око имеет возможность вращаться вокруг своей оси",
          src: "/img/eye-prj.png",
          tech: [
            { id: 0, src: "", label: "Движение веками" },
            {
              id: 1,
              src: "",
              label: "Контроль за положением с помощью лидара",
            },
            {
              id: 2,
              src: "",
              label: "Вращение вокруг своей оси на 360  градусов",
            },
            {
              id: 3,
              src: "",
              label: "Машинное зрение",
            },
          ],
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    };
  },
  beforeMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      this.isUseNavigation = false;
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
  },
};
</script>

<style lang="scss" scoped>
.main-text {
  color: white;
  font-size: 50px;
  font-weight: 200;
}

.mySwiperParalax {
  height: 100vh;
  width: 100vw;
}

.parallax-bg {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;

  background-image: url("@/assets/paralax_bg.jpg");
}

.swiper-element-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  color: white;
  background-color: rgba(0, 0, 0, 0.75);
}

.img-prj {
  width: 600px;
  margin-left: 70px;
}

.swiper-element {
  .word-prj {
    font-weight: 200;
  }
  .title {
    margin-bottom: 10px;
    font-size: 50px;
  }

  .subtitle {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 40px;
  }

  .text-label {
    font-weight: 400;
    font-size: 30px;
  }

  .tech {
    display: grid;
    grid-template-columns: 350px 350px;

    .tech-img {
      width: 30px;
      height: 30px;

      margin-right: 30px;
    }

    .tech-el {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-right: 40px;
      margin-bottom: 20px;
    }
    p {
      margin: 0;
    }
  }

  margin-left: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 950px;
}

@media screen and (max-width: 1500px) {
  .img-prj {
    width: 400px;
    margin-left: 30px;
  }
  .swiper-element {
    .word-prj {
      font-weight: 200;
    }
    .title {
      margin-bottom: 10px;
      font-size: 33px;
    }

    .subtitle {
      font-weight: 400;
      font-size: 17px;
      margin-bottom: 10px;
    }

    .text-label {
      font-weight: 400;
      font-size: 30px;
    }

    .tech {
      display: grid;
      grid-template-columns: 350px 350px;

      .tech-img {
        width: 30px;
        height: 30px;

        margin-right: 30px;
      }

      .tech-el {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-right: 40px;
        margin-bottom: 20px;
      }
      p {
        margin: 0;
      }
    }

    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 650px;
  }
}

@media screen and (max-width: 768px) {
  .swiper-element-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    color: white;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .img-prj {
    width: 250px;
    margin-left: 0;
  }

  .swiper-element {
    .word-prj {
      font-weight: 200;
    }
    .title {
      margin-bottom: 5px;
      font-size: 20px;
    }

    .subtitle {
      font-weight: 400;
      font-size: 10px;
      margin-bottom: 5px;
    }

    .text-label {
      font-weight: 400;
      font-size: 15px;
      margin: 3px;
    }

    .tech {
      display: flex;
      flex-direction: column;

      .tech-img {
        width: 15px;
        height: 15px;

        margin-right: 10px;
      }

      .tech-el {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-right: 40px;
        margin-bottom: 10px;
      }

      p {
        font-size: 10px;
        margin: 0;
      }
    }

    margin-left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 320px;
    margin-top: 110px;
  }

  @media screen and (min-height: 750px) {
    .swiper-element {
      .title {
        margin-bottom: 7px;
        font-size: 23px;
      }

      .subtitle {
        font-size: 12px;
      }

      .text-label {
        font-size: 18px;
        margin: 7px;
      }

      .tech {
        .tech-img {
          width: 15px;
          height: 15px;

          margin-right: 10px;
        }

        p {
          font-size: 15px;
          margin: 2px;
        }
      }
    }
  }
}
</style>
