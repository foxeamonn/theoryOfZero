// import canvas functions
import { drawText } from "./canvas.js";
import { drawLine } from "./canvas.js";
import { drawLineLength } from "./canvas.js";
import { drawCircle } from "./canvas.js";
import { simpleArrow} from "./canvas.js";


const fig2 = document.getElementById('figure2')
const ctx=fig2.getContext('2d');

export function show() {
    
    drawText(ctx,"Applied force acts at right angle", 10, 20, 24);
    ctx.save();
    ctx.rotate(Math.PI /8);
    drawLineLength(ctx, 126, 150, 150);
    simpleArrow(ctx, 130, 50, 100, "D");
   
    drawText(ctx, "F", 130, 45, 15);
    drawText(ctx, "Lever", 160, 145);

     // right angle
    ctx.rect(130, 135, 15, 15);
    ctx.stroke();
    ctx.restore()
    
    drawCircle(ctx,200,245,3,"red",true);
    drawLine(ctx, 0, 245, 360, 245, "red");
    drawText(ctx, "Fulcrum", 200, 265, 16);
    drawText(ctx,"Figure 2.", 10, 345, 18);

}