const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll("#navigation a");

menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");
  });
});
