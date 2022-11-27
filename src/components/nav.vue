<template>
  <div
    v-if="isMobile()"
    class="NavBar-mobile animate__animated animate__fadeInDown"
  >
    <router-link to="/">
      <img class="Logo" src="@/assets/logo_full.png" alt="" />
    </router-link>
    <div
      v-if="this.$store.state.IsColorNavBlack"
      v-on:click="openMenu"
      class="menu-icon"
    >
      <div class="menu-icon-element"></div>
      <div class="menu-icon-element"></div>
      <div class="menu-icon-element"></div>
    </div>
    <div v-else v-on:click="openMenu" class="menu-icon">
      <div class="menu-icon-element-black"></div>
      <div class="menu-icon-element-black"></div>
      <div class="menu-icon-element-black"></div>
    </div>
    <div v-if="isOpenMenu" class="MenuDropDown-container">
      <AdditionalNav />
    </div>
  </div>
  <div v-else class="NavBar animate__animated animate__fadeInDown">
    <router-link to="/"
      ><img class="Logo" src="@/assets/logo_full.png" alt="" />
    </router-link>
    <div v-if="this.$store.state.IsColorNavBlack" class="Nav Nav-white">
      <router-link to="/dev" class="base">Разработка</router-link>
      <router-link to="/slp" class="base">Системы позиционирования</router-link>
      <router-link to="/iot" class="base">IoT</router-link>
      <router-link to="/about" class="special">Контакты</router-link>
    </div>
    <div v-else class="Nav Nav-black">
      <router-link to="/dev" class="base">Разработка</router-link>
      <router-link to="/slp" class="base">Системы позиционирования</router-link>
      <router-link to="/iot" class="base">IoT</router-link>

      <router-link to="/about" class="special-white">Контакты</router-link>
    </div>
  </div>
</template>

<script>
import AdditionalNav from "./additionalNav.vue";
export default {
  name: "NavBar",
  components: {
    AdditionalNav,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      isOpenMenu: false,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
    openMenu() {
      this.isOpenMenu = this.isOpenMenu ? false : true;
      /*if (this.isOpenMenu) {
        this.isOpenMenu = false;
        this.$store.commit("SetBlackNav");
      } else {
        this.isOpenMenu = true;
        this.$store.commit("SetWhiteNav");
      }*/
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.MenuDropDown-container {
  position: absolute;
  top: -30px;

  width: 100vw;
  height: 100vh;
  z-index: -1;

  display: flex;
  justify-content: flex-end;
}

.NavBar-mobile {
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;

  .menu-icon {
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: space-between;
    margin-right: 30px;
  }

  .menu-icon-element {
    height: 6px;
    width: 40px;
    background-color: white;
    border-radius: 400px;
  }

  .menu-icon-element-black {
    height: 6px;
    width: 40px;
    background-color: black;
    border-radius: 400px;
  }
}

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
    a {
      color: white;
    }
  }

  .Nav-black {
    a {
      color: black;
    }
  }

  .Nav {
    padding-right: 30px;
    font-size: 22px;
    text-transform: uppercase;
    line-height: 40px;
    font-weight: 400;
    margin-left: 20px;
    font-family: "Montserrat", sans-serif;

    display: flex;
    align-items: center;

    a {
      padding: 0 7px 0 7px;
      margin: 0 1vw 0 0vw;
      text-align: center;
      cursor: pointer;

      text-decoration: none;
    }

    .base {
      border: 1px solid rgba($color: #000000, $alpha: 0);
    }

    .base:hover {
      border-radius: 10px;
      background-color: rgba($color: var(--color-red), $alpha: 0.3);
      border: 1px solid var(--color-red);
    }

    .special {
      background-color: var(--color-red);
      padding: 5px 9px 5px 9px;
      border-radius: 10px;
      border: 1px solid var(--color-red);
    }

    .special:hover {
      color: var(--color-red);
      background-color: rgba($color: black, $alpha: 0);

      padding: 5px 9px 5px 9px;
      border-radius: 10px;
    }

    .special-white {
      background-color: rgba($color: black, $alpha: 0);
      padding: 5px 9px 5px 9px;
      border-radius: 10px;
      border: 1px solid var(--color-red);
      color: var(--color-red);
    }

    .special-white:hover {
      color: white;
      background-color: var(--color-red);

      padding: 5px 9px 5px 9px;
      border-radius: 10px;
    }
  }
}

.Logo {
  width: 190px;
  padding-left: 30px;
}

@media screen and (max-width: 1000px) {
}
</style>
