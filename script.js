var burger = document.querySelector(".burger");
var navbar = document.querySelector(".nav-bar");

burger.onclick = function() {
    navbar.classList.toggle("active");
}

// Select all menu items within the navigation bar
var menuItems = document.querySelectorAll(".nav-bar .navlist");

// Attach a click event listener to each menu item
menuItems.forEach(function(menuItem) {
    menuItem.onclick = function() {
        // Remove the "active" class from the navigation bar to close the toggle
        navbar.classList.remove("active");
    }
});
