<template>
  <div class="FactoryContainer">
    <p class="FactoryLabel">Примеры реальных проектов:</p>

    <div class="allContainers">
      <elementIOT
        :imgLink="'/img/1.png'"
        :label="'Производство'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quas commodi earum minus ab numquam provident error odit soluta sit.'"
      />
      <elementIOT
        :imgLink="'/img/2.png'"
        :label="'Умный город'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quas commodi earum minus ab numquam provident error odit soluta sit.'"
      />
      <elementIOT
        :imgLink="'/img/3.png'"
        :label="'Транспорт и логистика'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quas commodi earum minus ab numquam provident error odit soluta sit.'"
      />
      <elementIOT
        :imgLink="'/img/4.png'"
        :label="'Ритэйл'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quas commodi earum minus ab numquam provident error odit soluta sit.'"
      />
      <elementIOT
        :imgLink="'/img/5.png'"
        :label="'Сельское хозяйство'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quas commodi earum minus ab numquam provident error odit soluta sit.'"
      />
    </div>
  </div>
</template>

<script>
import elementIOT from "@/components/iotpage/RealIOT/element.vue";
export default {
  components: { elementIOT },
  name: "FactoryRealIOT",
};
</script>

<style lang="scss" scoped>
.allContainers {
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 100px;
}

@media screen and (max-width: 700px) {
  .allContainers {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 20px;
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

  @media screen and (max-width: 700px) {
    .FactoryLabel {
      text-align: center;
      font-size: 30px;
      width: 80%;
      margin-bottom: 20px;
    }
  }
}
</style>
