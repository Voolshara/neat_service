<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="100"
    :speed="600"
    :mousewheel="{
      thresholdTime: 1000,
    }"
    :pagination="{
      enabled: false,
      clickable: true,
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><MainVideo @press="press_button" /></swiper-slide>
    <!-- <swiper-slide><Description ref="SecondMenu" /></swiper-slide> -->

    <swiper-slide>
      <AboutBlock ref="ThirdMenu" />
    </swiper-slide>
    <swiper-slide><Competitions ref="FourthMenu" /></swiper-slide>
    <swiper-slide><Projects ref="FifthMenu" /></swiper-slide>
    <swiper-slide
      ><formContainer ref="SixhMenu" style="margin-top: 100px"
    /></swiper-slide>
    <swiper-slide><ContactUs ref="SevenMenu" /></swiper-slide>
  </swiper>
</template>

<script>
import MainVideo from "@/components/devpage/videobox.vue";
import AboutBlock from "@/components/devpage/aboutblock.vue";
// import Description from "@/components/mainpage/description.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import Competitions from "@/components/devpage/competitions.vue";
import Projects from "@/components/devpage/projects.vue";
import ContactUs from "@/components/devpage/contactUs.vue";
import formContainer from "@/components/form.vue";

export default {
  name: "DevPage",
  data() {
    return {
      active_index: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    MainVideo,
    AboutBlock,
    // Description,
    Competitions,
    Projects,
    ContactUs,
    formContainer,
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
  },
  methods: {
    press_button() {
      const swiper = document.querySelector(".swiper").swiper;
      swiper.slideTo(4, 1000);
    },
    change_menu(val) {
      let ActiveIndex = val.activeIndex;
      switch (ActiveIndex) {
        case 0:
          this.$store.commit("SetBlackNav");
          break;
        // case 1:
        //   this.$store.commit("SetBlackNav");
        //   break;
        case 1:
          this.$store.commit("SetWhiteNav");
          break;
        case 2:
          this.$store.commit("SetWhiteNav");
          break;
        case 3:
          this.$store.commit("SetBlackNav");
          break;
      }
      // this.$refs.SecondMenu.change_dynamic_class(ActiveIndex === 1);
      this.$refs.ThirdMenu.change_dynamic_class(ActiveIndex === 1);
      this.$refs.FourthMenu.change_dynamic_class(ActiveIndex === 2);
      this.$refs.FifthMenu.change_dynamic_class(ActiveIndex === 3);
      // this.$refs.SixMenu.change_dynamic_class(ActiveIndex === 4);
      this.$refs.SevenMenu.change_dynamic_class(ActiveIndex === 5);
    },
  },
  mounted() {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.on("slideChange", this.change_menu);
  },
};
</script>

<style>
.mySwiper {
  height: 100vh;
  width: 100vw;
  background: black;
  position: relative;
  z-index: 1;
}

.swiper-pagination-bullet {
  background: white;
}

.swiper-pagination-bullet-active {
  background: white;
}
</style>
