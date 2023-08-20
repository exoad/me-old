var isLightMode = false;

function themeController_toggleLightMode() {
  let docEleStyle = document.documentElement.style;
  docEleStyle.setProperty("--theme-fg", isLightMode ? "#FFF" : "#000");
  docEleStyle.setProperty("--theme-bg", isLightMode ? "#000" : "#FFF");
  docEleStyle.setProperty("--theme-antifg", isLightMode ? "#000" : "#FFF");
  docEleStyle.setProperty("--theme-antibg", isLightMode ? "#FFF" : "#000");
  docEleStyle.setProperty(
    "--theme-body-transparency",
    isLightMode ? "rgba(0, 0, 0, 0.266)" : "rgba(0, 0, 0, 0.144)"
  );
  let themeIcon = document.getElementById("theme-icon");
  themeIcon.src = isLightMode
    ? "./assets/icons/theme-light-sun.svg"
    : "./assets/icons/theme-dark-moon.svg";
  themeIcon.title = isLightMode
    ? "Let there be light!"
    : "Let there be darkness";
  console.log(
    "[THEME_DATA]: isLight: " +
      isLightMode +
      " => " +
      document.getElementById("theme-button").innerHTML
  );
  isLightMode = !isLightMode;
}
