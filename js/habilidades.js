document.addEventListener("DOMContentLoaded", () => {
  // === Barras técnicas ===
  const progressBars = document.querySelectorAll(".progress");

  const animateBars = () => {
    progressBars.forEach(bar => {
      const value = bar.getAttribute("data-value");
      bar.style.width = value + "%";
    });
  };

  // === Círculos blandos ===
  const circles = document.querySelectorAll(".circle");

  const animateCircles = () => {
    circles.forEach(circle => {
      const value = circle.getAttribute("data-value");
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= value) {
          clearInterval(interval);
        } else {
          progress++;
          circle.style.background = `conic-gradient(#00f2fe ${progress}%, #4facfe ${(progress / 2) + 30}%, #8e2de2 ${progress}%, #222 ${progress}% 100%)`;
          circle.querySelector("span").innerText = progress + "%";
        }
      }, 20); // velocidad del llenado
    });
  };

  // === Observer para activar animaciones ===
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars();
        animateCircles();
        observer.disconnect();
      }
    });
  });

  observer.observe(document.querySelector(".habilidades-container"));
});
