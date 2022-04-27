import { App } from "vue";
import PopopContainer from "./popup-container/index.vue";

const components = [PopopContainer];

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component);
    });
    return app;
  }
};
