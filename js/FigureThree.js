// note: this 

// import canvas functions
import { drawText } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrow } from "./canvas.js";
import { simpleArrow } from "./canvas.js";


const diagram = document.getElementById('figure3');
const ctx = diagram.getContext('2d');

export function show() {
    drawText(ctx,"With no mechanism to transmit,", 10, 20, 16,"black");
    drawText(ctx,"input force becomes potential energy. ", 10, 40, 16,"black");

    drawArrow(ctx, 50, 110, 50, 150, "black");
    simpleArrow(ctx, 220, 170, 20, "U", "black");

    drawCircle(ctx,110,150,5,"red",true);
    drawCircle(ctx,195,345,5,"red",true);
    drawText(ctx, " = Point zero (barycentre)", 200, 350, 12);

    drawText(ctx, "F",50,100, 15);
    drawText(ctx,"D", 73, 145, 15);
   
    // Set the dash pattern: [dashLength, gapLength]
    ctx.setLineDash([5, 5]);

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(225, 150);
    ctx.stroke();

    drawText(ctx, "f",227,190, 15);
    drawText(ctx,"d", 173, 145, 15);

    drawText(ctx,"Figure 6.", 10, 345, 18);

}