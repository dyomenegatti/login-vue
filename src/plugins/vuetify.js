import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: false, 
    themes: {
      light: {
        primary: "#262528",
        secondary: "#4F85E2",
        tertiary: "#E3D9E8",
        inputs: "#FFFFFF",
        error: "#FC5252",
        success: "#02B760",
        pressed: "#7B7A7C",
      },
      dark: {

      }
    }
  }
});