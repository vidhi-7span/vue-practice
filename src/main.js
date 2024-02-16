import { createApp } from "vue";
import { globalComponents } from "./global";
import App from "./App.vue";
import "./style.css";
import { router } from "./router/index";
const app = createApp(App);

app.use(router);
globalComponents(app);
app.mount("#app");
