const subtitles = [
  "I am a Systems Dev",
  "I am learning Game Dev",
  "Still learning WebDev",
  "I create desktop apps",
  "I main C/Java/Dart",
];
let i = 0;
let char_i = 0;
let deleting = false;
let paused = false;
let end = 0;

function typeWriterEffect() {
  const greetingElement = document.getElementById("typing");

  if (paused && Date.now() > end) {
    paused = false;
    if (deleting) i = (i + 1) % subtitles.length;
    deleting = !deleting;
  }

  if (!paused && !deleting && char_i === subtitles[i].length) {
    paused = true;
    end = Date.now() + 800;
    return setTimeout(typeWriterEffect, 50);
  }

  if (!paused && deleting && char_i === 0) {
    paused = true;
    end = Date.now() + 200;
    return setTimeout(typeWriterEffect, 50);
  }

  const timeout = deleting ? 100 : 200;
  if (greetingElement != null)
    greetingElement.innerText = subtitles[i].substring(0, char_i);
  char_i = deleting ? char_i - 1 : char_i + 1;
  setTimeout(typeWriterEffect, timeout);
}

typeWriterEffect();
