document.addEventListener("DOMContentLoaded", function() {
    var profileIcon = document.getElementById("profile_icon");
    var dropdownMenu = document.getElementById("dropDownMenu");

    // Toggle the dropdown when the profile_icon is clicked
    profileIcon.addEventListener("click", function() {
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
        } else {
            dropdownMenu.style.display = "none";
        }
    });
});