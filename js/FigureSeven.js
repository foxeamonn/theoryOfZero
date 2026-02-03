
// import canvas functions
import { drawText } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawBodyTriangle } from "./canvas.js";
import { moveToCentre } from "./canvas.js";
import { moveToZero } from "./canvas.js";
import { toggleButton } from "./toggle.js";
import { clearCanvas } from "./canvas.js";
import { completelyClear } from "./canvas.js";


const fig7 = document.getElementById('figure7');
const ctx = fig7.getContext('2d');
const away = document.getElementById('f7a');
const towards = document.getElementById('f7t');
away.addEventListener('click', toggleButton);
towards.addEventListener('click', toggleButton);

let triangleOne = {base: 90, height:60, direction:"R", colour: "blue", angle: 0, area:5400};
let triangleTwo = {base: 60, height:90, direction:"L", colour: "green", angle: 0, area:5400};

toggleButton(towards);

// function
export function show( moving) {
    
    //moveToZero(fig7);
    completelyClear(fig7);
    drawText(ctx,"As the distance between two bodies changes, the ratio of ",10,16,16);
    drawText(ctx,"applied force to input force changes inversely with distance ",10,35,16);
    drawText(ctx,"from the fulcrum. ",10,52,16);
    drawText(ctx,"Figure 7.", 10, 350, 18);
    

    moveToCentre(fig7);
    drawCircle(ctx,100,105,2,"red",true);
    drawText(ctx,"= fulcrum.", 105, 110, 12,"red");
    drawText(ctx,"| = applied force", 100,125, 12, "green");
    drawCircle(ctx,100,135,2,"green",true);
    drawText(ctx,"= application point.", 105, 140, 12,"green");
    drawText(ctx,"- = input force", 100,155, 12, "blue");
    drawCircle(ctx,100,165,2,"blue",true);
    drawText(ctx,"= application point.", 105, 170, 12,"blue");


    drawCircle(ctx,0,0,2,"red",true);
    drawBodyTriangle(ctx, triangleOne);
    drawBodyTriangle(ctx, triangleTwo);

    let direction = triangleOne.direction;
    // motion
    if(direction === "L"){
        triangleOne.base+=.6;
        triangleOne.base+=.4;
        triangleTwo.base+=.6;
        triangleTwo.base+=.4;
    }
    else{
        triangleOne.base -=.6;
        triangleOne.base -=.4;
        triangleTwo.base -=.6;
        triangleTwo.base -=.4;
    }

    triangleOne.height = triangleOne.area / triangleOne.base;
    triangleTwo.height = triangleTwo.area / triangleTwo.base;

    if(direction ==="A" && triangleOne.base >= 228) {
        moving = false;
        toggleButton(towards);
    }
    if(direction === "T" && triangleOne.height >= 60){
        moving = false;
        toggleButton(away);
    }

    if(moving) requestAnimationFrame(show);

}
