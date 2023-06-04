function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");

  gradient.addEventListener("mousemove", moveHandler);
  gradient.addEventListener("mouseout", outHandler);

  function moveHandler(e) {
    console.dir(e);
    const offsetX = e.offsetX;
    const element = e.target;
    const clientX = element.clientWidth;
    let percentage = Math.trunc((offsetX / clientX) * 100);

    result.textContent = `${percentage}%`;
  }

  function outHandler() {
    result.textContent = "";
  }
}
