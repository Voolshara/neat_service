<template>
  <div class="contactBlock">
    <p class="contactText">Свяжитесь с нами</p>
    <div class="mainContacts">
      <div class="contacts">
        <a class="label"> Телефон:</a>
        <p class="text">+7 (905) 623-23-30</p>

        <a class="label"> E-mail:</a>
        <p class="text">novaeraarttechnologies@gmail.com</p>

        <a class="label"> Адрес:</a>
        <p class="text">300026, Тула, проспект Ленина, 109</p>
      </div>
      <img class="map" src="/img/map.png" alt="map" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CantacBlock",
  methods: {
    change_dynamic_class() {
      //   if (val) {
      //   }
    },
  },
};
</script>

<style lang="scss" scoped>
.contactText {
  font-size: 50px;
  margin: 0;
  margin-bottom: 100px;
}

.mainContacts {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  .contacts {
    display: grid;
    grid-template-columns: auto auto;
    width: 700px;

    .label {
      font-weight: 200;
      font-size: 25px;

      margin-right: 30px;
      text-align: right;
    }

    .text {
      font-weight: 400;
      font-size: 23px;
      margin-bottom: 30px;
    }

    p {
      margin: 0;
    }
  }

  .map {
    width: 600px;
    margin-left: 100px;
  }
}

.contactBlock {
  width: 100%;
  height: 100%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
