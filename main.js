// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle successful response
  function handleResponse(response, targetElement) {
    if (response.ok) {
      response
        .text()
        .then(
          (html) => (document.getElementById(targetElement).innerHTML = html)
        );
    } else {
      // If response is not ok, fetch the 404 page
      fetch("404.html")
        .then((response) => response.text())
        .then(
          (html) => (document.getElementById(targetElement).innerHTML = html)
        );
    }
  }

  // Fetch and insert navbar content
  fetch("navbar.html")
    .then((response) => handleResponse(response, "navbar"))
    .catch((error) => console.error("Error fetching navbar:", error));

  // Fetch and insert skills content
  fetch("skills.html")
    .then((response) => handleResponse(response, "skills"))
    .catch((error) => console.error("Error fetching skills:", error));

  // Fetch and insert description content
  fetch("description.html")
    .then((response) => handleResponse(response, "description"))
    .catch((error) => console.error("Error fetching description:", error));

  // Fetch and insert courses content
  fetch("courses.html")
    .then((response) => handleResponse(response, "courses"))
    .catch((error) => console.error("Error fetching courses:", error));

  // Fetch and insert projects content
  fetch("projects.html")
    .then((response) => handleResponse(response, "projects"))
    .catch((error) => console.error("Error fetching projects:", error));

  // Fetch and insert footer content
  fetch("footer.html")
    .then((response) => handleResponse(response, "footer"))
    .catch((error) => console.error("Error fetching footer:", error));
});
