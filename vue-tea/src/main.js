import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//公共CSS
import './assets/css/common.css'

//底部自動調整文件
import './assets/js/flexible'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
