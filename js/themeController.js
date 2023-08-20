var isLightMode = false;

function themeController_toggleLightMode() {
  document.documentElement.style.setProperty(
    "--theme-fg",
    isLightMode ? "#FFF" : "#000"
  );
  document.documentElement.style.setProperty(
    "--theme-bg",
    isLightMode ? "#000" : "#FFF"
  );
  document.documentElement.style.setProperty(
    "--theme-antifg",
    isLightMode ? "#000" : "#FFF"
  );
  document.documentElement.style.setProperty(
    "--theme-antibg",
    isLightMode ? "#FFF" : "#000"
  );
  
  let themeIcon = document.getElementById("theme-icon");
  themeIcon.src = isLightMode
    ? "./assets/icons/theme-light-sun.svg"
    : "./assets/icons/theme-dark-moon.svg";
  themeIcon.title = isLightMode ? "Let there be light!" : "Let there be darkness"
  console.log(
    "[THEME_DATA]: isLight: " +
      isLightMode +
      " => " +
      document.getElementById("theme-button").innerHTML
  );
  isLightMode = !isLightMode;
}
