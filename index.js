for ( var i=0 ; i<document.querySelectorAll(".drum").length ; i++ ) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        //which button triggered event
        //this.style.color = "white";
        console.log(this.innerHTML);

        detectKeyPress(this.innerHTML);
        
        buttonAnimation(this.innerHTML);

    });
}

// Detect key pressed
document.addEventListener('keydown', function(keypressed){
    
    console.log(keypressed);
    
    detectKeyPress (keypressed.key);

    buttonAnimation(keypressed.key);
});

function detectKeyPress (key){
    switch (key) {
        
        case "d":
                var sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
            break;
        case "f":
                var sound = new Audio("sounds/snare.mp3");
                sound.play();
            break;
        case "g":
                var sound = new Audio("sounds/snare-roll.mp3");
                sound.play();
            break;
        case "j":
                var sound = new Audio("sounds/hihat-closed.mp3");
                sound.play();
            break;
        case "k":
                var sound = new Audio("sounds/hihat-open.mp3");
                sound.play();
            break;
        case "r":
                var sound = new Audio("sounds/crash.mp3");
                sound.play();
            break;
        case "u":
                var sound = new Audio("sounds/ride1.mp3");
                sound.play();
            break;
        case "i":
                var sound = new Audio("sounds/ride2.mp3");
                sound.play();
            break;
        case "m":
                var sound = new Audio("sounds/ribel1.mp3");
                sound.play();
            break;
        case "z":
                var sound = new Audio("sounds/low-tom1.mp3");
                sound.play();
            break; 
        case "x":
                var sound = new Audio("sounds/low-tom2.mp3");
                sound.play();
            break; 
        case "c":
                var sound = new Audio("sounds/high=tom1.mp3");
                sound.play();
            break; 
        case "v":
                var sound = new Audio("sounds/high=tom1.mp3");
                sound.play();
            break; 
        default: 
            console.log(key);
    }
}


document.addEventListener('click', function(event) {
    console.log(event);
});

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
