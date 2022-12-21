<template>
  <div class="NavDropDown">
    <div class="topSpace"></div>
    <div class="NavContainer">
      <router-link v-on:click="$emit('close')" to="/dev" class="base"
        >Разработка устройств</router-link
      >
      <router-link v-on:click="$emit('close')" to="/slp" class="base"
        >Системы позиционирования</router-link
      >
      <router-link v-on:click="$emit('close')" to="/iot" class="base"
        >IoT</router-link
      >
      <router-link v-on:click="$emit('close')" to="/about" class="special"
        >Контакты</router-link
      >
    </div>

    <div class="botSpace">
      <a href="https://vk.com/neatechnologies" target="_blank"
        ><div class="vk-img"></div
      ></a>
      <a href="https://tgtg.su/neatech" target="_blank"
        ><div class="tg-img"></div
      ></a>
      <a href="https://wtsp.cc/79056232330" target="_blank"
        ><div class="watsapp-img"></div
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalNav",
};
</script>

<style lang="scss" scoped>
.vk-img {
  background-image: url("@/assets/mainpage/vk.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
}

.tg-img {
  background-image: url("@/assets/mainpage/tg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-left: 30px;
  margin-right: 30px;
}

.watsapp-img {
  background-image: url("@/assets/mainpage/watsapp.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
}
.NavDropDown {
  .topSpace {
    width: 80%;
    height: 140px;
    border-bottom: white 1px solid;
    margin-bottom: 30px;
  }

  .botSpace {
    padding-top: 20px;
    border-top: 1px white solid;
    width: 80%;

    align-self: flex-start;

    position: absolute;
    bottom: 20px;
    left: 40px;

    display: flex;
    flex-direction: row;
  }

  .NavContainer {
    width: 80%;
    color: white;
    display: flex;
    flex-direction: column;

    a {
      font-size: 25px;
      margin-bottom: 30px;
      color: white;
      text-decoration: none;
    }

    a:hover {
      color: var(--color-red);
    }

    a:focus {
      outline: none;
      background-color: none;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: relative;
  z-index: 10;
  width: 350px;
  height: 100vh;

  background-color: rgba($color: #000000, $alpha: 0.95);
}
</style>
