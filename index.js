let hiddenEls = document.getElementsByClassName("hidden");

document.addEventListener("click", function (e) {
  if (e.target.id === "view-more") {
    for (let element of hiddenEls) {
      element.style.display = "block";
    }
    document.getElementById("more").style.display = "none";
    document.getElementById("less").style.display = "flex";
  } else if (e.target.id === "view-less") {
    document.getElementById("less").style.display = "none";
    document.getElementById("more").style.display = "flex";
    for (let element of hiddenEls) {
      element.style.display = "none";
    }
  }
});
