<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/nav.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

:root {
  --color-red: #c7226c; // #e30613
  --color-red-alpha: rgba(199, 34, 108, 0.9); //  rgba(227, 6, 19)
  --color-blue: #408ec6;
}

body {
  margin: 0;
  padding: 0;
}
</style>
