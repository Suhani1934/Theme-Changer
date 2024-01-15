let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let mode = "dark";
btn.addEventListener("click", () => {
    if (mode === "dark") {
        body.style.backgroundColor = "white";
        btn.style.backgroundColor = "aqua";
        btn.style.border = "3px solid black";
        btn.style.color = "blue";
        btn.style.boxShadow = "5px 5px 15px 5px black";
        mode = "light";
    }
    else {
        body.style.backgroundColor = "black";
        btn.style.backgroundColor = "red";
        btn.style.border = "3px solid aqua";
        btn.style.color = "aqua";
        btn.style.boxShadow = "5px 5px 15px 5px #b9b6b676";
        mode = "dark";
    }
});
