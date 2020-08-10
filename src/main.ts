import Vue from "vue";
import App from "./App.vue";
import * as GmapVue from "gmap-vue";
import { environment } from "@/environment";

Vue.config.productionTip = false;

Vue.use(GmapVue, {
  load: {
    key: environment.MAPS_API_KEY ? environment.MAPS_API_KEY : ""
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');
