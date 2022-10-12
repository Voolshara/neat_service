<template>
  <div class="NavBar animate__animated animate__fadeInDown">
    <img class="Logo" src="@/assets/logo_full.png" alt="" />
    <div v-if="this.$store.state.IsColorNavBlack" class="Nav Nav-white">
      <a class="base">Разработка</a>
      <a class="base">Системы позиционирования</a>
      <a class="base">IoT</a>

      <a class="special">Контакты</a>
    </div>
    <div v-else class="Nav Nav-black">
      <a class="base">Разработка</a>
      <a class="base">Системы позиционирования</a>
      <a class="base">IoT</a>

      <a class="special-white">Контакты</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
.NavBar {
  position: absolute;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-top: 20px;

  .Nav-white {
    color: white;
  }

  .Nav-black {
    color: black;
  }

  .Nav {
    padding-right: 30px;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 40px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;

    display: flex;
    align-items: center;

    a {
      padding: 0 7px 0 7px;
      margin: 0 20px 0 20px;
      cursor: pointer;
    }

    .base {
      border: 1px solid rgba($color: #000000, $alpha: 0);
    }

    .base:hover {
      border-radius: 10px;
      background-color: rgba($color: #c7226c, $alpha: 0.3);
      border: 1px solid var(--color-red);
    }

    .special {
      background-color: var(--color-red);
      padding: 5px 9px 5px 9px;
      border-radius: 10px;
      border: 1px solid var(--color-red);
    }

    .special:hover {
      color: #c7226c;
      background-color: rgba($color: black, $alpha: 0);

      padding: 5px 9px 5px 9px;
      border-radius: 10px;
    }

    .special-white {
      background-color: rgba($color: black, $alpha: 0);
      padding: 5px 9px 5px 9px;
      border-radius: 10px;
      border: 1px solid var(--color-red);
      color: #c7226c;
    }

    .special-white:hover {
      color: white;
      background-color: var(--color-red);

      padding: 5px 9px 5px 9px;
      border-radius: 10px;
    }
  }

  .Logo {
    width: 190px;
    padding-left: 30px;
  }
}
</style>
