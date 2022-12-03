<template>
  <div class="iotContainer">
    <Particles
      id="iotbackground"
      class="iotbackground"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />

    <div class="projectContainer">
      <p class="projectLabel">Реализованные проекты IOT</p>
      <rubish />
      <rotation />
      <agro />
    </div>
  </div>
</template>

<script>
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "tsparticles-path-polygon";
import rubish from "./projects/rubish.vue";
import Rotation from "./projects/rotation.vue";
import Agro from "./projects/agro.vue";
export default {
  components: { rubish, Rotation, Agro },
  name: "IotProjects",
  data() {
    return {
      options: {
        background: {
          color: {
            value: "#000",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
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
};
</script>

<style lang="scss" scoped>
.projectContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  z-index: 2;

  .projectLabel {
    font-size: 60px;
    font-weight: 400;
    margin-bottom: 150px;
  }
}

.iotContainer {
  background-color: #000;
  color: #fff;
  position: relative;
}

@media screen and (max-width: 700px) {
  .projectContainer {
    width: 300px;

    .projectLabel {
      font-size: 35px;
      margin-bottom: 30px;
      width: 300px;
    }
  }

  .iotContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.iotbackground {
  width: 100%;
  height: 2300px;
  position: absolute;
  z-index: 1;
}
</style>
