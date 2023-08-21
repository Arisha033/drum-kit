// Detecting Button press
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);          
        buttonAnimate(buttonInnerHTML);      
    });
}

// Detecting Keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimate(event.key);
});

// Plays sound corresponding to the key press
function makeSound(key){
    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
        
}
}

// Animate button press
function buttonAnimate(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");           //add class to buttons
   //Timeout method in JS  
    setTimeout(function(){
        activeButton.classList.remove("pressed");     //remove class after an iterval of time
    }, 100);

}






