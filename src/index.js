import { getMessage } from "./app.js";

function displayMessage() {
    document.getElementById("message").innerText = getMessage();
}

console.log("JavaScript Project Loaded!");
