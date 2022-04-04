import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {},
  },
  theme: {
    dark: false,
    default: "light",
    disable: false,
    options: { customProperties: true },
    themes: {
      light: {
        background: "#f1eeee",
        primary: "#1717c7",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#22C55E",
        warning: "#FB8C00",
				grey: "#556987",
				gray: "#8896AB",
				lightGray: "#BBC3CF",
				darkNeutral: "#2A3342",
        orange: "#B490E8",
      },
      dark: {
        background: "#161722",
        primary: "#a230aa",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
        grey: "#25273C",
        orange: "#B490E8",
      },
    },
  },
});
