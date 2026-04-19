
// imported function
import { drawText, clearCanvas, polarAxis } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";

// local variables
const diagram = document.getElementById('figure10');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f10a");
awayButton.addEventListener('click', MoveAway);
const towardsButton = document.getElementById("f10t");
towardsButton.addEventListener('click', MoveTowards)
DisableButton(towardsButton);


const centreX = diagram.clientWidth /2;
const centreY = diagram.clientHeight /2;
let direction;

// functions
export function show(moving = false) {
    clearCanvas(diagram);
    drawText(ctx,"Position given by angle to pole and distance to", 10, 20, 16);
    drawText(ctx,"barycentre.", 10, 36, 16);
    drawText(ctx,"Figure 10.", 10, 350, 18);
    polarAxis(diagram);
   
    if(!moving) return;
    if(direction === "A") {
        
    }
    else if(direction === "T") {
        
    }

    if(moving) requestAnimationFrame(show);
}


// motion functions
function MoveAway(){
    DisableButton(this);
    direction = "A";
    show(true);
}


function MoveTowards(){
    DisableButton(this);
    direction = "T";
    show(true);
}