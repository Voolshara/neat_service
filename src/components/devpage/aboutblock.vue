<template>
  <div :class="AllPage">
    <p :class="'MainText ' + DynamicClassText">Наши достоинства</p>
    <div class="Achivments">
      <div :class="'ach-elemnet ' + dynamicAchiv[0]">
        <img class="ach-img" src="@/assets/individual.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Наши специалисты проконсультируют Вас по любым вопросам, связанным с
            вашим проектом, расскажут, насколько проект реализуем и есть ли
            аналоги
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[1]">
        <img class="ach-img" src="@/assets/specialists.png" alt="img" />
        <div>
          <p class="ach-label">Высококвалифицированные специалисты</p>
          <p class="ach-disc">
            Наша команда на первом этапе работы рассчитает все расходы, которые
            будут в процессе разработки и изготовления вашего устройства
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[2]">
        <img class="ach-img" src="@/assets/quality.png" alt="img" />
        <div>
          <p class="ach-label">Гарантия качества</p>
          <p class="ach-disc">Контроль качества на всех этапах работы</p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[3]">
        <img class="ach-img" src="@/assets/documents.png" alt="img" />
        <div>
          <p class="ach-label">Выпуск нужной документации по продукту</p>
          <p class="ach-disc">
            Наши специалисты подготовят документацию по изготовлению и
            использованию вашего продукта, а так же проведут сертификацию
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[4]">
        <img class="ach-img" src="@/assets/industry.png" alt="img" />
        <div>
          <p class="ach-label">
            Разработка как серийных, так и уникальных продуктов
          </p>
          <p class="ach-disc">
            Мы подготовим документацию, найдём изготовителей, договоримся с ними
            и запустим производство Вашего изделия
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[5]">
        <img class="ach-img" src="@/assets/parthnership.png" alt="img" />
        <div>
          <p class="ach-label">Нацелены на долгосрочное сотрудничество</p>
          <p class="ach-disc">
            Мы разработаем, изготовим прототип, золотой образец, подготовим
            документацию, запустим в производство и будем оказывать поддержку
            вашего изделия
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBlock",
  data() {
    return {
      DynamicClassText: "",
      AllPage: "",
      dynamicAchiv: ["", "", "", "", "", ""],
    };
  },
  methods: {
    change_dynamic_class(val) {
      if (val) {
        this.AllPage = "animate__animated animate__fadeInBottomLeft about";
        this.DynamicClassText =
          "animate__animated animate__fadeInUp animate__delay-500ms";
        this.dynamicAchiv = [
          "animate__animated animate__fadeInUp animate__delay-1s",
          "animate__animated animate__fadeInUp animate__delay-1s",
          "animate__animated animate__fadeInUp animate__delay-1s",
          "animate__animated animate__fadeInUp animate__delay-1s",
          "animate__animated animate__fadeInUp animate__delay-1s",
          "animate__animated animate__fadeInUp animate__delay-1s",
        ];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.MainText {
  font-size: 70px;
  margin: 0;
  margin-bottom: 40px;
}

.Achivments {
  display: grid;

  grid-template-columns: auto auto;

  .ach-elemnet {
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
    }

    .ach-img {
      width: 100px;
      margin-right: 30px;
    }

    .ach-label {
      width: 400px;
      color: black;
      font-weight: 400;
      padding-bottom: 15px;
      font-size: 25px;
    }

    .ach-disc {
      font-weight: 200;
      width: 400px;
      color: black;
    }
  }
}

.about {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
}

@media screen and (max-width: 1000px) {
  .MainText {
    font-size: 30px;
    margin-top: 110px;
    margin-bottom: 7px;
  }

  @media screen and (max-height: 500px) {
    .MainText {
      margin-bottom: 10px;
    }
  }

  .about {
    justify-content: flex-start;
  }

  .Achivments {
    display: flex;
    flex-direction: column;

    .ach-elemnet {
      margin: 5px;
      width: 350px;
      .ach-img {
        width: 50px;
        margin-right: 20px;
      }
      .ach-label {
        width: 270px;
        font-size: 17px;
        padding-bottom: 1px;
      }

      .ach-disc {
        font-size: 10px;
        width: 200px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .MainText {
      font-size: 50px;
    }
    .Achivments {
      display: flex;
      flex-direction: column;

      .ach-elemnet {
        margin: 5px;
        width: 500px;
        .ach-img {
          width: 50px;
          margin-right: 20px;
        }
        .ach-label {
          width: 500px;
          font-size: 30px;
          padding-bottom: 10px;
        }

        .ach-disc {
          font-size: 15px;
          width: 500px;
        }
      }
    }
  }
}
</style>
