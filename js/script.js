// togle kelas active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// proses onclick diluar humberger maka nav hilang

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function message() {
  var Name = document.getElementById("names");
  var hp = document.getElementById("hp");
  var nomeja = document.getElementById("nomeja");
  var msg = document.getElementById("msg");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");

  if (
    Name.value === "" ||
    hp.value === "" ||
    nomeja.value === "" ||
    msg.value === ""
  ) {
    danger.style.display = "block";
  } else {
    setTimeout(() => {
      Name.value = "";
      hp.value = "";
      nomeja.value = "";
      msg.value = "";
    }, 2000);

    success.style.display = "block";
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 4000);
}
