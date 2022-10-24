<template>
  <div :class="AllPage">
    <p :class="'MainText ' + DynamicClassText">Наши достоинства</p>
    <div class="Achivments">
      <div :class="'ach-elemnet ' + dynamicAchiv[0]">
        <img class="ach-img" src="@/assets/check-mark.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[1]">
        <img class="ach-img" src="@/assets/check-mark.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[2]">
        <img class="ach-img" src="@/assets/check-mark.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[3]">
        <img class="ach-img" src="@/assets/check-mark.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[4]">
        <img class="ach-img" src="@/assets/check-mark.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi
          </p>
        </div>
      </div>
      <div :class="'ach-elemnet ' + dynamicAchiv[5]">
        <img class="ach-img" src="@/assets/check-mark.png" alt="img" />
        <div>
          <p class="ach-label">Индивидуальный подход</p>
          <p class="ach-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi
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
    margin-top: 130px;
    margin-bottom: 30px;
  }

  @media screen and (max-height: 700px) {
    .MainText {
      margin-bottom: 10px;
    }
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
        font-size: 20px;
        padding-bottom: 1px;
      }

      .ach-disc {
        font-size: 12px;
        width: 200px;
      }
    }
  }
}
</style>
