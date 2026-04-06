
// note: this is actually figure 5

// imported function
import { drawText, clearCanvas, drawCircle } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";

// local variables
const diagram = document.getElementById('figure7');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f7a");
awayButton.addEventListener('click', MoveAway);
const towardsButton = document.getElementById("f7t");
towardsButton.addEventListener('click', MoveTowards)
DisableButton(towardsButton);


const centreX = diagram.clientWidth /2;
const centreY = diagram.clientHeight /2;
let direction;
let xa = centreX - 20;
let xb = centreX +5;

// functions
export function show(moving = false) {
    clearCanvas(diagram);
    drawText(ctx,"The true state - both observers are moving.", 10, 20, 16);
    drawText(ctx,"relative to their barycentre.", 10, 36, 16);
    drawText(ctx,"A", xa, 180, 24, "blue");
    drawText(ctx,"B",xb, 180, 24, "green");
    drawCircle(ctx,centreX, centreY, 2, "red", true);
    drawText(ctx,"  = barycentre.", 240, 348, 14,"red");
    drawCircle(ctx,240, 343, 2, "red", true);
    drawText(ctx,"Figure 5.", 10, 350, 18);

    if(!moving) return;
    if(direction === "A") {
        xa -= 3;
        xb += 3;
        if(xa <=20 ) {moving = false; EnableButton(towardsButton)}
    }
    else if(direction === "T") {
        xa += 3;
        xb -=3;
        if(xa >=(centreX-20) ){moving = false; EnableButton(awayButton)}   
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