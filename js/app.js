import { show as showOne } from "./figureOne.js";
import { show as showTwo } from "./FigureTwo.js";
import { show as showThree } from "./FigureThree.js";
import { show as showFour } from "./FigureFour.js";
import { show as showFive } from "./FigureFive.js";
import { show as showSix } from "./FigureSix.js";
import { toggleButton } from "./toggle.js";

const fig7 = document.getElementById('figure7');
const fig7ctx = fig7.getContext('2d');
const fig7a = document.getElementById('f7a');
const fig7t = document.getElementById('f7t');
fig7a.addEventListener('click', toggleDiagram);
fig7t.addEventListener('click', toggleDiagram);
toggleButton(fig7t);



let triangleOne = {base: 90, height:60, direction:"R", colour: "blue", angle: 0, area:5400};
let triangleTwo = {base: 60, height:90, direction:"L", colour: "green", angle: 0, area:5400};
let direction;

let bodies = [
    {x:0, y:0, width:60, height:60, direction:"A", angleToPole:0, colour:"blue", fill:true, area:3600, quad:2},
    {x:0, y:0, width:80, height:45, direction:"A", angleToPole:0, colour:"green", fill:true, area:3600, quad:4}

];
const initBodies = JSON.parse(JSON.stringify(bodies));

// draw diagrams
showOne();
showTwo();
showThree();
showFour();
showFive();
showSix();
figureSeven(false);



function figureSeven(moving) {
    ctx = fig7ctx;
    moveToZero(fig7, 7);
    clearCanvas(fig7);
    drawText(ctx,"As the distance between two bodies changes, the ratio of ",10,16,16);
    drawText(ctx,"applied force to input force changes inversely with distance ",10,35,16);
    drawText(ctx,"from the fulcrum. ",10,52,16);
    drawText(ctx,"Figure 7.", 10, 350, 18);


    moveToCentre(fig7,7);
    drawCircle(ctx,100,105,2,"red",true);
    drawText(ctx,"= fulcrum.", 105, 110, 12,"red");
    drawText(ctx,"| = applied force", 100,125, 12, "green");
    drawCircle(ctx,100,135,2,"green",true);
    drawText(ctx,"= application point.", 105, 140, 12,"green");
    drawText(ctx,"- = input force", 100,155, 12, "blue");
    drawCircle(ctx,100,165,2,"blue",true);
    drawText(ctx,"= application point.", 105, 170, 12,"blue");


    drawCircle(ctx,0,0,2,"red",true);
    drawBodyTriangle(ctx, triangleOne);
    drawBodyTriangle(ctx, triangleTwo);

    // motion
    if(direction === "A"){
        triangleOne.base+=.6;
        triangleOne.base+=.4;
        triangleTwo.base+=.6;
        triangleTwo.base+=.4;
    }
    else{
        triangleOne.base -=.6;
        triangleOne.base -=.4;
        triangleTwo.base -=.6;
        triangleTwo.base -=.4;
    }

    triangleOne.height = triangleOne.area / triangleOne.base;
    triangleTwo.height = triangleTwo.area / triangleTwo.base;

    if(direction ==="A" && triangleOne.base >= 228) {
        moving = false;
        toggleButton(fig7t);
    }
    if(direction === "T" && triangleOne.height >= 60){
        moving = false;
        toggleButton(fig7a);
    }

    if(moving) requestAnimationFrame(figureSeven);

}


function toggleDiagram() {
    const from = this.id;
    toggleButton(this);
    bodies = JSON.parse(JSON.stringify(initBodies));

    //console.log(from);

    if (from === 'f7a') {
        direction = "A";
        figureSeven(true);
    }

    if (from === 'f7t') {
        direction = "T";
        figureSeven(true);
    }

    if (from === 'f8a') {
        direction = "A";
        figureEight(true);
    }

    if (from === 'f8t') {
        direction = "T";
        figureEight(true);
    }

    if (from === 'f9a') {
        direction = "A";
        figureNine(true)
    }

    if (from === 'f9t') {
        direction = "T";
        figureNine(true);
    }

    if (from === 'f11a') {
        direction = "A";
        figureEleven(true);
    }

    if (from === 'f11t') {
        direction = "T"
        figureEleven(true);
    }

    if (from === 'f12a') {
        direction = "A";
        figureTwelve(true);
    }

    if (from === 'f12t') {
        direction = "T";
        figureTwelve(true);
    }
    if (from === 'f13a') {
       direction = "A";
        figureThirteen(true);
    }

    if (from === 'f13t') {
        direction = "T";
        figureThirteen(true);
    }

    if (from === 'f14a') {
        direction = "A";
        figureFourteen(true);
    }
     if (from === 'f14t') {
        direction = "T";
        figureFourteen(true);
     }

    if (from === 'f16a') {
        direction = "A";
        figureSixteen(true);
    }
    if (from === 'f16t') {
        direction = "T";
        figureSixteen(true);
    }

    if (from === 'f17a') {
        direction = "A";
        figureSeventeen();
        toggleButton(this)
    }
    if (from === 'f17t') {
        direction = "T";
        figureSeventeen();
        toggleButton(this);
    }

    if (from === 'f18a') {
        direction = "A";
        figureEighteen(true);
    }
    if (from === 'f18t') {
        direction = "T";
        figureEighteen(true);
    }
}
