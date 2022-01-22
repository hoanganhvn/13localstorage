let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    document.body.classList.toggle("black");
    let black = document.querySelector(".black");
    if (black) {
        localStorage.setItem('color', "black");
    } else {
        localStorage.setItem('color', "white");
    }
});