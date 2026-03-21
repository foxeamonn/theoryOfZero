
// imported functions
import { drawText, clearCanvas, drawCircle } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";

// local variables
const diagram = document.getElementById('figure9');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f9a");
awayButton.addEventListener('click', MoveAway);
const towardsButton = document.getElementById("f9t");
towardsButton.addEventListener('click', MoveTowards)
DisableButton(towardsButton);
let direction;

// functions
export function show(moving = false) {
    clearCanvas(diagram);
     drawText(ctx,"The position of the barycentre of A and B has",5,20,16);
    drawText(ctx,"changed. ",5,36,16);
    drawText(ctx,"Figure 9.", 10, 350, 18);
    drawCircle(ctx, 180, 180, 2, "red", true);

    if(!moving) return;
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
