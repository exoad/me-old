function workerController_openURL(url) {
  window.open(url, "_blank");
}

function workerController_openURLCurrent(url) {
  window.open(url);
}

function workerController_exoadProfilePage() {
  workerController_openURL("https://github.com/exoad");
}

function workerController_legalsPage() {
  workerController_openURLCurrent("../part/legals");
}
