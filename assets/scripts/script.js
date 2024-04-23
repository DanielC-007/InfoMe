console.log("Hello World!");

function off() {
  alert("Esta função está temporariamente desativada");
}

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = localStorage.getItem("theme");
  const sunMoon = document.getElementById("sunMoon");

  if (currentTheme === "dark") {
    sunMoon.src = "../../public/imgs/sun.png";
  } else {
    sunMoon.src = "../../public/imgs/moon.png";
  }
});

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  const sunMoon = document.getElementById("sunMoon");

  if (currentTheme === "dark") {
    sunMoon.src = "../../public/imgs/sun.png";
    localStorage.setItem("theme", "light");
  } else {
    sunMoon.src = "../../public/imgs/moon.png";
    localStorage.setItem("theme", "dark");
  }
  changeTheme(localStorage.getItem("theme"));
}

function changeTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.style.setProperty("--corTema1", "black");
    root.style.setProperty("--corTema2", "white");
    root.style.setProperty("--corTema3", "#1c1c1c");
    root.style.setProperty("--corTema4", "#bdbdbd");
    root.style.setProperty("--corTema5", "#2c2c2c");
    root.style.setProperty("--corTema6", "#dddddd");
    root.style.setProperty("--corTemabnt1", "yellow");
    root.style.setProperty("--corTemabnt2", "navy");
  } else if (theme === "light") {
    root.style.setProperty("--corTema1", "white");
    root.style.setProperty("--corTema2", "black");
    root.style.setProperty("--corTema3", "#dddddd");
    root.style.setProperty("--corTema4", "#333333");
    root.style.setProperty("--corTema5", "#f0f0f0");
    root.style.setProperty("--corTema6", "#222222");
    root.style.setProperty("--corTemabnt1", "blue");
    root.style.setProperty("--corTemabnt2", "green");
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  const sunMoon = document.getElementById("sunMoon");
  if (currentTheme === "dark") {
    sunMoon.src = "../../public/imgs/moon.png";
    localStorage.setItem("theme", "light");
  } else {
    sunMoon.src = "../../public/imgs/sun.png";
    localStorage.setItem("theme", "dark");
  }
  changeTheme(localStorage.getItem("theme"));
}

changeTheme(localStorage.getItem("theme"));
