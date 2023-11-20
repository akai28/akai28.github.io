// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Fetch and insert navbar content
  fetch("navbar.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("navbar").innerHTML = html));

  // Fetch and insert skills content
  fetch("skills.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("skills").innerHTML = html));

  // Fetch and insert description content
  fetch("description.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("description").innerHTML = html));

  // Fetch and insert courses content
  fetch("courses.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("courses").innerHTML = html));

  // Fetch and insert projects content
  fetch("projects.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("projects").innerHTML = html));

  // Fetch and insert contact content
  // fetch("contact.html")
  //   .then((response) => response.text())
  //   .then((html) => (document.getElementById("contact").innerHTML = html));

  // Fetch and insert footer content
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("footer").innerHTML = html));
});
