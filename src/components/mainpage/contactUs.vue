<template>
  <div class="contactBlock">
    <p class="contactText">Свяжитесь с нами</p>
    <div class="mainContacts">
      <div class="contacts">
        <a class="label"> Телефон:</a>
        <p class="text">+7 (905) 623-23-30</p>

        <a class="label"> E-mail:</a>
        <p class="text">info@neatech.ru</p>

        <a class="label"> E-mail-2:</a>
        <p class="text">artem@neatech.ru</p>

        <a class="label"> Старший менеджер:</a>
        <p class="text">alex@neatech.ru</p>

        <a class="label"> Адрес:</a>
        <p class="text">300026, Тула, проспект Ленина, 109</p>
      </div>
      <YandexMap :settings="settings" :coordinates="[32, 50]" class="map" />
    </div>
  </div>
</template>

<script>
import { YandexMap } from "vue-yandex-maps";

export default {
  name: "CantacBlock",
  components: {
    YandexMap,
  },
  data() {
    return {
      settings: {
        apiKey: "", // Индивидуальный ключ API
        lang: "ru_RU", // Используемый язык
        coordorder: "latlong", // Порядок задания географических координат
        debug: false, // Режим отладки
        version: "2.1", // Версия Я.Карт
      },
    };
  },
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
      margin-bottom: 60px;
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

@media screen and (max-width: 1500px) {
  .contactText {
    margin-bottom: 40px;
  }

  .mainContacts {
    .contacts {
      width: 600px;
    }

    .map {
      width: 400px;
      height: 400px;
      margin-left: 50px;
    }
  }
}

@media screen and (max-width: 768px) {
  .contactText {
    font-size: 33px;
    margin-bottom: 10px;
  }

  @media screen and (min-height: 700px) {
    .contactText {
      margin-bottom: 30px;
    }

    .map {
      margin-top: 20px;
      height: 320px;
      margin-left: 0;
    }
  }

  .mainContacts {
    justify-content: center;
    flex-direction: column;

    .contacts {
      display: grid;
      grid-template-columns: auto auto;
      width: 320px;
      margin-bottom: 10px;

      .label {
        font-weight: 400;
        font-size: 14px;

        margin-right: 30px;
        text-align: right;
      }

      .text {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
      }

      p {
        margin: 0;
      }
    }

    .map {
      width: 320px;
      height: 270px;
      margin-left: 0;
    }
  }
}

.contactBlock {
  width: 100%;
  height: 100%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin-top: 110px;
}
</style>
