// import canvas functions
import { drawText } from "./canvas.js";
import { drawLineLength } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrow } from "./canvas.js";


const fig2 = document.getElementById('figure2')
const ctx=fig2.getContext('2d');

export function show() {
    
    drawText(ctx,"Lever in balance (2)", 10, 20, 24);

    drawLineLength(ctx, 30, 150, 220);
    drawText(ctx, "F",30,120, 15);
    drawText(ctx,"D", 53, 145, 15);
    drawArrow(ctx, 30, 125, 30, 150, "black");

    drawCircle(ctx,110, 150, 3, "red", true);
    drawText(ctx, "Fulcrum", 110, 170, 16, "red");

    drawText(ctx, "f",250,185, 15);
    drawText(ctx,"d", 170, 145, 15);
    drawArrow(ctx, 250, 165, 250, 150, "black");

    drawText(ctx,"Figure 2.", 10, 345, 18);

}