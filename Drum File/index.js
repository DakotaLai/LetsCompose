const arr = ["w","a","s","d","j","k","l"];
const dict = [
    {key: "w", audio: "crash.mp3"},
    {key: "a", audio: "kick-bass.mp3"},
    {key: "s", audio: "snare.mp3"},
    {key: "d", audio: "tom-1.mp3"},
    {key: "j", audio: "tom-2.mp3"},
    {key: "k", audio: "tom-3.mp3"},
    {key: "l", audio: "tom-4.mp3"},
]

for (let i = 0; i < arr.length; i++) {
    arr[i] = document.getElementsByClassName(arr[i]+" drum")[0];
}

document.addEventListener('click', pressClick);
document.addEventListener('keypress',pressClick);

function pressClick(e) {
    var pointer;
    if (e.type === 'click') {
        pointer = e.target.innerHTML;
        
    } else {
        pointer = e.key;
    }

    switch (pointer) {
        case "w":
            keyInstruction(0);
            break;
        case "a":
            keyInstruction(1);
            break;
        case "s":
            keyInstruction(2);
            break;
        case "d":
            keyInstruction(3);
            break; 
        case "j":
            keyInstruction(4);
            break;
        case "k":
            keyInstruction(5);
            break;
        case "l":
            keyInstruction(6);
            break;  
        default:
            console.log("Wrong key pressed");     
    }
}

function pressedHover (button) {
    button.classList.add('pressed');
    setTimeout(()=>{
        button.classList.remove('pressed');},200
    );
}

function keyInstruction (number) {
    console.log(arr[number]);
    var audio = new Audio('sounds/'+dict[number].audio);
    audio.play();
    pressedHover(arr[number]);
}
