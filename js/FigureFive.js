
// imported functions
import { drawText, clearCanvas, drawCircle } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";

// local variables
const diagram = document.getElementById('figure5');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f5a");
awayButton.addEventListener('click', MoveAway);
const towardsButton = document.getElementById("f5t");
towardsButton.addEventListener('click', MoveTowards)
DisableButton(towardsButton);

let direction;
let x = 45;

// functions
export function show(moving = false) {
    clearCanvas(diagram);
    drawText(ctx,"The perspective of observer A.", 10, 20, 16);
    drawText(ctx,"A", 30, 180,24, "blue");
    drawText(ctx,"B",x, 180, 24, "green");
    drawCircle(ctx, 38, 180,2,"red",true);
    drawCircle(ctx,240, 343, 2, "red", true);
    drawText(ctx,"  = mass point A.", 240, 348, 14,"red");
    drawText(ctx,"Figure 5.", 10, 350, 18);

    if(!moving) return;
    if(direction === "A") {
        x += 3;
        if(x >= 300 ) {moving = false; EnableButton(towardsButton);}
    }
    else if(direction === "T") {
        x -= 3;
        if (x <= 45 ) {moving = false; EnableButton(awayButton)}
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

