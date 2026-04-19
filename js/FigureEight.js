// acceleration. 

// imported function
import { drawText, clearCanvas, drawCircle, drawArrow } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";

// local variables
const diagram = document.getElementById('figure8');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f8a");
awayButton.addEventListener('click', Increase);
const towardsButton = document.getElementById("f8t");
towardsButton.addEventListener('click', Decrease)
DisableButton(towardsButton);

let x = (diagram.clientWidth / 2)-10;
let y = diagram.clientHeight / 2;
let bFont = 24;
let direction;


// functions
export function show(moving = false) {
    clearCanvas(diagram);
    drawText(ctx,"The barycentre changes with B accelerating",5,20,16);
    drawText(ctx,"(changing force/energy levels).", 5,36,16);
    drawText(ctx,"Figure 8.", 10, 350, 18);

    drawText(ctx,"A", 30, 180, 24, "blue");
    drawText(ctx,"B", 315, 180, bFont, "green");
    drawCircle(ctx, x, y, 2, "red", true);

    drawText(ctx,"  = barycentre.", 240, 348, 14,"red");
    drawCircle(ctx,240, 343, 2, "red", true);

    drawArrow(ctx, 50, 180, x-5, 180, "black");
    drawArrow(ctx, 315, 180, x+5, 180, "black");
    if(!moving) return;
   
    if(direction === "A"){
        x += 1;
        bFont += 1;
         if(bFont >= 120){
            moving = false;
            EnableButton(towardsButton);
         }
    }
   
    if(direction === "T"){
        x -= 1;
        bFont -= 1;
        if(bFont <=24 ){
            moving = false;
            EnableButton(awayButton);
        }
    }
   
    if(moving) requestAnimationFrame(show);
}

// motion functions
function Increase(){
    DisableButton(this);
    direction = "A";
    show(true);
}


function Decrease(){
    DisableButton(this);
    direction = "T";
    show(true);
}