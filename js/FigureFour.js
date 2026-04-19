// imports
import { drawText, drawCircle, drawArrowTriangle, drawLineLength } from "./canvas.js"; 
import { clearCanvas, drawBodyTriangle, DrawTriangleObj } from "./canvas.js";
import { DisableButton, EnableButton } from "./utilities.js";
import { triangle, Update } from "./triangle.js";
import { showCoord } from "./CoOrdinates.js";


const diagram = document.getElementById('figure4');
const ctx = diagram.getContext('2d');
const awayButton = document.getElementById("f4a");
awayButton.addEventListener('click', MoveAway);
const towardsButton = document.getElementById("f4t");
towardsButton.addEventListener('click', MoveTowards)
DisableButton(towardsButton);

let direction = "A";
const centreX= diagram.width/2;
const centreY = diagram.height/2;

const triangleOne = new MakeTriangle(centreX, centreY, 90, 60, "blue",  false, "triangleOne");
const triangleTwo = new MakeTriangle(centreX, centreY, 60, 90, "green", false, "triangleTwo");

triangleOne.change = .9;
triangleTwo.change = .6;


// end of variable definitions

// start of functions

//showCoord(diagram);
export function show(moving = false) {
   
    clearCanvas(diagram);

    drawText(ctx,"As the distance between two moving bodies changes,  ",10,16,16);
    drawText(ctx,"input energy and potential energy changes inversely with distance from ",10,35,16);
    drawText(ctx,"the barycentre. ",10,52,16);

    DrawTriangleObj(ctx, triangleOne);
    DrawTriangleObj(ctx, triangleTwo);
  

    drawText(ctx,"Figure 4.", 10, 350, 18);
    drawCircle(ctx,centreX,centreY,2,"red",true); 
    
    drawText(ctx, "= rate of change",450, 275, 12);
    drawText(ctx,"-", 440, 275, 12);

    drawText(ctx,"= barycentre.", 450, 290, 12,"red");
    drawCircle(ctx, 440, 285, 2, "red", true);
    
    drawCircle(ctx, 440, 300 ,2,"green",true);
    drawText(ctx,"= mass point B.", 450, 305, 12,"green");

    drawCircle(ctx, 440, 315, 2,"blue",true);
    drawText(ctx,"= mass point A.", 450, 320, 12,"blue");

    drawText(ctx,"-", 440, 335, 12, "green");
    drawText(ctx, "= input energy",450, 335, 12, "green");

    drawText(ctx,"-", 440, 350, 12, "blue");
    drawText(ctx, "= distance (p.e)",450, 350, 12, "blue");

    if(!moving) return;
    // motion
    Update(triangleOne, direction);
    Update(triangleTwo, direction);

    if(direction ==="A" && triangleOne.base >= 220) {
        moving = false;
        EnableButton(towardsButton);
    }
    if(direction === "T" && triangleOne.height >= 60){
        moving = false;
        EnableButton(awayButton);
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