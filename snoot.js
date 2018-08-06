// snoot.js
// Form Validation

// Author: Tiffany Altagracia
// Date: 8.6.18
"use strict";

// Function to remove select list defaults 
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select list:" + emptyBoxes.length);
}

// Page loads event handlers

if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}