<template>
  <div class="about animate__animated animate__fadeInLeft">
    <div class="mainfooter">
      <p class="motto">Наша миссия – внедрить инновации во все сферы жизни</p>
      <p class="moreMotto">
        NEAT - это команда высококвалифицированных специалистов, оказывающих
        услуги в области робототехники, IoT и IT.
      </p>
      <p class="footerAbout">О нас в цифрах:</p>
      <div class="gridAchiv">
        <div class="oneAchiv">
          <img src="@/assets/experience.png" alt="" />
          <p>Опыт более 5 лет</p>
        </div>

        <div class="oneAchiv">
          <img src="@/assets/document.png" alt="" />
          <p>20 реализованных проектов</p>
        </div>

        <div class="oneAchiv">
          <img src="@/assets/investment.png" alt="" />
          <p>Привлечено 10 млн. рублей инвестиций</p>
        </div>

        <div class="oneAchiv">
          <img src="@/assets/professional.png" alt="" />
          <p>10 человек в команде</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.gridAchiv {
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  .oneAchiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;

    img {
      height: 64px;
    }

    p {
      margin: 0;
      // width: 17vw;
      max-width: 300px;
      margin-left: 20px;
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 700px) {
  .gridAchiv {
    flex-direction: column;

    align-items: flex-start;
  }

  .oneAchiv {
    margin-bottom: 20px;
  }
}

.about {
  .motto {
    font-weight: 400;
    font-size: 40px;
  }

  .moreMotto {
    font-size: 27px;
    width: 800px;
  }

  @media screen and (max-width: 900px) {
    .moreMotto {
      font-size: 20px;
      width: 80vw;
    }
  }

  .footerAbout {
    margin-top: 50px;
    font-size: 24px;
  }

  .mainfooter {
    margin-top: 80px;
    width: 90%;
  }

  background-color: black;
  position: relative;
  z-index: 9;

  color: white;
  font-weight: 200;

  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .about {
    margin-top: 25vh;
    margin-bottom: 300px;
  }
}
</style>
