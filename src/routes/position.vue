<template>
  <div class="SLP">
    <div class="mainBlock">
      <img class="backImg" src="@/assets/slp/mainblock.png" alt="" />
      <div class="text animate__animated animate__fadeInRight">
        <p>Отслеживать персонал – наш конёк</p>
      </div>
    </div>
    <div class="allBlocks">
      <div class="WhatisSLP">
        <div
          class="textSLP"
          v-animate-onscroll="{ down: 'animated fadeInLeft' }"
          data-animate-onscroll-offset="-200"
        >
          <p class="name">Что такое система позиционирования?</p>
          <p class="desc">
            Система позиционирования - это механизм для определения положения
            объекта в пространстве. Существуют технологии для решения этой
            задачи, начиная от охвата по всему миру с точностью до метра и
            заканчивая охватом рабочего пространства с точностью до пары
            сантиметров.
          </p>
        </div>

        <div
          class="scheme"
          v-animate-onscroll="{ down: 'animated fadeInRight' }"
          data-animate-onscroll-offset="-200"
        >
          <div class="blockDesc">
            <div class="blockName">
              <p class="highlight">Уменьшение травматизма</p>
            </div>
            <ul>
              <li>Контроль перемещения персонала</li>
              <li>
                Быстрый поиск пострадавших сотрудников и оказание первой помощи
              </li>
              <li>Предотвращения аварийных ситуаций с транспортом</li>
            </ul>
          </div>

          <div class="blockDesc">
            <div class="blockName">
              <p class="highlight">Контроль подрядчиков</p>
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
  </div>
</template>

<script>
import Examples from "@/components/slp/examples.vue";
import Zone from "@/components/slp/zone.vue";

export default {
  name: "PositionPage",
  components: { Zone, Examples },
};
</script>

<style lang="scss" scoped>
.blockDesc {
  width: 350px;

  font-weight: 200;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 0;
  margin-left: 60px;
  padding: 30px;

  border-radius: 20px;

  border: 4px dashed rgba(227, 6, 19, 0.1);

  .highlight {
    margin: 0;
    width: 75%;
    margin: 5px 0 5px 0;
    padding-left: 5px;
    background-color: rgba(227, 6, 19, 0.1);
  }

  .blockName {
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 28px;

    width: 300px;
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

  width: 75vw;

  .textSLP {
    .name {
      font-size: 40px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 15px;
      background-color: rgba(227, 6, 19, 0.15);
      width: 500px;
    }

    .desc {
      padding-left: 20px;
      width: 450px;
      font-size: 20px;
      font-weight: 200;
    }

    display: flex;
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

    .one {
      position: relative;
      left: 3vw;
    }

    .two {
      position: relative;
      left: 13vw;
    }

    .three {
      position: relative;
      left: 23vw;
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
      width: 500px;
      text-align: right;

      margin-right: 40px;
      font-weight: 600;
    }
  }
}

.SLP {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  // background-color: #f2f2f2;
  background-color: #fff;
  margin-bottom: 200px;
}
</style>
