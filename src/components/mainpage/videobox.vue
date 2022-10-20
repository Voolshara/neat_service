<template>
  <div class="VideoBox">
    <div class="video-container">
      <video
        class="video"
        src="@/assets/bg-video.mp4"
        autoplay
        loop
        muted
        autopictureinpicture
      ></video>
    </div>
    <div class="GreyFata"></div>
    <div class="NameBlock">
      <div
        class="NameBlock-label animate__animated animate__fadeInUp animate__delay-1s"
      >
        <p class="first">Разработка устройств под ваши нужды</p>
        <p class="second">Полный цикл разработки</p>
        <p class="third">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolores
          nam inventore totam ut possimus assumenda officiis esse nobis aliquam
          tenetur corporis, in fugit asperiores tempora ea sequi ad incidunt
          adipisci? Totam laudantium harum rerum?
        </p>
        <button class="button-reply">Оставить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
};
</script>

<style lang="scss" scoped>
.VideoBox {
  color: white;

  .video-container {
    display: flex;
    justify-content: center;
  }
  .video {
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  }

  .GreyFata {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
}

.NameBlock {
  display: flex;
  align-items: center;

  position: absolute;
  z-index: 3;

  min-width: 100%;
  min-height: 100%;

  .NameBlock-label {
    width: 650px;
    padding-left: 10vw;
    top: 0;

    p {
      margin: 0;
    }

    .first {
      color: var(--color-red);
      font-size: 50px;
      line-height: 50px;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 15px;
    }

    .second {
      font-size: 40px;
      line-height: 40px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 20px;
    }

    .third {
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: 200;
    }

    .button-reply {
      margin-top: 40px;

      font-size: 30px;
      line-height: 30px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;

      background-color: initial;
      border: 1px solid var(--color-red);
      color: var(--color-red);
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
      box-sizing: border-box;

      cursor: pointer;
      display: inline-block;

      outline: 0;
      padding: 12px 14px;
      text-align: center;
      text-rendering: geometricprecision;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;
    }
    .button-reply:hover,
    .button-reply:active {
      background: var(--color-red-alpha);

      background-position: 0 0;
      color: #ffffff;
    }
    .button-reply:active {
      opacity: 0.5;
    }
  }
}
</style>
