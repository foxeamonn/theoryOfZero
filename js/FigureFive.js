
// import canvas functions
import { drawText } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrow } from "./canvas.js";


const fig5 = document.getElementById('figure5');
const ctx = fig5.getContext('2d');

export function show() {

    drawText(ctx,"The relationship between force and", 10, 20, 16);
    drawText(ctx,"distance does not depend on there ", 10, 40, 16);
    drawText(ctx,"being a mechanism to transmit the force.", 10, 60, 16);

    drawCircle(ctx,110,150,5,"black",true);
    drawCircle(ctx,233,345,5,"black",true);
    drawText(ctx, " = Barycentre", 240, 350, 12);

    drawArrow(ctx, 50, 110, 50, 150, "black");

    drawText(ctx, "F",50,100, 15);
    drawText(ctx,"D", 73, 145, 15);

    drawArrow(ctx, 228, 110, 228, 150, "black");

    // Set the dash pattern: [dashLength, gapLength]
    ctx.setLineDash([5, 5]);

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(225, 150);
    ctx.stroke();

    drawText(ctx, "f",227,190, 15);
    drawText(ctx,"d", 173, 145, 15);

    drawText(ctx,"Figure 5.", 10, 350, 18);
}