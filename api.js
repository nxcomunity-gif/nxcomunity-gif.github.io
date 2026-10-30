// percikan api naik di background (dipakai semua halaman)
(function () {
  const wadah = document.createElement("div");
  wadah.className = "api";
  for (let n = 0; n < 26; n++) {
    const p = document.createElement("i");
    const s = 2 + Math.random() * 4;
    p.style.width = p.style.height = s + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 6 + Math.random() * 8 + "s";
    p.style.animationDelay = -Math.random() * 12 + "s";
    p.style.setProperty("--geser", (Math.random() * 80 - 40) + "px");
    wadah.appendChild(p);
  }
  document.body.prepend(wadah);
  const bg = document.createElement("div");
  bg.className = "bg";
  document.body.prepend(bg);
})();
