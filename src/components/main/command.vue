<template>
  <div class="comContainer">
    <p class="label">Команда NEAT</p>

    <swiper
      class="MainPageSwiper"
      :spaceBetween="300"
      :speed="600"
      :direction="'horizontal'"
      :slidesPerView="1"
      :modules="modules"
      v-if="isMobile()"
    >
      <swiper-slide
        ><people
          :type="'bottom'"
          :img="'/img/mainpage/artem.png'"
          :name="'Подколзин Артём'"
          :desc="'Директор, инженер-робототехник'"
          :nums="[
            ['5', 'лет опыта'],
            ['7', 'крупных проектов'],
          ]"
        />
      </swiper-slide>
      <swiper-slide>
        <people
          :type="'bottom'"
          :img="'/img/mainpage/evgeniy.png'"
          :name="'Ган Евгений'"
          :desc="'Старший инженер-конструктор'"
          :nums="[
            ['5', 'лет опыта'],
            ['15+ ', 'проектов реализовано'],
          ]"
        />
      </swiper-slide>

      <swiper-slide>
        <people
          :type="'bottom'"
          :img="'/img/mainpage/ilya.png'"
          :name="'Даниленко Илья'"
          :desc="'Специалист по работе с Robot Operating System'"
          :nums="[['20+', 'реализованных проектов']]"
      /></swiper-slide>

      <swiper-slide
        ><people
          :type="'bottom'"
          :img="'/img/mainpage/nikita.png'"
          :name="'Загороднев Никита'"
          :desc="'Специалист по Android приложениям'"
          :nums="[
            ['3', 'года опыта'],
            ['13+', 'реализованных проектов'],
          ]"
      /></swiper-slide>

      <swiper-slide
        ><people
          :type="'bottom'"
          :img="'/img/mainpage/robert.png'"
          :name="'Роберт Стрыжак'"
          :desc="'Инженер-конструктор'"
          :nums="[
            ['3', 'года опыта'],
            ['8+', 'проектов реализовано'],
          ]"
      /></swiper-slide>

      <swiper-slide
        ><people
          :type="'bottom'"
          :img="'/img/mainpage/mikhail.png'"
          :name="'Никитин Михаил'"
          :desc="'Специалист по нейронным сетям и машинному обучению'"
          :nums="[
            ['2', 'года опыта'],
            ['7+', 'реализованных проектов'],
          ]"
      /></swiper-slide>

      <swiper-slide
        ><people
          :type="'bottom'"
          :img="'/img/mainpage/rinat.jpg'"
          :name="'Ринат Халиулов'"
          :desc="'Инженер-электронщик'"
          :nums="[
            ['4', 'года опыта'],
            ['25+', 'собранных устройств'],
          ]"
      /></swiper-slide>
    </swiper>
    <div v-else>
      <div class="commandBlock">
        <people
          :type="'bottom'"
          :img="'/img/mainpage/artem.png'"
          :name="'Подколзин Артём'"
          :desc="'Директор, инженер-робототехник'"
          :nums="[
            ['5', 'лет опыта'],
            ['7', 'крупных проектов'],
          ]"
        />

        <people
          :type="'bottom'"
          :img="'/img/mainpage/evgeniy.png'"
          :name="'Ган Евгений'"
          :desc="'Старший инженер-конструктор'"
          :nums="[
            ['5', 'лет опыта'],
            ['15+ ', 'проектов реализовано'],
          ]"
        />

        <people
          :type="'bottom'"
          :img="'/img/mainpage/ilya.png'"
          :name="'Даниленко Илья'"
          :desc="'Специалист по работе с Robot Operating System'"
          :nums="[['20+', 'реализованных проектов']]"
        />
      </div>

      <div class="commandBlock">
        <people
          :type="'bottom'"
          :img="'/img/mainpage/nikita.png'"
          :name="'Загороднев Никита'"
          :desc="'Специалист по Android приложениям'"
          :nums="[
            ['3', 'года опыта'],
            ['13+', 'реализованных проектов'],
          ]"
        />

        <people
          :type="'bottom'"
          :img="'/img/mainpage/robert.png'"
          :name="'Роберт Стрыжак'"
          :desc="'Инженер-конструктор'"
          :nums="[
            ['3', 'года опыта'],
            ['8+', 'проектов реализовано'],
          ]"
        />

        <people
          :type="'bottom'"
          :img="'/img/mainpage/mikhail.png'"
          :name="'Никитин Михаил'"
          :desc="'Специалист по нейронным сетям и машинному обучению'"
          :nums="[
            ['2', 'года опыта'],
            ['7+', 'реализованных проектов'],
          ]"
        />

        <people
          :type="'bottom'"
          :img="'/img/mainpage/rinat.jpg'"
          :name="'Ринат Халиулов'"
          :desc="'Инженер-электронщик'"
          :nums="[
            ['4', 'года опыта'],
            ['25+', 'собранных устройств'],
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import people from "./people.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper";
export default {
  components: { people, Swiper, SwiperSlide },
  name: "commandBlock",
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
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
.label {
  font-size: 40px;
  color: white;
  margin-bottom: 150px;
  margin-left: 150px;
}
.commandBlock {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 50px;
  width: 80vw;
  min-width: 1300px;
}

@media screen and (max-width: 768px) {
  .MainPageSwiper {
    width: 305px;
    height: 720px;
  }
  .label {
    margin-top: 70px;
    margin-bottom: 50px;
    margin-left: 0;
  }
  .commandBlock {
    flex-direction: column;
    min-width: 100%;
    align-items: center;
  }
}
</style>
