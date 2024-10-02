// Elements
const email = document.getElementById("email");
const nameEl = document.getElementById("name");
const filter =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const paragraph = document.createElement("p");
const projectImgDiv = document.querySelectorAll(".project__img");
const projectsEl = document.querySelector(".projects");
const btnSubmit = document.getElementById("btn-submit");

// Functions
projectImgDiv.forEach((div, i) => {
  div.style.backgroundImage = `url(assets/png/project-img-${i + 1}.png)`;
});

// Email validation
function showAlert() {
  // checks email
  if (!filter.test(email.value)) {
    email.focus;

    email.style.borderBottom = "0.0625rem solid #FF6F5B";

    if (!document.querySelector(".error")) {
      email.insertAdjacentHTML(
        "afterend",
        "<h5 class='error' style='color:#ff6f5b; font-size:0.75rem; font-style:normal; font-weight:500; line-height:1rem; letter-spacing:-0.01044rem; margin-bottom:15px'>Sorry, invalid format here</h5>"
      );
    }

    // checks name
    if (nameEl.value === "") {
      nameEl.style.borderBottom = "0.0625rem solid #FF6F5B";

      if (!document.querySelector(".name-error")) {
        nameEl.insertAdjacentHTML(
          "afterend",
          "<h5 class='name-error' style='color:#ff6f5b; font-size:0.75rem; font-style:normal; font-weight:500; line-height:1rem; letter-spacing:-0.01044rem'>Sorry, invalid format here</h5>"
        );
      }
    }

    return false;
  } else null;
}

// Event Listeners
projectsEl.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("project__img")) {
    const id = e.target.children[0].getAttribute("data-id");
    e.target.children[0].classList.add("project__links-hovered");
  }
});

projectsEl.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("project__links-hovered"))
    e.target.classList.remove("project__links-hovered");
});

btnSubmit.addEventListener("click", (e) => {
  showAlert();
});

document.addEventListener("DOMContentLoaded", function (event) {
  const scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onscroll = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};
