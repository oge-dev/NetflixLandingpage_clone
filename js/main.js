// JavaScript to toggle the content visibility and change icons
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // Close all other collapsibles
    for (let j = 0; j < coll.length; j++) {
      if (coll[j] !== this) {
        coll[j].classList.remove("active");
        coll[j].nextElementSibling.style.display = "none";
        coll[j].querySelector(".icon").classList.remove("minus");
        coll[j].querySelector(".icon").classList.add("plus");
      }
    }
    // Toggle the clicked collapsible
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var icon = this.querySelector(".icon");
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove("minus");
      icon.classList.add("plus");
    } else {
      content.style.display = "block";
      icon.classList.remove("plus");
      icon.classList.add("minus");
    }
  });
}
