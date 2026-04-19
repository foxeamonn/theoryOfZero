// co-ordinate system

// import  functions
import { drawText, drawCircle, polarAxis,  drawBodyTriangle, drawBox } from "./canvas.js";
import { triangle } from "./triangle.js";
import { CalcCoord } from "./CoOrdinates.js";
import { drawGrid } from "./canvas.js";

const diagram = document.getElementById('coOrd');
const ctx = diagram.getContext('2d');

const centreX = diagram.clientWidth /2;
const centreY = diagram.clientHeight /2;

const bodyOne = new triangle(centreX, centreY, 100, 100,  "blue",  false, "triangleOne");
const bodyTwo = new triangle(centreX, centreY, 128, 80, "green", false, "triangletwo", "R");

export function show() {
    CalcCoord(diagram);
    drawText(ctx,"Mass point of each body given by distance", 10, 20, 16);
    drawText(ctx,"from the pole and angle to the axis. ", 10, 36, 16);

    //drawGrid(diagram,20);
    polarAxis(diagram);
    ctx.save();
    ctx.translate(84, -84);
    ctx.rotate(Math.PI /8);
   
    
    drawBodyTriangle(ctx, bodyOne);
    drawBodyTriangle(ctx, bodyTwo);
    drawText(ctx,"AF1", 140, 103,  12, "blue");
    drawText(ctx,"D1", 130, 200,  12, "blue");
    drawText(ctx,"AF2", 300, 170,  12, "green");

    ctx.restore();

    drawText(ctx," = barycentre.", 420, 290, 12,"red");
    drawCircle(ctx, 420, 285, 2, "red", true);
        
    drawCircle(ctx, 420, 300 ,2,"green",true);
    drawText(ctx," = mass point B.", 420, 305, 12,"green");
    
    drawCircle(ctx, 420, 315, 2,"blue",true);
    drawText(ctx," = mass point A.", 420, 320, 12,"blue");
    
    drawText(ctx,"-", 420, 335, 12, "green");
    drawText(ctx, " = input energy",420, 335, 12, "green");
    
    drawText(ctx, 'θ', 175,235);
    drawText(ctx,'φ',165, 255);


    drawText(ctx,"Figure 10.", 10, 345, 18);
}