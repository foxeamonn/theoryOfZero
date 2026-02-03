// import canvas functions
import { drawText } from "./canvas.js";
import { drawLineLength } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrow } from "./canvas.js";

const fig1 = document.getElementById('figure1');
const ctx = fig1.getContext('2d');


export function show() {
    drawText(ctx,"Lever in balance (1)", 10, 20, 24);

    drawLineLength(ctx, 50, 150, 180);
    drawCircle(ctx, 110, 150, 3,"red", true);
    drawText(ctx, "Fulcrum", 110, 170, 16, "red");

    drawArrow(ctx, 50, 110, 50, 150, "black");
    drawText(ctx, "F",50,100, 15);
    drawText(ctx,"D", 73, 145, 15);

    drawArrow(ctx, 228, 170, 228, 150, "black");
    drawText(ctx, "f",227,190, 15);
    drawText(ctx,"d", 173, 145, 15);

    drawText(ctx,"Figure 1.", 10, 345, 18);
}