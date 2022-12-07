<template>
  <div class="container">
    <p :class="'mainLabel ' + DynamicClassLabel">
      Миссия нашей команды - воплощать идеи в прототип
    </p>
    <div :class="'AboutTable ' + DynamicsClassText">
      <div class="Data">
        <p class="Label">Опыт более 5 лет</p>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi neque
          officia repudiandae eligendi dolore? Aperiam minima eveniet
          temporibus. Magni cum aliquam rem impedit vero quisquam tenetur hic
          voluptate vitae reiciendis!
        </p>
      </div>
      <div class="Data Data-broders">
        <p class="Label">Привлечено 10 млн. рублей инвестиций</p>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi neque
          officia repudiandae eligendi dolore? Aperiam minima eveniet
          temporibus. Magni cum aliquam rem impedit vero quisquam tenetur hic
          voluptate vitae reiciendis!
        </p>
      </div>
      <div class="Data">
        <p class="Label">20 реализованных проектов</p>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi neque
          officia repudiandae eligendi dolore? Aperiam minima eveniet
          temporibus. Magni cum aliquam rem impedit vero quisquam tenetur hic
          voluptate vitae reiciendis!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDesc",
  data() {
    return {
      DynamicClassLabel: "",
      DynamicsClassText: "",
    };
  },
  methods: {
    change_dynamic_class(val) {
      if (val) {
        this.DynamicClassLabel =
          "animate__animated animate__zoomIn animate__delay-800ms";
        this.DynamicsClassText =
          "animate__animated animate__fadeInUp animate__delay-800ms";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.AboutTable {
  display: grid;
  grid-template-columns: auto auto auto;
  font-weight: 200;

  .Label {
    font-size: 30px;
    font-weight: 200;
  }

  .desc {
    font-size: 15px;
  }

  .Data {
    padding: 0 60px 0 60px;
    width: 400px;
  }

  .Data-broders {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
}

.mainLabel {
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 80px;
}

.container {
  width: 100%;
  height: 100%;

  background-color: black;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
