document.addEventListener("DOMContentLoaded", function() {

	// Floating hearts
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
	//	window.checkPassword = function() {
	//
	//		const correct = "0320";
	//		const input = document.getElementById("password").value;
	//		const secret = document.getElementById("secretContent");
	//		const unlock = document.getElementById("unlockSection");
	//		const footer = document.getElementById("footerNav");
	//		const error = document.getElementById("error");
	//
	//		if (input === correct) {
	//
	//			unlock.style.display = "none";
	//			secret.classList.remove("hidden");
	//
	//			// 💫 下からスライド表示
	//			footer.classList.add("show");
	//
	//			launchConfetti();
	//			sparkle();
	//			fadeInMusic();
	//			enableModal();
	//
	//		} else {
	//			error.textContent = "Wrong date ❤️";
	//		}
	//	}

	window.checkPassword = function() {

		const correct = "0320";
		const input = document.getElementById("password").value;
		const secret = document.getElementById("secretContent");
		const unlock = document.getElementById("unlockSection");
		const footer = document.getElementById("footerNav");
		const error = document.getElementById("error");

		if (input === correct) {

			unlock.style.display = "none";
			//      secret.classList.remove("hidden");
			secret.classList.remove("hidden");
			//
			//      // ★ footer を表示
			//      footer.classList.remove("hidden");
			footer.classList.add("show");

			launchConfetti();
			sparkle();
			fadeInMusic();
			pulseToMusic();
			enableModal();

		} else {
			error.textContent = "Wrong date ❤️";
		}
	}

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
		bgm.play().catch(() => { });
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

		close.onclick = () => modal.style.display = "none";
	}

});
window.openEnvelope = function(el, imgSrc, message) {

	el.style.display = "none";

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

	document.getElementById("memory").appendChild(container);
};
window.openSection = function(sectionId) {

	const sections = document.querySelectorAll(".section");

	sections.forEach(sec => {
		sec.classList.add("hidden");
	});

	document.getElementById(sectionId).classList.remove("hidden");
};
//✅ ④ BGMに合わせて光らせる（簡易版）
function pulseToMusic() {
	const bgm = document.getElementById("bgMusic");
	const footer = document.getElementById("footerNav");

	if (!bgm || !footer) return;

	setInterval(() => {
		const level = bgm.volume;
		footer.style.boxShadow = `0 0 ${20 + level * 40}px gold`;
	}, 200);
}
//✅ ⑤ openEnvelope 強化版
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

		document.getElementById("memory").appendChild(container);

	}, 800);
};