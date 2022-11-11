import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import { createStore } from "vuex";
import Particles from "vue3-particles";
import VueAnimateOnScroll from "vue3-animate-onscroll";

const store = createStore({
  state() {
    return {
      IsColorNavBlack: true,
    };
  },
  mutations: {
    SetBlackNav(state) {
      state.IsColorNavBlack = true;
    },
    SetWhiteNav(state) {
      state.IsColorNavBlack = false;
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Particles);
app.use(VueAnimateOnScroll);
app.mount("#app");
