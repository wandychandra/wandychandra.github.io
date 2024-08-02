var character = document.getElementById("character");
var block = document.getElementById("block");

var count = 0;
var output = document.getElementById('output');

function jump() {

    count = count + 1;
    output.innerHTML = count;
    
    if(character.classList != "animate") {
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<40 && blockLeft>0 && characterTop>=90) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("MUACH! uve been kissed by the chigga.");
    }
},10);