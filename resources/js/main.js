let iw = window.innerWidth;
let rootScreenWidth = 1366;
let rootFontPercentage = 59.28;
let html = document.querySelector("html")

if (iw <= 1366) {
    html.setAttribute("style", `font-size:${rootFontPercentage}%`);

} else {
    let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    html.setAttribute("style", `font-size:${currentFontSize}%`);
}

let btn=document.querySelector(".submitButton");
btn.onclick=function(){
    location.href = "submitted.html";
}







document.addEventListener("visibilitychange", function () {
    location.href = "submitted.html"
}, false);

window.addEventListener("blur", function () {
    location.href = "submitted.html"
}, false);

window.addEventListener("resize", function () {
    location.href = "submitted.html"
}, false)

