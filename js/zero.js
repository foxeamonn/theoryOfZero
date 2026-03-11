window.addEventListener('load', eventWindowLoaded, false);

let canvas = document.getElementById('figure1');
const buttons = document.querySelectorAll('button');

const context1a = canvas.getContext('2d');
const coordinatesDisplay = document.getElementById('coordinates');
let width=canvas.width;
let height=canvas.height;
let centreX = 180;
let centreY = 180;
const pi = Math.PI;
const tilt = pi / 6;
const perpindicular = pi / 2;
const move = true;
const pixels = 20;
// Rectangle properties
let rectWidth = 0;
let rectHeight = 0;
let font;
let x = centreX;
let y = centreY;
let energyChange = 0;

let theata=0;

let radius;
let startAngle = 0;
let angle = 0;
let startDistance = 100;
let distanceFromBarycentre = startDistance;
let angleWithPole = startAngle;
let direction = "";
let rotateBy = 0;

const spiral = new Image();
spiral.src = 'img/logSpiral.png';

const fig2 = document.getElementById('figure2')
const fig2ctx=fig2.getContext('2d');

const fig3 = document.getElementById('figure3');
const fig3ctx = fig3.getContext('2d');


const fig4 = document.getElementById('figure4');
const fig4ctx = fig4.getContext('2d');
const fig4a = document.getElementById('f4a');
const fig4t = document.getElementById('f4t');
fig4a.addEventListener('click', toggleDiagram);
fig4t.addEventListener('click', toggleDiagram);
toggleButton(fig4t);

const fig5 = document.getElementById('figure5');
const fig5ctx = fig5.getContext('2d');
const fig5a = document.getElementById('f5a');
const fig5t = document.getElementById('f5t');
fig5a.addEventListener('click', toggleDiagram);
fig5t.addEventListener('click', toggleDiagram);
toggleButton(fig5t);

const fig6 = document.getElementById("figure6");
const fig6ctx = fig6.getContext('2d');
const fig6s = document.getElementById('f6s');
fig6s.addEventListener('click', toggleDiagram);

// figure 7 buttons
const fig7 = document.getElementById('figure7');
const fig7ctx = fig7.getContext('2d');
const fig7a = document.getElementById('f7a');
const fig7t = document.getElementById('f7t');
fig7a.addEventListener('click', toggleDiagram);
fig7t.addEventListener('click', toggleDiagram);
toggleButton(fig7t);


// figure 8 buttons
const fig8 = document.getElementById('figure8');
const fig8ctx = fig8.getContext('2d');
const fig8a = document.getElementById('f8a');
const fig8t = document.getElementById('f8t');
fig8a.addEventListener('click', toggleDiagram);
fig8t.addEventListener('click', toggleDiagram);
toggleButton(fig8t);


// ** fig 9 buttons
const fig9 = document.getElementById('figure9')
const fig9ctx=fig9.getContext('2d');
const fig9a = document.getElementById("f9a");
fig9a.addEventListener('click', toggleDiagram);
const fig9t = document.getElementById("f9t");
fig9t.addEventListener('click', toggleDiagram);
toggleButton(fig9t);

// fig10 buttons
const fig10 = document.getElementById('figure10');
const fig10ctx = fig10.getContext('2d');
const fig10a = document.getElementById("f10a");
fig10a.addEventListener('click', toggleDiagram);
const fig10t = document.getElementById("f10t");
fig10t.addEventListener('click', toggleDiagram);
toggleButton(fig10t);



// ** fig 11 buttons
const fig11 = document.getElementById('figure11')
const fig11ctx=fig11.getContext('2d');
const fig11a = document.getElementById("f11a");
fig11a.addEventListener('click', toggleDiagram);
const fig11t=document.getElementById('f11t')
fig11t.addEventListener('click', toggleDiagram);
toggleButton(fig11t);


// ** fig 12
const fig12 = document.getElementById('figure12')
const fig12ctx=fig12.getContext('2d');
const fig12a = document.getElementById("f12a");
fig12a.addEventListener('click', toggleDiagram);
const fig12t = document.getElementById("f12t");
fig12t.addEventListener('click', toggleDiagram);
toggleButton(fig12t);


// ************** figure thirteen
const fig13 = document.getElementById('figure13')
const fig13ctx=fig13.getContext('2d');
const fig13a = document.getElementById("f13a");
fig13a.addEventListener('click', toggleDiagram);
const fig13t = document.getElementById("f13t");
fig13t.addEventListener('click', toggleDiagram);
toggleButton(fig13t);


// ***************** figure 14
const fig14 = document.getElementById('figure14')
const fig14ctx=fig14.getContext('2d');
const fig14a = document.getElementById("f14a");
fig14a.addEventListener('click', toggleDiagram);
const fig14t = document.getElementById("f14t");
fig14t.addEventListener('click', toggleDiagram);
toggleButton(fig14t);


/// figure 15
const fig15 = document.getElementById("figure15");
const fig15ctx = fig15.getContext('2d');
const fig15a = document.getElementById("f15a");
fig15a.addEventListener('click', figureFifteenEnergy);
const fig15s = document.getElementById("f15s");
fig15s.addEventListener('click', figureFifteenEnergy);

// figure 16
const fig16 = document.getElementById("figure16");
const fig16ctx = fig16.getContext('2d')
const fig16a = document.getElementById("f16a");
fig16a.addEventListener('click', toggleDiagram);
const fig16t = document.getElementById("f16t");
fig16t.addEventListener('click', toggleDiagram);
toggleButton(fig16t);

// figure 17
const fig17 = document.getElementById("figure17");
const fig17ctx = fig17.getContext('2d');
const fig17a = document.getElementById("f17a");
fig17a.addEventListener('click', toggleDiagram);
const fig17t = document.getElementById("f17t");
fig17t.addEventListener('click', toggleDiagram);

// figure 18
const fig18 = document.getElementById("figure18");
const fig18ctx = fig18.getContext('2d');
const fig18a = document.getElementById("f18a");
toggleButton(fig18a);
fig18a.addEventListener('click', toggleDiagram);
const fig18t = document.getElementById("f18t");
fig18t.addEventListener('click', toggleDiagram);


let index9 = 0;
let index10 = 4;
let index11 = 0;
let index12 = 4;

// canvas co-ordinates
let diagramCentered=[];

// movement objects
let diagram1 = {bodyAx:135, bodyAy:80, bodyBx:145, bodyBy:80, direction:0}

let distance = {stX:145, endX:146};

let coOrdinates={x:0, y:0}

let circle ={x:180, y:180, radius:1, colour:"red"};

let circles = [
    {x:10, y:0, radius:60, colour:"blue"},
    {x:-50, y:-100, radius:10, colour: "green"}
]

const initCircles = JSON.parse(JSON.stringify(circles));

let bodies = [
    {x:0, y:0, width:60, height:60, direction:"A", angleToPole:0, colour:"blue", fill:true, area:3600, quad:2},
    {x:0, y:0, width:80, height:45, direction:"A", angleToPole:0, colour:"green", fill:true, area:3600, quad:4}

];

let bodyOne = {x:0, y:0, width:60, height:60, direction:"right", angleToPole:0, colour:"blue", fill:true, area:3600, quad:2};
let bodyTwo = {x:0, y:0, width:80, height:45, direction:"right", angleToPole:0, colour:"green", fill:true, area:3600, quad:4};

const diagram12 = {
    area:1000,
    angle:0,
    height: 10,
    width: 100,
    baryCentre: {x:180, y:180},
    massPoint: {x:0, y:0}
}

const rectangle={x1:centreX, y1:centreY, x2:0, y2:0, x3:0, y3:0, x4:0, y4:0, colour:"black"}

let triangles = [
    {base: 90, height:60, direction:"R", colour: "blue", angle: 0, area:5400},
    {base: 60, height:90, direction:"L", colour: "green", angle: 0, area:5400}
];

let triangleOne = {base: 90, height:60, direction:"R", colour: "blue", angle: 0, area:5400};
let triangleTwo = {base: 60, height:90, direction:"L", colour: "green", angle: 0, area:5400};

// pos[0]= 12a, pos[1]= 12b, pos[2]=13a, pos[3]=13b, pos[4]=14a, pos[5]=14b
let pos = [
    {x:30, y:180, colour:"blue", diag:12, letter:"A", myFont:24},
    {x:45, y:180, colour: "green", diag:12, letter:"B",myFont:24},
    {x:315, y:180, colour:"blue", diag:13, letter:"A",myFont:24},
    {x:330, y:180, colour: "green", diag:13, letter:"B",myFont:24 },
    {x:160, y:180, colour:"blue", diag:14, letter:"A", myFont:24},
    {x:182, y:180, colour: "green", diag:14, letter:"B", myFont:24},
    {x:30, y:180, colour:"blue", diag:15, letter:"A", myFont:24},
    {x:315, y:180, colour: "green", diag:15, letter:"B",myFont: 24},
    {x:160, y:180, colour:"blue", diag:16, letter:"A", myFont:24},
    {x:182, y:180, colour: "green", diag:14, letter:"B", myFont:48},
]
const initPos = JSON.parse(JSON.stringify(pos));

const initBodies = JSON.parse(JSON.stringify(bodies));
const initTriangles = JSON.parse(JSON.stringify(triangles));


//let diagram = JSON.parse(JSON.stringify(diagrams[0]));


// initial displays *****************************************************

figureOne();
figureTwo();
figureThree();
figureFour(false);
figureFive(false);
figureSix(false);
figureSeven(false);
figureEight(false);
figureNine(false);
figureTen(false);
figureEleven(false);
/*
figureFive();
figureSix();
figureSeven();


figureTen(false);
figureEleven(false);
figureTwelve(false);
figureThirteen(false);
figureFourteen(false);
figureFifteen(energyChange);
figureSixteen(false);
figureSeventeen(0);
figureEighteen(false);
*/

///////////////////// functions ///////////////////
function setup(diag) {
    width = diag.width;
    height = diag.height;
    centreX = width /2;
    centreY = height /2;
    for(const key in bodies){
        bodies[key].x = centreX;
        bodies[key].y = centreY;
    }


    if(diag.id === "figure15"){}

}

function setBody(seq) {
    angle = bodies[seq].angleToPole;
    rectWidth = bodies[seq].base;
    rectHeight = bodies[seq].height;
    area = bodies[seq].area;
}

function showCoord(diagram, centred) {
    diagram.addEventListener('mousemove', (event) => {
        const rect = diagram.getBoundingClientRect();
        const height = diagram.height;
        const width = diagram.width;
        const centreX = width/2;
        const centreY = height/2;
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        if(centred){x=x-centreX, y=y-centreY}

        // Update the coordinates in the paragraph element
        coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
    });
}

function calcHyp(distance, height) {
    return Math.sqrt((distance * distance) + (height*height))
}

function calcAngle(height, distance) {

    return Math.atan(height/distance)
}

function arcAreaDegrees(radius, angleDegrees) {
    const area = (angleDegrees / 360) * Math.PI * Math.pow(radius, 2);
    return area;
}

function radiusFromArcAreaRadians(area, angleRadians) {
    const radius = Math.sqrt((2 * area) / angleRadians);
    return radius;
}

function radiusFromArcAreaDegrees(area, angleDegrees) {
    const radius = Math.sqrt((360 * area) / (Math.PI * angleDegrees));
    return radius;
}


function radiusFromArcAreaRadians(area, angleRadians) {
    const radius = Math.sqrt((2 * area) / angleRadians);
    return radius;
}

function getAngleFromArea(area, radius, inDegrees = false) {
    if (radius <= 0) {
        throw new Error("Radius must be greater than zero.");
    }

    const angleRadians = (2 * area) / (radius * radius);

    if (inDegrees) {
        const angleDegrees = angleRadians * (180 / Math.PI);
        return angleDegrees;
    }

    return angleRadians;
}
function eventWindowLoaded(){
    const h=window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    const v =(h*.85).toString()+ "px";
    document.getElementById("main-content").height = v;
   
}

function toggleShow(id){
    const x = document.getElementById(id);
    if (x.className.indexOf(" w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", " w3-hide");
    }
}

function toggleButton(b) {
    b.disabled ? b.className = "w3-green w3-padding" : b.className = "w3-gray w3-padding";
    b.disabled = !b.disabled;
}


function figureOne() {
    const ctx = context1a;
    ctx.clearRect(0, 0, width, height);

    drawText(ctx,"Lever in balance", 10, 30, 24);

    drawLineLength(ctx, 50, 150, 180);
    drawCircle(ctx,110,150,3,red,true);
    drawText(ctx, "Fulcrum", 110, 170,16,red);

    drawArrow(ctx, 50, 110, 50, 150, black);
    drawText(ctx, "F",50,100, 15);
    drawText(ctx,"D", 73, 145, 15);

    drawArrow(ctx, 228, 170, 228, 150, black);
    drawText(ctx, "f",227,190, 15);
    drawText(ctx,"d", 173, 145, 15);

    drawText(ctx,"Figure 1.", 10, 345, 18);
}

function figureTwo() {
    const ctx = fig2ctx;
   
    ctx.clearRect(0, 0, width, height);

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

function figureThree() {
    const ctx = fig3ctx;
    
    ctx.clearRect(0, 0, width, height);
    drawText(ctx,"With no mechanism to transmit,", 10, 20, 16,"black");
    drawText(ctx,"the force becomes potential energy. ", 10, 40, 16,"black");

    drawArrow(ctx, 50, 110, 50, 150, "black");
    simpleArrow(ctx, 220, 170, 20, "U", "black");

    //function simpleArrow(ctx, stx, sty, len, direction,colour) {

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

    drawText(ctx,"Figure 3.", 10, 345, 18);

}

function figureFour(moving) {
    const ctx = fig4ctx;
    showCoord(fig4);

    moveToZero(fig4, 4);
    clearCanvas(fig4);
    drawText(ctx,"As the distance between two bodies changes, the ratio of ",10,16,16);
    drawText(ctx,"potential energy to kinetic energy changes inversely with distance from ",10,35,16);
    drawText(ctx,"the barycentre. ",10,52,16);

    drawText(ctx,"Figure 4.", 10, 350, 18);

    moveToCentre(fig4,4);
    drawCircle(ctx,100,105,2,"red",true);
    drawText(ctx,"= Barycentre.", 105, 110, 12,"red");
    drawCircle(ctx,100,135,2,"green",true);
    drawText(ctx,"= mass point.", 105, 140, 12,"green");
    drawCircle(ctx,100,165,2,"blue",true);
    drawText(ctx,"= mass point.", 105, 170, 12,"blue");

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
        toggleButton(fig4t);
    }
    if(direction === "T" && triangleOne.height >= 60){
        moving = false;
        toggleButton(fig4a);
    }

    if(moving) requestAnimationFrame(figureFour);
}

   

function figureFive(moving) {

    const ctx = fig5ctx;
    ctx.clearRect(0, 0, width, height);
   
    moveToZero(fig5, 5);
    clearCanvas(fig5);
    let angleOne = 0;
    let angleTwo = 0;
    
    drawText(ctx,"As the distance between two bodies changes, the angle representing ",10,16,16);
    drawText(ctx,"the ratio of potential energy to kinetic energy changes. ",10,35,16);
    drawText(ctx,"Figure 5.", 10, 350, 18);
    
    // after move to centre
    moveToCentre(fig5,5);
    drawCircle(ctx,100,105,2,"red",true);
    drawText(ctx,"= barycentre.", 105, 110, 12,"red");
    drawText(ctx,"| = kinetic energy", 100,125, 12, "green");
    drawCircle(ctx,100,135,2,"green",true);
    drawText(ctx,"= mass point.", 105, 140, 12,"green");
    drawText(ctx,"- = potential energy", 100,155, 12, "blue");
    drawCircle(ctx,100,165,2,"blue",true);
    drawText(ctx,"= mass point.", 105, 170, 12,"blue");

    drawText(ctx,"Angle = ", -180, 170, 16, "green");
    drawText(ctx,"Angle = ", -40, 170, 16, "blue");
    drawCircle(ctx,0,0,2,"red",true);
    drawBodyTriangle(ctx, triangles[0]);
    drawBodyTriangle(ctx, triangles[1]);
   
    //drawText(ctx,angleOne, 125,350, 16, "blue");

    // motion
    if(direction === "A"){
        triangles[0].base+=.6;
        triangles[1].base+=.4;
    }
    else{
        triangles[0].base -=.6;
        triangles[1].base -=.4;
    }

    triangles[0].height = triangles[0].area / triangles[0].base;
    angleOne = Math.atan(triangles[0].height / triangles[0].base);
    angleOne = angleOne.toFixed(2);
    //console.log(angle);
    triangles[1].height = triangles[1].area / triangles[1].base;
    angleTwo = Math.atan(triangles[1].height / triangles[1].base);
    angleTwo = angleTwo.toFixed(2);

    drawText(ctx, angleTwo, 20, 170, 16, "blue");
    drawText(ctx, angleOne, -120, 170, 16, "green");


    if(direction ==="A" && triangles[0].base >= 228) {
        moving = false;
        toggleButton(fig5t);
    }
    if(direction === "T" && triangles[0].base <= 60){
        moving = false;
        toggleButton(fig5a);
    }

    if(moving) requestAnimationFrame(figureFive);

}

function figureSix(moving = false){
    const ctx = fig6ctx;
    ctx.clearRect(0, 0, width, height);

    moveToZero(fig6, 6);
    clearCanvas(fig6);
    drawText(ctx,"The work done by the two bodies is the same;",5,20,16);
    drawText(ctx,"the distance of the mass point from the barycentre is proportional",5,40,16);
    drawText(ctx, "to their masses", 5, 60, 16);
     drawText(ctx,"Figure 6.", 10, 350, 18);

    drawCircle(ctx,240,300,2,"blue",true);
    drawText(ctx," = mass point.", 245, 305, 12,"blue");

    drawCircle(ctx,240,315,2,"green",true);
    drawText(ctx," = mass point.", 245, 320, 12,"green");

    drawCircle(ctx,240,330,2,"red",true);
    drawText(ctx,"  = barycentre.", 240, 335, 12,"red");

    drawBox(ctx, 237, 342, 5, 5, true, "blue");
    drawText(ctx,"  = work done.", 240, 348, 12,"blue");

    drawBox(ctx, 237, 352, 5, 5, true, "green");
    drawText(ctx,"= work done.", 247, 358, 12,"green");

    
    polarAxis(fig6);
    moveToCentre(fig6, 6);

    drawBodyO(ctx, bodies[0]);
    drawBodyO(ctx, bodies[1]);

    bodies[0].width += .8;
    bodies[0].height = bodies[0].area / bodies[0].width;
    bodies[1].width += 1;
    bodies[1].height = bodies[1].area / bodies[1].width;

    if(!moving) return;
    if(bodies[0].width > 130){
        toggleButton(fig6s);
        moving = false;
    }

    if(moving) requestAnimationFrame(figureSix);
}

function figureSeven(moving = false) {
    ctx = fig7ctx;
    moveToZero(fig7, 7);
    clearCanvas(fig7);
    
    drawText(ctx,"The Perspective of observer A;",5,20,16);
    drawText(ctx,"Figure 7.", 10, 350, 18);
    drawText(ctx,"A",pos[0].x,pos[0].y,24,  pos[0].colour);
    drawText(ctx,"B",pos[1].x,pos[1].y,24, pos[1].colour);
    drawCircle(ctx, 38, 180,2,"red",true);
    drawCircle(ctx,240, 343, 2, "red", true);
    drawText(ctx,"  = mass point A.", 240, 348, 14,"red");


    if(!moving) return;
    if(direction === "A") {
        pos[1].x = pos[1].x + 3;
        if (pos[1].x >= initPos[3].x ) {moving = false; toggleButton(fig7t)}
    }
    else if(direction === "T") {
        pos[1].x = pos[1].x - 3;
        if (pos[1].x <= initPos[1].x ) {moving = false; toggleButton(fig7a)}
    }

    if(moving) requestAnimationFrame(figureSeven);
}

 
function figureEight(moving) {
    ctx = fig8ctx;
    moveToZero(fig8, 8);
    clearCanvas(fig8);
   
    drawText(ctx,"The Perspective of observer B;",5,20,16);
    drawText(ctx,"Figure 8.", 10, 350, 18);
    drawText(ctx,"A",pos[2].x,pos[2].y,24,  pos[2].colour);
    drawText(ctx,"B",pos[3].x,pos[3].y,24, pos[3].colour);
    drawCircle(ctx, 340, 182,2,"red",true);
    drawCircle(ctx,240, 343, 2, "red", true);
    drawText(ctx,"  = mass point B.", 240, 348, 14,"red");

    if(!moving) return;

    if(direction === "T") {
        pos[2].x = pos[2].x + 3;
        if (pos[2].x >= initPos[2].x ) {moving = false; toggleButton(fig8a)}
    }
    else if(direction === "A") {
        pos[2].x = pos[2].x - 3;
        if (pos[2].x <= pos[0].x ) {moving = false; toggleButton(fig8t)}
    }
   
    if(moving) requestAnimationFrame(figureEight);
}

function figureNine(moving) {
    ctx = fig9ctx;
    moveToZero(fig9, 9);
    clearCanvas(fig9);

    drawText(ctx,"The true state of affairs; both bodies move",5,20,16);
    drawText(ctx,"relative to their barycentre. ",5,36,16);

    drawText(ctx,"Figure 9.", 10, 350, 18);
    drawCircle(ctx, 180, 180, 2, "red", true);
    drawCircle(ctx,240, 343, 2, "red", true);
    drawText(ctx,"  = barycentre.", 240, 348, 14,"red");

    drawText(ctx,"A",pos[4].x,pos[4].y,24,  pos[4].colour);
    drawText(ctx,"B",pos[5].x,pos[5].y,24, pos[5].colour);
    if(!moving) return;

    if(direction === "A") {
        pos[4].x = pos[4].x - 1;
        pos[5].x = pos[5].x + 1;
        if (pos[4].x <= initPos[0].x ) {moving = false; toggleButton(fig9t)}
    }
    else if(direction === "T") {
        pos[4].x = pos[4].x + 1;
        pos[5].x = pos[5].x - 1;
        if (pos[4].x >= initPos[4].x ) {moving = false; toggleButton(fig9a)}
    }

    if(moving) requestAnimationFrame(figureNine);
}

function figureTen(moving = false) {
    showCoord(fig10, true);
     clearCanvas(fig10);
    let energy = 4;
    const ctx = fig10ctx;
   
    drawText(ctx,"The barycentre changes with B accelerating",5,20,16);
    drawText(ctx,"(changing energy levels).", 5,36,16);
    drawText(ctx,"Figure 10.", 10, 350, 18);

    drawText(ctx,"A",pos[6].x, pos[6].y, pos[6].myFont,  pos[6].colour);
    drawText(ctx,"B",pos[7].x, pos[7].y, pos[7].myFont, pos[7].colour);
    drawCircle(ctx, x, y, 2, "red", true);

    drawArrow(ctx, 50, 180, x-5, 180, black);
    drawArrow(ctx, 315, 180, x+5, 180, black);
 
    if(!moving) return
   
    if(direction === "A"){
        x += 1;
        pos[7].myFont += 1;
         if(pos[7].myFont >= 120){
             moving = false;
            toggleButton(fig10t);
         }
    }
   
    if(direction === "T"){
        x -= 1;
        pos[7].myFont -= 1;
        if(pos[7].myFont <=24 ){
            moving = false;
            toggleButton(fig10a);
        }
    }
   
    if(moving) requestAnimationFrame(figureTen);

}

function figureEleven(moving = false) {
    const ctx = fig11ctx;
    moveToZero(fig11, 11);
    clearCanvas(fig11);
    drawText(ctx,"The position of the barycentre of A and B has",5,20,16);
    drawText(ctx,"changed. ",5,36,16);
    drawText(ctx,"Figure 11.", 10, 350, 18);
    drawCircle(ctx, 180, 180, 2, "red", true);
    drawText(ctx,"A",pos[8].x, pos[8].y, pos[8].myFont,  pos[8].colour);
    drawText(ctx,"B",pos[9].x, pos[9].y,pos[9].myFont, pos[9].colour);
    if(!moving) return;

    if(direction === "A") {
        // pos.8 = "A"
        // pos.9 = "B"
        pos[8].x = pos[8].x - 1;
        pos[9].x = pos[9].x + .5;
        if (pos[8].x <= initPos[0].x ) {moving = false; toggleButton(fig11t)}
    }
    else if(direction === "T") {
        pos[8].x = pos[8].x + 1;
        pos[9].x = pos[9].x - .5;
        if (pos[8].x >= initPos[4].x) {
            moving = false;
            toggleButton(fig11a)
        }

    if(moving) requestAnimationFrame(figureEleven);
    
}


function figureTwelve(moving) {
    const ctx = fig12ctx;
    clearCanvas(fig12);

        
    if (moving) requestAnimationFrame(figureTwelve);
}


function figureThirteen(moving){

    const ctx = fig13ctx;
    clearCanvas(fig13);

}



function figureFourteen(moving) {
    const ctx = fig14ctx;
    clearCanvas(fig14);
    //showCoord(fig14, false);
   
}


function figureSixteen(moving) {
    const ctx = fig16ctx;
    clearCanvas(fig16);

    drawText(ctx,"The position of the barycentre of A and B has",5,20,16);
    drawText(ctx,"changed. ",5,36,16);
    drawText(ctx,"Figure 16.", 10, 350, 18);
    drawCircle(ctx, 180, 180, 2, "red", true);
    drawText(ctx,"A",pos[8].x, pos[8].y, pos[8].myFont,  pos[8].colour);
    drawText(ctx,"B",pos[9].x, pos[9].y,pos[9].myFont, pos[9].colour);
    if(!moving) return;

    if(direction === "A") {
        // pos.8 = "A"
        // pos.9 = "B"
        pos[8].x = pos[8].x - 1;
        pos[9].x = pos[9].x + .5;
        if (pos[8].x <= initPos[0].x ) {moving = false; toggleButton(fig16t)}
    }
    else if(direction === "T") {
        pos[8].x = pos[8].x + 1;
        pos[9].x = pos[9].x - .5;
        if (pos[8].x >= initPos[4].x) {
            moving = false;
            toggleButton(fig16a)
        }
    }
    if(moving) requestAnimationFrame(figureSixteen);
}

function figureSeventeen(){
    const ctx = fig17ctx;
    clearCanvas(fig17);
    //moveToCentre(fig17, 17);
    polarAxis(fig17);
    //showCoord(fig17, true);
    const cx = fig17.width / 2;
    const cy = fig17.height / 2;

    ctx.save();

    // start of rotating section
    ctx.translate(cx, cy);
    if( direction === "A") {
        if(bodyOne.width < 90) {
            bodyOne.width += 2;
        }

        rotateBy -= Math.PI / 8;
        ctx.rotate(rotateBy);
    }
    if( direction === "T") {
        if(bodyOne.width > 20) {
            bodyOne.width -= 2;
        }

        rotateBy += Math.PI / 8;
        ctx.rotate(rotateBy);
    }


   let length = bodyOne.width;
    let lengthTwo = (length *1.5)
   //console.log(length);
   drawLineLength(ctx, 0, 0, length, "blue");
   drawLineLength(ctx, -lengthTwo, 0, lengthTwo, "green");


    drawCircle(ctx, length, 0, 4, "blue", true);
    drawCircle(ctx, -lengthTwo, 0, 2, "green", true);

    //ctx.save();
    //ctx.rotate(-rotateBy);
    ctx.restore()    // End of rotated section
    //drawText(ctx, ">;",180,180, 24, "black");
    drawText(ctx,"The position of the mass point is given by its'",0,20,16);
    drawText(ctx,"distance from the barycentre, and angle to",0,36,16);
    drawText(ctx,"the polar axis .",0,52,16);
    drawText(ctx,"Figure 17.", 10, 350, 18);
}

function figureEighteen(moving){

    ctx = fig18ctx;
    moveToZero(fig18, 18);
    clearCanvas(fig18);
    drawText(ctx,"The two bodies move towards (or away) from their.",0,20,16);
    drawText(ctx,"barycentre.",0,36,16);
    drawText(ctx,"Figure 18.", 10, 350, 18);

    polarAxis(fig18);
    moveToCentre(fig18, 18);

    drawCircle(ctx, circles[0].x, circles[0].y, circles[0].radius, "blue", true);
    drawCircle(ctx, circles[1].x, circles[1].y, circles[1].radius, "green", true);
    drawCircle(ctx, 0, 0, 2, "red", true);
    drawLine(ctx, 0, 0, 360, 0, "red");
    drawLine(ctx, 0, 0, -180, 0, "red");

    if(!moving) return;
    if(direction === "T"){
        circles[0].x = circles[0].x - 0.1;
        circles[0].y = circles[0].y -0.1;

        circles[1].x = circles[1].x +1;
        circles[1].y = circles[1].y + .5;
        if(circles[1].x >= 6) { moving = false; toggleButton(fig18a)}
    }

    if(direction === "A") {
        circles[0].x = circles[0].x + 0.1;
        circles[0].y = circles[0].y +0.1;

        circles[1].x = circles[1].x -1;
        circles[1].y = circles[1].y - .5;
        if(circles[0].x >= initCircles[0].x) { moving = false; toggleButton(fig18t)}

    }

    if(moving) requestAnimationFrame(figureEighteen);
}


function polarAxis(diag, barycentre = true, colour="red"){
    const ctx = diag.getContext('2d');
    const width = diag.width;
    centreY = diag.height / 2;
    centreX = width / 2;
    drawLine(ctx, 0, centreY, width, centreY, colour)
    if(barycentre) drawCircle(ctx, centreX, centreY, 3, colour); 

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
    
    function toggleButton(b) {
        b.disabled ? b.className = "w3-green w3-padding" : b.className = "w3-gray w3-padding";
        b.disabled = !b.disabled;
    }

    function calcCords(distance, angle) {
        coOrdinates.x = (distance * Math.cos(angle));
        coOrdinates.y = (distance * Math.sin(angle));
    }

    function calcMassPoint(diagram) {
        const x = diagram.baryCentre.x;
        const y = diagram.baryCentre.y;
    }

    function calcBodyCords(sequence) {
        const body = bodies[sequence];
        const x1 = body.x1;
        const y1 = body.y1;
        const angle = body.angleToPole;
        let base = body.base;
        const height = body.height;

        let x2;
        let y2;
        let x3;
        let y3;
        let x4;
        let y4;
        let distance;

        x2 = x1 + (base * Math.cos(angle));
        y2 = y1 - (height * Math.sin(angle));

        const energyAngle = Math.atan(height / base);

        distance = calcHyp(base, height);
        x3 = x1 + (distance * Math.cos(energyAngle));
        y3 = y1 - (distance * Math.sin(energyAngle));
        body.x2 = x2;
        body.y2 = y2;
        body.x3 = x3;
        body.y3 = y3;

        body.x4 = x4;
        body.y4 = y4;
        body.distance = distance;

        bodies[sequence] = body;

    }

    function calcBody(seq) {
        const quad = bodies[seq].quad;
        const area = bodies[seq].area;
        const base = bodies[seq].base;
        const height = area / base;

        const x1 = bodies[seq].x1;
        const y1 = bodies[seq].y1;

        let x2 = base;
        const y2 = y1;

        let y3 = height;

        if (quad === 1) y3 = -y3;
        if (quad === 2) {
            x2 = -x2;
            y3 = -y3
        }
        if (quad === 3) x2 = -x2;

        const x3 = x2;
        const x4 = x1;
        const y4 = y3;

        bodies[seq].x2 = x2;
        bodies[seq].y2 = y2;
        bodies[seq].x3 = x3;
        bodies[seq].y3 = y3;
        bodies[seq].x4 = x4;
        bodies[seq].y4 = y4;

        //console.log(quad);
        //console.log(bodies[seq]);
    }

}