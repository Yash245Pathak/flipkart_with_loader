function playLoader(){
    setTimeout(loader, 5000);
}

function loader(){
    document.querySelector(".ball_container").style.display = "none";
    document.querySelector(".main_Content").style.display = "block";
}