<template>
  <div class="FactoryContainer">
    <p class="FactoryLabel">Примеры реальных проектов:</p>
    <div
      class="FactoryBlock"
      v-animate-onscroll="{ down: 'animated fadeInUp' }"
    >
      <div class="FactoryDesc">
        <p>Производство</p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quidem
        maiores! Ullam ex illo, quidem dicta maxime aperiam blanditiis? Quo
        delectus nam iusto iste praesentium facere molestiae blanditiis est
        beatae!
      </div>
      <div class="FactoryMarks">
        <img class="backImg" src="@/assets/IotPage/factory.jpg" alt="" />
        <IOTMark class="mark-1" :label="'ТРЕВОГА: Труба накренилась'" />
        <IOTMark
          class="mark-2"
          :label="'УМНАЯ КАСКА: Сотрудник  без движения'"
        />
        <IOTMark class="mark-3" :label="'Заполнен бункер  с мусором'" />
        <IOTMark class="mark-4" :label="'ТРЕВОГА: Утечка из трубы'" />
        <IOTMark class="mark-5" :label="'Клапан открыт'" />
      </div>
    </div>
  </div>
</template>

<script>
import IOTMark from "./IOTMark.vue";
export default {
  components: { IOTMark },
  name: "FactoryRealIOT",
};
</script>

<style lang="scss" scoped>
.FactoryBlock {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;

  .FactoryDesc {
    p {
      font-size: 30px;
      text-align: left;
    }

    width: 20vw;
  }
}

.FactoryContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  width: 100%;

  .FactoryLabel {
    font-size: 35px;
    margin-bottom: 60px;
  }
}

.mark-1 {
  position: absolute;
  top: 15%;
  left: 37%;
  z-index: 2;
}

.mark-2 {
  position: absolute;
  top: 48%;
  left: 12%;
  z-index: 2;
}

.mark-3 {
  position: absolute;
  top: 55%;
  left: 67%;
  z-index: 2;
}

.mark-4 {
  position: absolute;
  top: 18%;
  left: 5%;
  z-index: 2;
}

.mark-5 {
  position: absolute;
  top: 18%;
  left: 85%;
  z-index: 2;
}

.FactoryMarks {
  width: 60vw;
  position: relative;
}

.backImg {
  position: relative;
  z-index: 1;
  width: 60vw;
}
</style>
