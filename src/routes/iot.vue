<template>
  <div class="IotPage">
    <div class="MainBlock">
      <particlesbg class="ParticlesBG" />
      <div
        class="DescBox animate__animated animate__fadeInUp animate__delay-1s"
      >
        <div class="MainLabel">
          <p>Internet of Things</p>
          для любой сферы деятельности
        </div>
        <!-- <p class="IotName">IoT</p> -->
        <div class="IotContainer">
          <p class="IotDesc">
            Интернет вещей – это система взаимосвязанных вычислительных
            устройств, которые могут собирать и передавать данные по
            беспроводной сети без участия человека.
          </p>
          <p class="cleverDesc">
            «Умные дома окажут серьезное влияние на бизнес. И точно так же, как
            любая компания, которая блаженно игнорировала Интернет на рубеже
            веков, те, кто игнорирует Интернет вещей, рискуют остаться позади»,
            — Джаред Ньюман
          </p>
        </div>
      </div>
    </div>
    <HowWork />
    <RealIOT />
    <Integretion />
    <Iotprojects />
    <formContainer />
  </div>
</template>

<script>
import HowWork from "@/components/iotpage/howWork.vue";
import Integretion from "@/components/iotpage/integretion.vue";
import Iotprojects from "@/components/iotpage/iotprojects.vue";
import particlesbg from "@/components/iotpage/particlesbg.vue";
import RealIOT from "@/components/iotpage/RealIOT/real_project.vue";
import formContainer from "@/components/form.vue";

export default {
  components: {
    particlesbg,
    HowWork,
    RealIOT,
    Integretion,
    Iotprojects,
    formContainer,
  },
  name: "IOTPage",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body::-webkit-scrollbar {
  width: 0px; /* width of the entire scrollbar */
}

.IotPage {
  background-color: #fff;
}

.MainBlock {
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  .ParticlesBG {
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  .DescBox {
    color: white;

    background-color: rgba($color: #000000, $alpha: 0.7);
    border-radius: 50px;
    padding: 40px 40px 40px 40px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    position: relative;
    z-index: 2;

    p {
      margin: 0;
    }

    .MainLabel {
      font-size: 30px;
      font-weight: 200;
      margin-bottom: 20px;

      p {
        font-size: 50px;
        font-weight: 800;
      }
    }

    .IotName {
      font-size: 25px;
      font-weight: 800;
      margin-bottom: 20px;
    }

    .IotContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .IotDesc {
      width: 600px;
      font-weight: 400;
      font-size: 20px;
    }

    .cleverDesc {
      text-align: right;
      width: 400px;
      font-weight: 400;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 700px) {
    .DescBox {
      .MainLabel {
        p {
          font-size: 40px;
        }

        font-size: 20px;
      }

      .IotContainer {
        flex-direction: column;
        width: 300px;
      }

      .IotDesc {
        width: 300px;
        font-size: 16px;
      }

      .cleverDesc {
        display: none;
        width: 300px;
        font-size: 13px;
        font-weight: 200;
      }

      width: 280px;
      background-color: rgba($color: #000000, $alpha: 0.9);
    }
  }
}
</style>
