<template>
  <div class="container">
    <div class="exampleName">Сферы применения</div>

    <div class="examplePart">
      <div class="dataContainer">
        <img class="exampleImg" src="@/assets/slp/factory.png" alt="" />

        <div
          class="data left"
          v-animate-onscroll="{ down: 'animated fadeInLeft' }"
          data-animate-onscroll-offset="-200"
        >
          <p class="name">ПРОИЗВОДСТВО</p>
          <ul>
            <li class="exampleBlock">Повышение производительности труда</li>
            <li class="exampleBlock">Уменьшение травматизма</li>
            <li class="exampleBlock">Учет рабочего времени</li>
          </ul>
        </div>
      </div>

      <div class="dataContainer">
        <div
          class="data right"
          v-animate-onscroll="{ down: 'animated fadeInRight' }"
          data-animate-onscroll-offset="-200"
        >
          <p class="name nameRight">ТРАНСПОРТ</p>
          <ul class="rightdote">
            <li class="exampleBlock">Предотвращение столкновений</li>
            <li class="exampleBlock">
              Контроль разгрузочно/погрузочных мероприятий
            </li>
            <li class="exampleBlock">Анализ инцидентов</li>
          </ul>
        </div>

        <img class="exampleImg" src="@/assets/slp/transport.png" alt="" />
      </div>
    </div>

    <div class="examplePart part2">
      <div class="dataContainer">
        <img class="exampleImg" src="@/assets/slp/medicine.png" alt="" />

        <div
          class="data left"
          v-animate-onscroll="{ down: 'animated fadeInLeft' }"
          data-animate-onscroll-offset="-200"
        >
          <p class="name">МЕДИЦИНА</p>
          <ul>
            <li class="exampleBlock">Своевременный поиск нужного сотрудника</li>
            <li class="exampleBlock">Контроль за состоянием пациентов</li>
          </ul>
        </div>
      </div>

      <div class="dataContainer">
        <div
          class="data right"
          v-animate-onscroll="{ down: 'animated fadeInRight' }"
          data-animate-onscroll-offset="-200"
        >
          <p class="name nameRight">СКЛАД</p>
          <ul class="rightdote">
            <li class="exampleBlock">Контроль передвижения погрузчиков</li>
            <li class="exampleBlock">Учет складского имущества</li>
          </ul>
        </div>

        <img class="exampleImg" src="@/assets/slp/sklvad.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SLPexamples",
};
</script>

<style lang="scss" scoped>
.examplePart {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 99vw;

  .dataContainer {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 700px) {
    .dataContainer {
      margin-bottom: 60px;

      align-items: center;
    }
  }

  .left {
    border-left: 4px solid rgba(227, 6, 19, 0.15);
    margin-left: 20px;
  }

  .right {
    border-right: 4px solid rgba(227, 6, 19, 0.15);
    margin-right: 20px;
    text-align: right;
  }
  .data {
    width: 300px;
    height: 220px;

    .name {
      font-size: 25px;
      margin-left: 40px;
    }

    .nameRight {
      margin-left: 0;
      margin-right: 40px;
    }

    .exampleBlock {
      font-size: 18px;
      margin-bottom: 7px;
    }

    .rightdote {
      direction: rtl;
    }
  }

  @media screen and (max-width: 700px) {
    .data {
      width: 200px;

      .name {
        font-size: 20px;
        font-weight: 600;
      }

      .exampleBlock {
        font-size: 16px;
      }
    }
  }

  .exampleImg {
    // height: 250px;
    width: 20vw;
  }

  @media screen and (max-width: 700px) {
    .exampleImg {
      // height: 250px;
      width: 100px;
      height: 90px;
    }
  }
}

.part2 {
  margin-top: 100px;
}
@media screen and (max-width: 700px) {
  .part2 {
    margin-top: 0px;
  }
}
.exampleName {
  font-size: 40px;
  margin-bottom: 10vh;
  text-align: center;
}

.container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1200px) {
  .examplePart {
    flex-direction: column;
  }
}
</style>
