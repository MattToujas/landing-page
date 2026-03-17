const form = document.getElementById("form");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  btn.classList.add("loading");
  btn.disabled = true;

  // send simulation
  setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;

    form.reset()

  }, 1000);

});