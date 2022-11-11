<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="options"
  />
</template>

<script>
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "tsparticles-path-polygon";
export default {
  name: "ParticlesBG",
  data() {
    return {
      options: {
        particles: {
          color: {
            value: "#FF0000",
            animation: {
              enable: false,
              speed: 2,
            },
          },
          move: {
            attract: {
              enable: false,
              distance: 30,
              rotate: {
                x: 0,
                y: 0,
              },
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0,
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 40,
                angle: 0,
              },
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 50,
              enable: true,
            },
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        background: {
          color: "#fff",
        },
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
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
