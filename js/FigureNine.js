
// inertial motion after acceleration

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
let xa =160;
let xb = 182;

// functions
export function show(moving = false) {
    clearCanvas(diagram);
    drawText(ctx,"The position of the barycentre of A and B has",5,20,16);
    drawText(ctx,"moved closer to body B. This changes the distance",5,36,16);
    drawText(ctx,"travelled by the bodies to the barycentre.",5,52,16);

    drawText(ctx,"Figure 9.", 10, 350, 18);
    drawCircle(ctx, 180, 180, 2, "red", true);
    drawText(ctx,"  = barycentre.", 240, 348, 14,"red");
    drawCircle(ctx,240, 343, 2, "red", true);

    drawText(ctx,"A", xa, 180, 24,  "blue");
    drawText(ctx,"B", xb, 180, 48, "green");
    if(!moving) return;

    if(direction === "A") {
       xa -= 2;
       xb +=1;
       if(xa <=30) {moving = false; EnableButton(towardsButton)}
    }
    else if(direction === "T") {
       xa += 2;
       xb -= 1;
       if(xa === 160){moving = false; EnableButton(awayButton)}
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
