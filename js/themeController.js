var isLightMode = false;

function themeController_toggleLightMode() {
  let docEleStyle = document.documentElement.style;
  docEleStyle.setProperty("--theme-fg", isLightMode ? "#FFF" : "#000");
  docEleStyle.setProperty("--theme-bg", isLightMode ? "#000" : "#FFF");
  docEleStyle.setProperty("--theme-antifg", isLightMode ? "#000" : "#FFF");
  docEleStyle.setProperty("--theme-antibg", isLightMode ? "#FFF" : "#000");
  /*--------------------------------------------------------------- /
  / docEleStyle.setProperty(                                        /
  /   "--theme-body-transparency",                                  /
  /   isLightMode ? "rgba(0, 0, 0, 0.205)" : "rgba(0, 0, 0, 0.144)" /
  / );                                                              /
  /----------------------------------------------------------------*/
  docEleStyle.setProperty(
    "--background-img",
    isLightMode
      ? "url(../assets/images/bg-dark.webp)"
      : "url(../assets/images/bg-light.webp)"
  );
  docEleStyle.setProperty("--background-opacity", isLightMode ? "65%" : "85%");
  document.querySelector(".bg-image").classList.add("bg-image-transition");
  setTimeout(function () {
    document.querySelector(".bg-image").classList.remove("bg-image-transition");
  }, 10);
  document
    .getElementById("invertable-icon")
    .style.setProperty("filter", isLightMode ? "" : "invert()");
  let themeIcon = document.getElementById("theme-icon");
  themeIcon.src = isLightMode
    ? "./assets/icons/theme-light-sun.svg"
    : "./assets/icons/theme-dark-moon.svg";
  themeIcon.title = isLightMode
    ? "Let there be light!"
    : "Let there be darkness";
  isLightMode = !isLightMode;
}
