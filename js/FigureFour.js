// import canvas functions
import { drawText } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { drawArrowTriangle } from "./canvas.js";
import { drawLine } from "./canvas.js";


const fig4 = document.getElementById('figure4');
const ctx = fig4.getContext('2d');

export function show() {
    const tilt = Math.PI / 6;
    ctx.rotate(tilt);
    drawArrowTriangle(ctx, 150, 120, 150, 150, "R");
    ctx.rotate(-tilt);

    drawText(ctx,"Applied force at an angle to", 10, 20, 20);
    drawText(ctx,"horizontal.", 10, 40, 20);
    drawText(ctx, "a.f",70, 130);
    drawText(ctx, "i.f", 120, 205);
    drawText(ctx, "u.f", 170, 130);

    ctx.rotate(tilt);
    drawText(ctx, "Application", 30,240, 14, "black");
    drawText(ctx, "point.", 30,254, 14, "black");
    ctx.rotate(-tilt);

    drawText(ctx, "Input point.", 155, 280, 14);

    drawCircle(ctx,203,258,3,"red",true);
    drawCircle(ctx, 70, 180, 3, "black", true);
    drawLine(ctx, 0, 258, 500, 258, "red");

    drawText(ctx, 'θ', 175,235);
    drawText(ctx,'φ',165, 255);

    drawText(ctx,"Figure 4.", 10, 345, 18);

}