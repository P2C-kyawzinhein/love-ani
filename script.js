document.addEventListener("DOMContentLoaded", function() {

  // 💖 Floating hearts
  const heartContainer = document.querySelector(".heart-background");

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.fontSize = (10 + Math.random() * 15) + "px";
    heartContainer.appendChild(heart);
  }

  // 🔐 Password Check
  window.checkPassword = function() {

    const correct = "0320";
    const input = document.getElementById("password").value;
    const secret = document.getElementById("secretContent");
    const unlock = document.getElementById("unlockSection");
    const footer = document.getElementById("footerNav");
    const error = document.getElementById("error");

    if (input === correct) {

      unlock.style.display = "none";
      secret.classList.remove("hidden");
      footer.classList.add("show");

      launchConfetti();
      sparkle();
      fadeInMusic();
      pulseToMusic();
      enableModal();

    } else {
      error.textContent = "Wrong date ❤️";
    }
  };

  function launchConfetti() {
    if (typeof confetti !== "undefined") {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
      });
    }
  }

  function sparkle() {
    const title = document.querySelector(".title");
    if (!title) return;
    title.style.textShadow = "0 0 20px white,0 0 40px gold";
    setTimeout(() => { title.style.textShadow = "none" }, 1500);
  }

  function fadeInMusic() {
    const bgm = document.getElementById("bgMusic");
    if (!bgm) return;
    bgm.volume = 0;
    bgm.play().catch(() => {});
    let fade = setInterval(() => {
      if (bgm.volume < 1) {
        bgm.volume += 0.05;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }

  function enableModal() {
    const photos = document.querySelectorAll(".photo");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const close = document.getElementById("close");

    photos.forEach(photo => {
      photo.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = photo.src;
      });
    });

    if (close) {
      close.onclick = () => modal.style.display = "none";
    }
  }

});


// 🎵 Footer 光らせる
function pulseToMusic() {
  const bgm = document.getElementById("bgMusic");
  const footer = document.getElementById("footerNav");

  if (!bgm || !footer) return;

  setInterval(() => {
    const level = bgm.volume;
    footer.style.boxShadow = `0 0 ${20 + level * 40}px gold`;
  }, 200);
}


// 📩 Envelope（memory / family 共通）
window.openEnvelope = function(el, imgSrc, message) {

  el.classList.add("open");

  setTimeout(() => {

    const container = document.createElement("div");
    container.className = "memory-card";

    container.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${imgSrc}">
        </div>
        <div class="card-back">
          <p>${message}</p>
        </div>
      </div>
    `;

    container.onclick = function() {
      container.classList.toggle("flip");
    };

    // 押したセクションに追加（memoryでもfamilyでもOK）
    const section = el.closest(".section");
    section.appendChild(container);

  }, 800);
};


// 🔄 Section切り替え
window.openSection = function(sectionId) {

  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    sec.classList.add("hidden");
  });

  document.getElementById(sectionId).classList.remove("hidden");
};


// 🎵 曲変更
window.playSong = function(src) {
  const bgm = document.getElementById("bgMusic");
  bgm.src = src;
  bgm.play();
};