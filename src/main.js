import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import { createStore } from "vuex";

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
app.mount("#app");
