const subtitles = [
  "systems dev",
  "learning game dev",
  "still learning webdev",
  "creating desktop apps",
  "maining c/java/dart",
  "open to collaborate",
  "exploring open source projects",
  "juggling rust & c",
  "reading more intel manuals",
  "reading the SIMD instructions list",
  "creating apps with glfw",
  "learning about flutter",
  "embracing the skia engine",
];

let i = Math.floor(Math.random() * subtitles.length);
let char_i = 0;
let deleting = false;
let paused = false;
let end = 0;

const end_pause_delay = 200;
const total_time = 800;
const per_char_timeout = 50;

function typeWriterEffect() {
  const greetingElement = document.getElementById("typing");

  if (paused && Date.now() > end) {
    paused = false;
    if (deleting) i = Math.floor(Math.random() * subtitles.length);
    deleting = !deleting;
  }

  if (!paused && !deleting && char_i === subtitles[i].length) {
    paused = true;
    end = Date.now() + total_time;
    return setTimeout(typeWriterEffect, per_char_timeout);
  }

  if (!paused && deleting && char_i === 0) {
    paused = true;
    end = Date.now() + end_pause_delay;
    return setTimeout(typeWriterEffect, per_char_timeout);
  }

  const timeout = deleting ? 100 : end_pause_delay;
  if (greetingElement != null)
    greetingElement.innerText = subtitles[i].substring(0, char_i);
  char_i = deleting ? char_i - 1 : char_i + 1;
  setTimeout(typeWriterEffect, timeout);
}

typeWriterEffect();
