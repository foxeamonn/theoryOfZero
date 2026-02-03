
// import canvas functions
import { drawText } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrow } from "./canvas.js";


const fig6 = document.getElementById("figure6");
const ctx = fig6.getContext('2d');

export function show(){
    drawText(ctx,"With no mechanism to transmit the force,", 10, 20, 16);
    drawText(ctx,"applied force becomes kinetic energy. ", 10, 40, 16);
    drawCircle(ctx,110,150,5,"black",true);
    drawCircle(ctx,233,345,5,"black",true);
    drawText(ctx, " = Barycentre", 240, 350, 12);
    drawArrow(ctx, 50, 110, 50, 150, "black");
    drawText(ctx, "Ke",50,100, 15);

    // Set the dash pattern: [dashLength, gapLength]
    ctx.setLineDash([5, 5]);

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(225, 150);
    ctx.stroke();

    drawText(ctx,"Figure 6.", 10, 350, 18);
}