// this is actually figure 7

// import canvas functions
import { drawText } from "./canvas.js";
import { polarAxis } from "./canvas.js";
import { drawBox } from "./canvas.js";


const diagram = document.getElementById('figure12');
const ctx = diagram.getContext('2d');

const centreX = diagram.clientWidth /2;
const centreY = diagram.clientHeight /2;


export function show() {
   
    drawText(ctx,"Mass times distance from barycentre ", 10, 20, 16);
    drawText(ctx,"is the same for both bodies. ", 10, 36, 16);
    polarAxis(diagram);
    drawBox(ctx, centreX, centreY, 150, 30, 1, "green");
    drawBox(ctx, centreX, centreY, -100, -45, 1, "blue");
    drawText(ctx, "m1", 60, 160, 12, "blue");
    drawText(ctx, "d1", 125, 200, 12, "blue");
    drawText(ctx, "d2", 250, 170, "green");
    drawText(ctx, "m2", 335, 200, "green")

    drawText(ctx,"Figure 7.", 10, 345, 18);
}