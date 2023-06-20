
// Anonymous Function
// document.querySelector('button').addEventListener("click", function handleClick() {
//     alert("I got Clicked!");
// });



// document.querySelector('button').addEventListener("click",handleClick);


// function handleClick() {
//     alert("I got Clicked!");
// }



var drum_btn = document.getElementsByClassName('drum').length;

for (var i = 0; i<drum_btn; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",handleClick);
    
}


// function handleClick() {
//     alert("I got Clicked!");
// }

function handleClick() {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // console.log(this.innerHTML);
    // console.log(this.style.color = "Red"); // It triggered button object

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

}

//KeyBoard Event Listener to checkfor keypress

// document.addEventListener("keypress",function () {
//     alert("Key was Pressed");
// })

// document.addEventListener("keypress", function (event) {
//     console.log(event);
// });

// document.addEventListener("keypress", function KeyBoardplay(event) {
//     if (event.key == 'g'){
//         alert("G pressed");
//     }
// });
document.addEventListener("keypress",function(event) {
    makeSound(event.key); // whih key we've pressed;
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
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
    }
}

// document.addEventListener("keypress", KeyBoardplay);


// function KeyBoardplay(event) {
//     if (event.key == 'w'){
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//     }
//     else if (event.key == 'a'){
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//     }
//     else if (event.key == 's'){
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//     }
//     else if (event.key == 'd'){
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//     }
//     else if (event.key == 'j'){
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//     }
//     else if (event.key == 'k'){
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//     }
//     else if (event.key == 'l'){
//         var kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//     }
// }
