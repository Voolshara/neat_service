<template>
  <div class="container">
    <div class="main-block">
      <div class="label" @mouseover="zoneHover">
        <div class="text">
          Система
          <div class="highlightZone">зонального</div>
          позиционирования
        </div>
        <div class="imgBlock">
          <img :class="oneImg" src="@/assets/slp/radar.png" alt="" />
          <img :class="twoImg" src="@/assets/slp/radar.png" alt="" />
          <img :class="threeImg" src="@/assets/slp/radar.png" alt="" />
        </div>
      </div>

      <swiper
        class="SLPSwiper"
        :spaceBetween="300"
        :speed="1000"
        :direction="'vertical'"
        :slidesPerView="1"
        :mousewheel="true"
        :modules="modules"
      >
        <swiper-slide class="swiperEl">Slide 1</swiper-slide>
        <swiper-slide class="swiperEl">Slide 2</swiper-slide>
        <swiper-slide class="swiperEl">Slide 3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper";

export default {
  name: "SLPZone",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      oneImg: "deactivate",
      twoImg: "deactivate",
      threeImg: "deactivate",
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
.container {
  .main-block {
    width: 80vw;

    margin-top: 40px;
    margin-bottom: 40px;
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
