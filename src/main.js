import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/router";

createApp(App).use(router).mount("#app"); //se pone el use router para que funcione el routing
