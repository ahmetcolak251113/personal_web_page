/**
 * shell.js — injected shared shell for every page except index.
 * Adds the film grain layer and the fixed hero-video background
 * (with the same ambient-blob fallback as the landing page).
 */
(function () {
  "use strict";

  var VIDEO_SRC =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4";

  /* --- Film grain --- */
  if (!document.querySelector(".grain")) {
    var g = document.createElement("div");
    g.className = "grain";
    g.setAttribute("aria-hidden", "true");
    document.body.appendChild(g);
  }

  /* --- Fixed video background --- */
  var wrap = document.querySelector(".wrap");
  if (wrap && !document.querySelector(".hero-photo")) {
    var hp = document.createElement("div");
    hp.className = "hero-photo";
    hp.setAttribute("aria-hidden", "true");
    hp.innerHTML =
      '<video src="' + VIDEO_SRC + '" autoplay muted loop playsinline preload="auto"></video>';
    document.body.prepend(hp);

    var fallbackBlobs = document.querySelector(".aurora");
    if (!fallbackBlobs) {
      fallbackBlobs = document.createElement("div");
      fallbackBlobs.className = "aurora";
      fallbackBlobs.setAttribute("aria-hidden", "true");
      fallbackBlobs.innerHTML =
        '<span class="a1"></span><span class="a2"></span><span class="a3"></span>';
      document.body.appendChild(fallbackBlobs);
    }

    var vid = hp.querySelector("video");
    var showFallback = function () { document.body.classList.add("no-video"); };
    vid.addEventListener("error", showFallback);
    vid.addEventListener("loadeddata", function () {
      document.body.classList.remove("no-video");
      fallbackBlobs.style.display = "none";
    });
    setTimeout(function () {
      if (vid.readyState < 2) showFallback();
    }, 4000);
  }
})();
