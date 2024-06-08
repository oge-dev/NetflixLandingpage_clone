// JavaScript to toggle the content visibility and change icons

// Get all elements with the class "collapsible"
var coll = document.getElementsByClassName("collapsible");

// Loop through each "collapsible" element
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // Close all other collapsibles
    for (let j = 0; j < coll.length; j++) {
      // Check if the current element is not the clicked one
      if (coll[j] !== this) {
        // Remove the "active" class from other collapsibles
        coll[j].classList.remove("active");
        // Hide the content of other collapsibles
        coll[j].nextElementSibling.style.display = "none";
        // Change the icon of other collapsibles to "plus"
        coll[j].querySelector(".icon").classList.remove("minus");
        coll[j].querySelector(".icon").classList.add("plus");
      }
    }
    // Toggle the "active" class of the clicked collapsible
    this.classList.toggle("active");
    // Get the content and icon of the clicked collapsible
    var content = this.nextElementSibling;
    var icon = this.querySelector(".icon");
    // Toggle the visibility of the content and change the icon
    if (content.style.display === "block") {
      content.style.display = "none"; // Hide the content
      icon.classList.remove("minus"); // Change the icon to "plus"
      icon.classList.add("plus");
    } else {
      content.style.display = "block"; // Show the content
      icon.classList.remove("plus"); // Change the icon to "minus"
      icon.classList.add("minus");
    }
  });
}
