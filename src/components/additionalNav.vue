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
  </div>
</template>

<script>
export default {
  name: "AdditionalNav",
};
</script>

<style lang="scss" scoped>
.NavDropDown {
  .topSpace {
    width: 80%;
    height: 140px;
    border-bottom: white 1px solid;
    margin-bottom: 30px;
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

  position: relative;
  z-index: 10;
  width: 350px;
  height: 100%;

  background-color: rgba($color: #000000, $alpha: 0.95);
}
</style>
