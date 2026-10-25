let prevX = null;
let prevY = null;
document.body.addEventListener("mousemove", checkDistance);

function checkDistance() {
  if (prevX != null && prevY != null) {
    let distanceX = event.clientX - prevX;
    let distanceY = event.clientY - prevY;
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance >= 0) {
      createStars(event.clientX, event.clientY);
      prevX = event.clientX;
      prevY = event.clientY;
    }
  } else {
    createStars(event.clientX, event.clientY);
    prevX = event.clientX;
    prevY = event.clientY;
  }
}

function createStars(x, y) {
  let star = document.createElement("div");
  star.classList.add("star");
  document.body.appendChild(star);
  star.style.top = y + "px";
  star.style.left = x + "px";
  let size = Math.random() * 30;
  star.style.width = size + "px";
  star.style.height = size + "px";
  let transformV = Math.random() * 360;
  star.style.transform = `rotate(` + transformV + `deg)`;

  setTimeout(() => {
    document.body.removeChild(star);
  }, 1000);
}

// Bron:
// https://codepen.io/Vampika/pen/BaemKrZ
