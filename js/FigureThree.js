// import canvas functions
import { drawText } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrowTriangle } from "./canvas.js";


const fig3 = document.getElementById('figure3');
const ctx = fig3.getContext('2d');


export function show() {
    
    drawText(ctx,"Relationship between", 10, 20, 24);
    drawText(ctx, "forces", 10, 44, 24);

    drawArrowTriangle(ctx, 50, 220, 150, 150, "R");

    drawText(ctx, "a.f",25, 130);


    drawText(ctx, "i.f", 105, 215);
    drawText(ctx, "u.f", 125, 130);

    drawText(ctx, "Application", 30,240, 14, "black");
    drawText(ctx, "point.", 30,254, 14, "black");

    drawText(ctx, "Input", 200, 240, 14);
    drawText(ctx, "point.", 200,250, 14);

    drawCircle(ctx,205,220,3,"red",true);
    drawCircle(ctx, 50, 220, 3, "black", true);

    // right angle
    ctx.rect(50,205, 15,15);
    ctx.stroke();

    drawText(ctx, 'θ', 170,215);

    drawText(ctx,"Figure 3.", 10, 345, 18);

}