window.addEventListener('load', eventWindowLoaded, false);

// define constants 
const earthImg = new Image();
earthImg.src = 'img/earth1.png';
const width=300;
const height=300;
const ballRadius=5;

const diagram1 = document.getElementById('diagram1');
const diagram1ctx = diagram1.getContext('2d');

const diagram2 = document.getElementById('diagram2');
const diagram2ctx = diagram2.getContext('2d');

const diagram3 = document.getElementById('diagram3');
const diagram3ctx = diagram3.getContext('2d');

const diagram4 = document.getElementById('diagram4');
const diagram4ctx = diagram4.getContext('2d');

const diagram5 = document.getElementById('diagram5');
const diagram5ctx = diagram5.getContext('2d');

const diagram6 = document.getElementById('diagram6');
const diagram6ctx = diagram6.getContext('2d');

const diagram7 = document.getElementById('diagram7');
const diagram7ctx = diagram7.getContext('2d');


const diagram8 = document.getElementById('diagram8');
const diagram8ctx = diagram8.getContext('2d');

const diagram9 = document.getElementById('diagram9');
const diagram9ctx = diagram9.getContext('2d');

const coordinatesDisplay = document.getElementById('coordinates');

let ballCoords = [
    {x:150, y:30},
    {x:150, y:30},
    {x:150, y:30},
    {x:295, y:70},
    {x:295, y:70},
    {x:295, y:70},
    {x:102, y:70},
]

let earthCoOrds = [
    {x:120, y:110},
    {x:120, y:110},
    {x:120, y:110},
    {x:0, y:50},
    {x:0, y:50},
    {x:0, y:50},
    {x:32, y:50}
]



let gpe1 = {stx:40, sty:25, endx:40, endy:110, colour:red};
let ke1 = {stx:40, sty:110, endx:40, endy:110, colour:blue};

let pe=[
    {x:150, y:140, radius:10, colour:black, gpe:0, mass:10, height:0},
    {x:220, y:140, radius:10, colour:green, gpe:0, mass:5, height:0},
    {x:150, y:40, radius: 10, colour: black, gpe: 981, mass:10, height: 10},
    {x:220, y:40, radius: 10, colour: green, gpe: 490.5, mass: 5, height: 10}
]

// Deep copy using JSON.parse and JSON.stringify
const startBall = JSON.parse(JSON.stringify(ballCoords));
const startEarth = JSON.parse(JSON.stringify(earthCoOrds));
const startPe = JSON.parse(JSON.stringify(pe));


// set buttons
document.getElementById('start1').addEventListener('click', animation);
document.getElementById('start2').addEventListener('click', animation);
document.getElementById('start3').addEventListener('click', animation);
document.getElementById('start4').addEventListener('click', animation);
document.getElementById('start5').addEventListener('click', animation);
document.getElementById('start6').addEventListener('click', animation);
document.getElementById('start7').addEventListener('click', animation);
document.getElementById('start8').addEventListener('click', animation);
document.getElementById('start9').addEventListener('click', animation);

// call diagrams
diagramOne(false);
diagramTwo(false);
diagramThree(false);
diagramFour(false);
diagramFive(false);
diagramSix(false);
diagramSeven(false);
diagramEight(false);
diagramNine(false);




// Wait for the image to load before drawing it on the canvas
earthImg.onload = ()=> {
    // Draw the image on the canvas
    diagram1ctx.drawImage(earthImg, earthCoOrds[0].x, earthCoOrds[0].y, 60, 40);
    diagram2ctx.drawImage(earthImg, earthCoOrds[1].x, earthCoOrds[1].y, 60, 40);
    diagram3ctx.drawImage(earthImg, earthCoOrds[2].x, earthCoOrds[2].y, 60, 40);
    diagram4ctx.drawImage(earthImg, earthCoOrds[3].x, earthCoOrds[3].y, 60, 40);
    diagram5ctx.drawImage(earthImg, earthCoOrds[4].x, earthCoOrds[4].y, 60, 40);
    diagram6ctx.drawImage(earthImg, earthCoOrds[5].x, earthCoOrds[5].y, 60, 40);

};


// diagrams
function diagramOne(moving){
    let ctx=diagram1ctx;
    let d=0;
   
    // Clear the canvas
    clearCanvas(diagram1);
  
    ctx.font="12px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("Ball drop as seen by observer on ground.", 10, 15);
    drawText(ctx, "Diag. 1", 10, 145, 12);

    // draw earth
    ctx.drawImage(earthImg, earthCoOrds[d].x, earthCoOrds[d].y, 60, 40);

    // Draw the circle
    ballCoords[d].y +=.5;
    ctx.beginPath();
    ctx.arc(ballCoords[d].x, ballCoords[d].y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    drawCircle(ctx,0,0);
    if(ballCoords[d].y>105) moving=false;
    if(moving) requestAnimationFrame(diagramOne);
}


function diagramTwo(moving){
    let ctx = diagram2ctx;
    const d = 1;
    const ballX = ballCoords[d].x;
    const ballY = ballCoords[d].y
    const earthX = earthCoOrds[d].x;

    earthCoOrds[d].y-=.5
    ctx.clearRect(0, 0, width, height);
    ctx.font="12px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("Ground moving as seen by ball observer.",10,15);
    drawText(ctx, "Diag. 2", 10, 145, 12);
    diagram2ctx.drawImage(earthImg, earthX, earthCoOrds[d].y, 60, 40);

    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    if(earthCoOrds[d].y<35) moving=false;
    if(moving) requestAnimationFrame(diagramTwo);

}


function diagramThree(moving){
    const ctx=diagram3ctx;
    const d=2;
    ctx.clearRect(0, 0, width, height);
    ctx.font="12px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(".",10,15);
    ctx.font="10px Arial";
    ctx.fillText("Barycentre",165,93);
    drawText(ctx, "Diag. 3", 10, 145, 12);


    ctx.font="12px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("The view of an observer at the barycentre.", 10, 15);
    ctx.font="10px Arial";
    ctx.fillText("Barycentre",165,93);

    // barycentre
    ctx.beginPath();
    ctx.arc(150, 90, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    const ballX = ballCoords[d].x;
    const earthX = earthCoOrds[d].x;

    earthCoOrds[d].y-=.2;
    ballCoords[d].y+=.6;
    diagram3ctx.drawImage(earthImg, earthX, earthCoOrds[d].y, 60, 40);

     // Draw the ball
     ctx.beginPath();
     ctx.arc(ballX, ballCoords[d].y, ballRadius, 0, 2 * Math.PI);
     ctx.fillStyle = 'blue';
     ctx.fill();
     ctx.closePath();

     if(earthCoOrds[d].y <91) moving=false;
     if(moving) requestAnimationFrame(diagramThree);
}

function diagramFour(moving){
    const ctx = diagram4ctx;
    const d = 3;

    ctx.clearRect(0, 0, width, height);
    drawGrid(diagram4 , 10, lightGreen);
    drawText(ctx, "Earth observer rotated",10 ,15,12);
    drawText(ctx, "Diag. 4", 10, 145, 12);
   
    // Draw the ball
    ctx.beginPath();
    ctx.arc(ballCoords[d].x, ballCoords[d].y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    // draw the earth
   
    ctx.drawImage(earthImg, earthCoOrds[d].x, earthCoOrds[d].y, 60, 40);
    ballCoords[d].x -= 1.5;
    if(ballCoords[d].x <65 ) moving = false;
    if(moving) requestAnimationFrame(diagramFour);
}


function diagramFive(moving){
    const ctx = diagram5ctx;
    const d = 4;

    ctx.clearRect(0, 0, width, height);
    drawGrid(diagram5 , 10, lightGreen);
    drawText(ctx, "Ball observer rotated",10 ,15,12);
    drawText(ctx, "Diag. 5", 10, 145, 12);

    earthCoOrds[d].x += 1.5;
    // Draw the ball
    ctx.beginPath();
    ctx.arc(ballCoords[d].x, ballCoords[d].y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    // draw the earth
    ctx.drawImage(earthImg, earthCoOrds[d].x, earthCoOrds[d].y, 60, 40);

    if(earthCoOrds[d].x >230 ) moving = false;
    if(moving) requestAnimationFrame(diagramFive);

}

function diagramSix(moving){

    const ctx = diagram6ctx;
    const d = 5;

    ctx.clearRect(0, 0, width, height);
    drawGrid(diagram6 , 10, lightGreen);
    drawText(ctx, "Barycentre observer rotated",10 ,15,12);
    drawText(ctx, "Diag. 6", 10, 145, 12);
    
    // barycentre
    ctx.beginPath();
    ctx.arc(95, 70, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();


    earthCoOrds[d].x+=.2;
    ballCoords[d].x-=1.2;
    ctx.drawImage(earthImg, earthCoOrds[d].x, earthCoOrds[d].y, 60, 40);

    // Draw the ball
    ctx.beginPath();
    ctx.arc(ballCoords[d].x, ballCoords[d].y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    if(ballCoords[d].x <100) moving=false;
    if(moving) requestAnimationFrame(diagramSix);

}

function diagramSeven(moving){

    const ctx = diagram7ctx;
    const d = 6;

    clearCanvas(diagram7)
    ctx.clearRect(0, 0, width, height);
    drawText(ctx,"PE",15, 35,12,red)
    drawText(ctx, "KE",220, 125, 12, blue);
    drawText(ctx, "Mass point", 40, 125,12)
    drawText(ctx, "Conversion of energy.",5 ,15,12);
    drawText(ctx, "Diag. 7", 10, 145, 12);


    // mass point
    drawCircle(ctx, 40, 110, 2);
    drawLine(ctx, gpe1.stx, gpe1.sty, gpe1.endx, gpe1.endy, gpe1.colour);
    drawLine(ctx, ke1.stx, ke1.sty, ke1.endx, ke1.endy, ke1.colour);

    gpe1.sty += 1;
    ke1.stx += 2;
    if(gpe1.sty > 110) moving=false;
    if(moving) requestAnimationFrame(diagramSeven);
}

function diagramEight(moving){
    const ctx=diagram8ctx
    const g=9.81;
    clearCanvas(diagram8);

    let e;
    let bodyOne=pe[0];
    let bodyTwo=pe[1];


    drawText(ctx, "Increasing potential energy.",5 ,15,12);
    drawText(ctx, "Diag. 8", 10, 145, 12);

    drawCircle(ctx, bodyOne.x, bodyOne.y, bodyOne.radius, bodyOne.colour, true);
    drawCircle(ctx, bodyTwo.x, bodyTwo.y, bodyTwo.radius, bodyTwo.colour, true);

    e = "PE "+bodyOne.gpe.toString()+" J";
    drawText(ctx, e, 10, 90, 12, bodyOne.colour);
    e = "PE "+bodyTwo.gpe.toString()+" J";
    drawText(ctx, e, 10, 105, 12, bodyTwo.colour);
    e ="HEIGHT "+bodyOne.height.toString()+" m"
    drawText(ctx, e, 10, 120, 12, blue);


    if(bodyOne.y % 10 ===0) {
        bodyOne.height +=1;
        bodyOne.gpe = (bodyOne.mass * bodyOne.height *g).toFixed(1);
        bodyTwo.gpe = (bodyTwo.mass * bodyOne.height *g).toFixed(1);
    }

    bodyOne.y -= 1;
    bodyTwo.y -= 1;
    if(bodyOne.height > 10) moving=false;
    if(moving) requestAnimationFrame(diagramEight);
}


function diagramNine(moving) {
    const ctx=diagram9ctx
    const g=9.81;
    clearCanvas(diagram9);

    let e;
    let bodyOne=pe[2];
    let bodyTwo=pe[3];


    drawText(ctx, "Decreasing potential energy.",5 ,15,12);
    drawText(ctx, "Diag. 9", 10, 145, 12);


    drawCircle(ctx, bodyOne.x, bodyOne.y, bodyOne.radius, bodyOne.colour, true);
    drawCircle(ctx, bodyTwo.x, bodyTwo.y, bodyTwo.radius, bodyTwo.colour, true);

    e = "PE "+bodyOne.gpe.toString()+" J";
    drawText(ctx, e, 10, 90, 12, bodyOne.colour);
    e = "PE "+bodyTwo.gpe.toString()+" J";
    drawText(ctx, e, 10, 105, 12, bodyTwo.colour);
    e ="HEIGHT "+bodyOne.height.toString()+" m"
    drawText(ctx, e, 10, 120, 12, blue);

    if(bodyOne.y % 10 ===0) {
        bodyOne.height -=1;
        bodyOne.gpe = (bodyOne.mass * bodyOne.height *g).toFixed(1);
        bodyTwo.gpe = (bodyTwo.mass * bodyOne.height *g).toFixed(1);
    }

    bodyOne.y += 1;
    bodyTwo.y += 1;
    if(bodyOne.height ===-1 ) moving=false;
    if(moving) requestAnimationFrame(diagramNine);

}

// start animation
function animation(){
    const id= this.id;
    ballCoords = JSON.parse(JSON.stringify(startBall));
    earthCoOrds = JSON.parse(JSON.stringify(startEarth));
    pe = JSON.parse((JSON.stringify(startPe)));
    gpe1 = {stx:40, sty:25, endx:40, endy:110, colour:red};
    ke1 = {stx:40, sty:110, endx:40, endy:110, colour:blue};

    if(id ==='start1') diagramOne(true);
    if(id ==='start2') diagramTwo(true);
    if(id ==='start3') diagramThree(true);
    if(id ==='start4') diagramFour(true);
    if(id ==='start5') diagramFive(true);
    if(id ==='start6') diagramSix(true);
    if(id ==='start7') diagramSeven(true);
    if(id ==='start8') diagramEight(true);
    if(id ==='start9') diagramNine(true);

}

// after loading
function eventWindowLoaded(){
    const h=window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    const v =(h*.85).toString()+ "px";
    document.getElementById("main-content").height = v;
}
