
// imported functions
import { drawText, clearCanvas, drawCircle } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";

// local variables
const diagram = document.getElementById('figure6');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f6a");
awayButton.addEventListener('click', MoveAway);
const towardsButton = document.getElementById("f6t");
towardsButton.addEventListener('click', MoveTowards)
DisableButton(towardsButton);

let direction;
let x = 285;

// functions
export function show(moving = false) {
    clearCanvas(diagram);
    drawText(ctx,"The perspective of observer B.", 10, 20, 16);
    drawText(ctx,"A", x, 180, 24, "blue");
    drawText(ctx,"B",300, 180, 24, "green");
    drawCircle(ctx, 308, 176, 2, "red", true);
    drawCircle(ctx,240, 343, 2, "red", true);
    drawText(ctx,"  = mass point B.", 240, 348, 14,"red");
    drawText(ctx,"Figure 6.", 10, 350, 18);

    if(!moving) return;
    if(direction === "A") {
        x -= 3;
        if(x <= 45 ) {moving = false; EnableButton(towardsButton);}
    }
    else if(direction === "T") {
        x += 3;
        if (x >= 285 ) {moving = false; EnableButton(awayButton)}
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

