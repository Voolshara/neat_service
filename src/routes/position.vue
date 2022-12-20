<template>
  <div class="SLP">
    <div class="mainBlock">
      <!-- <img
        v-if="isMobile()"
        class="backImg"
        src="@/assets/slp/background2.png"
        alt=""
      /> -->
      <Particles
        class="backImg"
        id="particlesbg"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="options"
      />

      <!-- <img v-else class="backImg" src="@/assets/slp/mainblock.png" alt="" /> -->
      <div class="text">
        <p class="animate__animated animate__fadeInUp">
          Отслеживать персонал – наш конёк
        </p>
      </div>
    </div>
    <div class="allBlocks">
      <div class="WhatisSLP">
        <div class="textSLP">
          <p class="name">Что такое система позиционирования?</p>
          <p class="desc">
            Система позиционирования - это механизм для определения положения
            объекта в пространстве. Существуют технологии для решения этой
            задачи, начиная от охвата по всему миру с точностью до метра и
            заканчивая охватом рабочего пространства с точностью до пары
            сантиметров.
          </p>
        </div>

        <div class="scheme">
          <div class="blockDesc">
            <div class="blockName">
              <div class="highlightBlock">Уменьшение травматизма</div>
            </div>
            <ul>
              <li>Контроль перемещения персонала</li>
              <li>
                Быстрый поиск пострадавших сотрудников и оказание первой помощи
              </li>
              <li>Предотвращения аварийных ситуаций с транспортом</li>
            </ul>
          </div>

          <div class="blockDesc additionalMargin">
            <div class="blockName">
              <p class="highlightBlock">Контроль подрядчиков</p>
            </div>
            <ul>
              <li>Контроль реального времени пребывания на объекте</li>
              <li>Контроль перемещения</li>
              <li>Оплата времени реально проведенных работ</li>
            </ul>
          </div>
        </div>
      </div>

      <Zone />
      <Examples />
    </div>
    <div class="form">
      <formContainer />
    </div>
  </div>
</template>

<script>
import Examples from "@/components/slp/examples.vue";
import Zone from "@/components/slp/zone.vue";
import formContainer from "@/components/form.vue";

import { loadFull } from "tsparticles";
import { loadPolygonPath } from "tsparticles-path-polygon";

export default {
  name: "PositionPage",
  components: { Zone, Examples, formContainer },
  data() {
    return {
      options: {
        background: {
          color: "#000",
        },
        fullScreen: {
          enable: false,
          zIndex: 2,
        },
        fps_limit: 60,
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
              enable: true,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5,
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: "",
        },
        retina_detect: true,
      },
    };
  },
  setup() {
    const particlesInit = async (engine) => {
      await loadFull(engine);
      await loadPolygonPath(engine);
    };

    const particlesLoaded = async () => {
      // console.log("Particles container loaded", container);
    };

    return { particlesLoaded, particlesInit };
  },
  methods: {
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
.additionalMargin {
  margin-left: 2vw;
}
.blockDesc {
  width: 18vw;
  max-width: 350px;
  font-weight: 200;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 0;

  padding: 30px;

  border-radius: 20px;

  border: 4px dashed rgba(227, 6, 19, 0.1);

  .highlightBlock {
    margin: 0;
    width: 77%;
    margin: 5px 0 5px 0;
    padding-left: 5px;
    background-color: rgba(227, 6, 19, 0.1);
  }

  @media screen and (max-width: 700px) {
    .highlightBlock {
      width: 50px;
    }
  }

  .blockName {
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 28px;

    width: 300px;
  }

  @media screen and (max-width: 700px) {
    .blockName {
      width: 100%;
    }
  }
}
.chacharacters {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  p {
    font-size: 40px;
    margin-bottom: 60px;
  }

  .containers {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80vw;
  }
}

.allBlocks {
  align-self: center;
  width: 80vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.WhatisSLP {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 100px;

  width: 85vw;

  .textSLP {
    .name {
      font-size: 2vw;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 15px;
      background-color: rgba(227, 6, 19, 0.15);
      width: 30vw;
      max-width: 500px;
    }

    .desc {
      padding-left: 20px;
      width: 28vw;
      max-width: 450px;
      font-size: 1.3vw;
      font-weight: 200;
    }

    @media screen and (max-width: 700px) {
      .name {
        width: 60vw;
        font-size: 2.4vh;
      }

      .desc {
        width: 58vw;
        font-size: 1.8vh;
      }
    }
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .scheme {
    // background-color: rgba(227, 6, 19, 0.05);
    border-radius: 40px;
    width: 40vw;

    display: flex;
    flex-direction: row;
  }
}

@media screen and (max-width: 700px) {
  .WhatisSLP {
    flex-direction: column;
    margin-top: 50px;

    .scheme {
      flex-direction: row;
      justify-content: center;
      width: 100vw;
    }
    .blockDesc {
      width: 34vw;
      font-size: 13px;
      padding: 10px;

      .highlightBlock {
        width: 130px;
        font-size: 18px;
      }

      ul {
        padding: 0;
        padding-left: 20px;
      }

      li {
        margin-bottom: 10px;
      }
    }
  }
}

.mainBlock {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .backImg {
    position: relative;
    z-index: 1;

    width: 100%;
    height: 100%;
  }

  .text {
    width: 10vw;
    height: 0vh;

    border: 40vw solid transparent;
    border-bottom: 85vh solid rgba($color: #fff, $alpha: 0.9);
    border-right: 100px;
    border-top: 0;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;

    p {
      position: absolute;
      z-index: 3;

      top: 45vh;
      margin: 0;

      font-size: 35px;
      width: 30vw;
      text-align: right;

      margin-right: 40px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 800px) {
    .text {
      border: 70vw solid transparent;

      border-bottom: 85vh solid rgba($color: #fff, $alpha: 0.9);
      border-right: 100px;
      border-top: 0;

      p {
        top: 65vh;
        font-size: 22px;
        margin-right: 40px;
        width: 50vw;
        text-align: left;
      }
    }
  }
}

.form {
  margin-top: 100px;
  width: 100%;
}

.SLP {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  // background-color: #f2f2f2;
  background-color: #fff;
}

@media screen and (max-width: 700px) {
  .SLP {
    margin-bottom: 30px;
  }

  .form {
    margin-top: 0px;
  }
}
</style>
