function fade()
{
var myDiv = document.getElementById("myDiv");

document.getElementById("in").addEventListener("click", function () {
    myDiv.className = myDiv.className.replace(/fade-out/, "").trim() + " fade-in";
}, false);

document.getElementById("out").addEventListener("click", function () {
    myDiv.className = myDiv.className.replace(/fade-in/, "").trim() + " fade-out";
}, false);
}