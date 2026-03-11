

export function drawLine(ctx,stX,stY,endX,endY,colour = "black", thickness = 1, dash = false){
		 //console.log(stX+" "+stY+" "+endX+" "+endY.toString())
		 ctx.lineWidth=thickness;
         dash ===  true ? ctx.setLineDash([2, 3]) : ctx.setLineDash([]);
		 ctx.beginPath();
		 ctx.moveTo(stX,stY);
		 ctx.lineTo(endX,endY);
		 ctx.strokeStyle=colour;
		 ctx.stroke();
		 ctx.closePath();
}

export function drawLineOrig(ctx,x,y,colour,quad,thickness){
    if(!colour) colour=black;  // black
    if(!thickness) thickness=1;
    ctx.lineWidth=thickness;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(0,0);
    //ctx.moveTo(0,0);
    ctx.strokeStyle=colour;
    ctx.stroke();
    ctx.closePath();
}


export function drawVertical(ctx,x,y,colour = "black" ){
		 ctx.lineWidth=1;
		 ctx.beginPath();
		 ctx.moveTo(x,y);
		 ctx.lineTo(x,0);
		 ctx.strokeStyle=colour;
		 ctx.closePath();
         ctx.stroke();
}


export function drawHorizontal(ctx,y,x,colour="black"){
    if(!colour) colour=black;

    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(y,0);
    ctx.strokeStyle=colour;
    ctx.stroke();
    ctx.closePath();
}



export function drawClock(ctx, clockRadius) {
    drawFace(ctx, clockRadius);
    drawNumbers(ctx, clockRadius);
    drawTime(ctx, clockRadius);
}

export function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.strokeStyle = "#333";
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();
}

export function drawNumbers(ctx, radius) {
    let angle;
    let num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num <= 12; num++) {
        angle = (num * Math.PI) / 6;
        ctx.rotate(angle);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-angle);
    }
}

export function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Hour
    hour = hour % 12;
    hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    // Minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);

    // Second
    second = (second * Math.PI) / 30;
    drawHand(ctx, second, radius * 0.9, radius * 0.02, "red");
}

export function drawHand(ctx, pos, length, width, color = "#333") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

export function updateClock(ctx, radius) {
    ctx.clearRect(-radius, -radius, fig11.width, fig11.height);
    drawClock(ctx, radius);
}

export function drawLineAtAngle(ctx, length, angle = 0,  x = 0, y = 0, colour = "black", width = 1){
    // angle is in radians
    const endx = x + (Math.cos(angle) * length);
    const endy = y + (Math.sin(angle) * length);
    drawLine(ctx, x, y, endx, endy, colour, width);
}

export function drawKeVPe(ctx){
    

}

export function drawDiag(ctx,deg,length,quad,colour = "blue"){
		 if(!quad) quad=2;
		 if(quad === 2) deg=deg+270;
		 if(quad === 3) deg+=180;
		 if(quad === 4) deg+=90;

		 const pos=degToRad(deg);
		 ctx.strokeStyle=rgbString(colour);
  	   	 ctx.beginPath();
       	 ctx.moveTo(0,0);
	     ctx.rotate(pos);
       	 ctx.lineTo(0, -length);
       	 ctx.stroke();
       	 ctx.rotate(-pos);
}


export  function drawText(ctx, message, xpos = 0, ypos = 0, myFont, colour = "black"){

	if(!myFont) ctx.font="20px Arial";
    if(myFont){
        let v=myFont.toString()+"px Arial"
        ctx.font=v;
    }
    ctx.fillStyle = colour;
    ctx.fillText(message, xpos, ypos);
}


export function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, fill, colour="black", angle = 0){
    // angle is  to the polar axis

    //ctx.strokeStyle=rgbString(colour);
    ctx.strokeStyle = colour;
    ctx.rotate(angle);

    // Draw the triangle
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
     ctx.closePath();
    if(fill) {ctx.fillStyle=ctx.strokeStyle; ctx.fill()};
    ctx.stroke();
    ctx.rotate(-angle);
    
}

export function DrawTriangleObj(ctx, triangle){
    const colour = triangle.colour;
    const x1 = triangle.x1;
    const y1 = triangle.y1;
    const x2 = triangle.x2;
    const y2 = triangle.y2;
    const x3 = triangle.x3;
    const y3 = triangle.y3;
   

    drawLine(ctx, x1,y1,x2,y2,"blue", 1);
    drawLine(ctx, x2, y1, x3, y3,"green",1);
    drawLine(ctx, x1,y1,x3,y3,"black",1,true);
    drawCircle(ctx,x2,y2,2,colour);
    colour === "blue" ?  drawText(ctx, "A", x2-15, y2, 15, colour) :  drawText(ctx, "B", x2+5, y2, 15, colour);
  
}

export function drawBodyTriangle(ctx, body){
    const diag=ctx.canvas.id
    const base = body.base;
    const height = body.height;
    const colour = body.colour;
    const fill = body.fill;
    const direction = body.direction;
    const angle = body.angle;

    const x1 = 0;
    const y1 = 0;
    let x2  = base;
    let y2 = y1;
    let x3 = x2;
    let y3= height;
    let mess = "A.F"
    let mess1 = "I.F"
    if(diag === "figure8" ) {mess = "K.E"; mess1 = "P.E"}


    //console.log(direction);
    //console.log("x1="+x1+" y1="+y1+" x2="+x2+" y2="+y2+" x3="+x3+" y3="+y3);
    if(direction==="L"){
        // green
        x3=-x3;
        x2=-x2;
        y3=-y3;


        drawText(ctx,mess,x2-20,y2-5,10,colour);
        drawText(ctx,mess1,x2+10,y2+15,10,colour);
        if(diag !== "figure13") drawBox(ctx, x2,y2-10, 10,10,false,colour);

    }
    else{
        // blue

        drawText(ctx,mess,x2+5,y2+20,10,colour);
        drawText(ctx,mess1,x2-10,y2-10,10,colour);
        if(diag !== "figure13") drawBox(ctx, x2-10,y2, 10,10,false,"blue");
    }
    //console.log("x1="+x1+" y1="+y1+" x2="+x2+" y2="+y2+" x3="+x3+" y3="+y3);
    drawTriangle(ctx, x1, y1, x2, y2, x3, y3, fill, colour, angle);
    drawCircle(ctx,x2,y2,2,colour);

}

export function drawTriangleBH(ctx, x, y, b, h, axis = "A", colour = black) {
    // A = above axis, B = below
    const x1 = x;
    const y1 = y;
    const y2 = y;
    let x2 = x;
    let x3 = x2;
    let y3 = y;

    if(axis === "A"){
        // triangle above x-axis
        x2 = x1-b;
        x3 = x2;
        y3 = y - h;
    }
    else{
        // triangle below x-axis
        x2 = x1 + b;
        x3 = x2;
        y3 = y +h;
    }
    drawTriangle(ctx, x1, y1, x2, y2, x3, y3, false, colour);
}
export function drawObject(ctx, x, y, radius, text, font, colour) {
    if(!colour) colour=black;
    if(!font) font=20;
    drawCircle(ctx, x,y,radius,colour,true);
    const x1= x-(radius/2)+font/4;
    const y1= y+(radius/4);
    drawText(ctx,text,x1,y1,font,white);

}


export function drawCircleO(ctx,o) {   // draw circle using an object
    drawCircle(ctx, o.x, o.y, o.radius, o.colour);
}


export function drawCircle(ctx,x = 0, y = 0, radius=1, colour = "black", fill = true){
    const angle=Math.PI*2;
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.arc(x,y,radius,0,angle);
    if(fill){ctx.fillStyle=colour;ctx.fill()}
	ctx.closePath();
    ctx.stroke();
}

export function drawArc(ctx, x=0, y=0, radius, startAngle = 0, endAngle=0, counter = false, colour="black", fill=false ) {
    ctx.beginPath();
    ctx.strokeStyle=colour;
    if(fill){ctx.fillStyle=colour;ctx.fill()}
    ctx.arc(x, y, radius, startAngle, endAngle, counter);
    ctx.closePath();
    ctx.stroke();
}

export function drawSection(ctx,radius,angle,colour){
		ctx.beginPath();
		ctx.arc(0,0,radius,0,angle);
		ctx.strokeStyle=rgbString(colour);
		ctx.stroke();
		ctx.lineTo(0,0);
		ctx.fillStyle=rgbString(colour);
		ctx.closePath();
}

export function drawGrid(diag, gap = 10 , colour = lightBlue, quad = false){
    ctx = diag.getContext("2d");

    if(quad){
        drawText(ctx, "2", 50,50,16);
        drawText(ctx, "1", 310,50,16);
        drawText(ctx, "3", 50,310,16);
        drawText(ctx, "4", 310,310,16);
    }


    const height = diag.height;
    const width = diag.width;
    let startx = 0;
    let starty = 0;
    do {
        startx += gap;
        drawVertical(ctx, startx, height, colour);
    }while(startx < width);

    do{
        starty += gap;
        drawLine(ctx, 0, starty, width, starty, colour);
    }while(starty < height)

}

export function drawBox(ctx, x = 0, y = 0,  w, h, fill = false, colour = "black",  lineWidth = 1)
{
    ctx.lineWidth = lineWidth;
    if(fill){
        // Draw a filled rectangle
        ctx.fillStyle = colour; // Set fill color
        ctx.fillRect(x, y, w, h); // x, y, width, height
    }
    else{
        // Draw a stroked rectangle
        ctx.strokeStyle = colour; // Set stroke color
        ctx.strokeRect(x, y, w, h); // x, y, width, height

    }

}

export function drawBody(ctx, body, mp = true) {

    let x = body.x;
    let y = body.y;

    const w =  body.width;
    const h =  body.height;
    const colour = body.colour;
    const fill = body.fill;

    drawBox(ctx, x, y, w, h, fill, colour, 1);
     //console.log("x= "+x +" y=" +y +" w=" +w +" h=" +h);
}

// draw box from object
export function drawBoxO(ctx, o) {

    drawBox(ctx, o.x, o.y, o.base, o.height, o.fill, o.colour, o.quad);
}

export function drawBodyO(ctx, body = bodies[0]){

    const quad = body.quad;
    const area = body.area;
    const colour = body.colour;
    const fill = body.fill;
    const x = body.x;
    const y = body.y;

    let width = body.width;
    let height = area / body.width;

    if(quad === 1) height = - height;
    if(quad === 2) {width = - width, height= - height}
    if(quad === 3) width = - width;
    drawBox(ctx, x, y, width, height, fill, colour);
    drawCircle(ctx, width, height, 2, colour, true);
}


export function drawShape(x1=0, y1=0, x2=0, y2=0, x3=0, x4=0, colour=black){

}

export function completeClear(ctx){
    ctx.clearRect(-780, -780, 780, 780);
}
export function drawRectangle(ctx, rectangle) {
    const x1 = rectangle.x1;
    const y1 = rectangle.y1;
    const x2 = rectangle.x2;
    const y2 = rectangle.y2;
    const x3 = rectangle.x3;
    const y3 = rectangle.y3;
    const y4 = rectangle.y4;
    const x4 = rectangle.x4;
    const colour = rectangle.colour;

    ctx.beginPath();

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);

    ctx.strokeStyle = colour

    ctx.stroke();
    ctx.closePath();

}

export function eraseBox(ctx, h, w, x, y){
    if (!x) x = 0;
    if(!y) y = 0;
    ctx.beginPath();
    ctx.strokeStyle = ctx.background;
    ctx.rect(x, y,  w, h);
    ctx.closePath();
}


export function moveOrigin(ctx,x,y){
		 ctx.translate(x,y);
		 //myOrigins.push(new coOrds(x,y));
}

export function moveToCentre(diag){
    if(diag.centered) return;
    const x= diag.width/2;
    const y = diag.height/2;
    let ctx = diag.getContext('2d');
    ctx.translate(x, y);
}

export function moveToZero(diag){
    if(!diag.centered) return;
    const x= diag.width/2;
    const y = diag.height/2;
    let ctx = diag.getContext('2d');
    ctx.translate(-x,-y);

}

export function moveSquares(ctx,across=1,down=1) { // moves from the origin
    ctx.moveTo(centreX,centreY);
    let byx=across*square;
    let byy=down*square;
    ctx.moveTo(byx,byy);
}

export function drawGradient(ctx,stx,sty,endx,endy,colour){
		 let grd = ctx.createLinearGradient(0,0,200,0);
		 grd.addColorStop(0,"red");
		 grd.addColorStop(1,"white");

		 // Fill with gradient
		 ctx.fillStyle = grd;
		 ctx.fillRect(stx,sty,endx,endy);
}



export function drawLineLength(ctx, x=0, y=0, length, colour="black", move = false){
    drawLine(ctx, x, y, x+length, y, colour);
    if(move) penToCartesian(ctx, x+length, y);
}


export function penToCentre(ctx) {
    ctx.translate(centreX, centreY);
}


export function penToCartesian(ctx, x, y){
    ctx.translate(x, y);
}


export function penToPolar(ctx, radius, angle) {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    ctx.translate(x, y);
}


export function drawPolar(ctx, length, angle = 0, colour =black, move = false, thickness = 1){

    console.log(angle);
    let x = length * Math.cos(angle);
    let y = length * Math.sin(angle);
    //if(radToDeg(angle) < 180) y =-y;
    //console.log(x);
    //console.log(y);
    ctx.lineWidth=thickness;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.strokeStyle=rgbString(colour);
    ctx.stroke();
    ctx.closePath();
    if(move) penToCartesian(ctx, x, y);

    //console.log(Math.sin(angle));
}

export function testTriangle(ctx){
    ctx.setTransform(1,0,0,1,0,0);
    let angleInRadians =135 * Math.PI / 180;
    ctx.rotate(angleInRadians);
    ctx.fillStyle = "red"; //need list of available colors
    ctx.fillRect(100,100 , 50, 50);
}

export function rotate(ctx, angle){
    ctx.rotate(angle);
}

export function bodyCoOrdinates(body){
    const angle= body.angle;
    const d = body.distance;
    const theata = radToDeg(angle);
    let x = d * Math.cos(d);
    let y = d * Math.sin(d);

    //if(theata >= 0 && theata <=90 ) y =- y;
    if(theata > 90 && theata <= 180) {x =- x; y =-y }
    if(theata > 180 && theata <=270) x=-x;
    body.x = x;
    body.y = y;

}

export function degToRad(angle){
    return (angle*Math.PI)/180;
}

export function radToDeg(rad){
    return (180*rad)/Math.PI
}

export function rotation_radians(r) {      // r is number of radians
    const angle = r % (2 * Math.PI);
    return angle;
}

export function rotation_degrees(a) {
    const angle = a % 360;
    return angle;
}

export function drawArrowTriangle(ctx, x, y, base, height, direction, colour = "black", angle){
    let endX=0, endY=0
    if(!height) height=base;
    if(!direction) direction="R";
    if(!angle) angle=0;
    rotate(ctx, angle);
    if(direction === "R"){
        endY = y;
        endX = x + base;
        drawArrow(ctx, x, y , endX, endY, colour);
        endY = y-height;
        drawArrow(ctx, x, endY, x, y, colour);
        drawArrow(ctx, x, endY, endX, y-5, colour);
    }

    if(direction === "L"){
        endY = y;
        endX = x - base;
        drawArrow(ctx, x, y , endX, endY, colour);
        endY = y + height;
        drawArrow(ctx, x, endY, x, y, colour);
        drawArrow(ctx, x, endY, endX, y-5, colour);
    }

    rotate(ctx, -angle);
}

export function drawArrow(ctx, fromX, fromY, toX, toY, colour ="black", thickness, arrowWidth) {
    let headlen = 6;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    if(!colour) colour = black;
    if(!thickness) thickness = 2;
    if(arrowWidth) headlen=arrowWidth;

    // Set the arrow style
    ctx.strokeStyle = colour;
    ctx.fillStyle = colour;
    ctx.lineWidth = thickness;

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.lineTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.stroke();
    ctx.fill();
}

export function simpleArrow(ctx, stx, sty, len, direction,colour="black") {
    let x=stx; let y=sty;
    if(direction === "U") y=sty-len;
    if(direction === "D") y=sty+len;
    if(direction === "R") x=x-len;
    if(direction === "L") x=x+len;
    if(!colour) colour=black;
    drawArrow(ctx, stx, sty, x, y, colour)
}

export function clearCanvas(c){
    let height = c.height;
    let width = c.width;
    let ctx = c.getContext('2d');
    clearArea(ctx, 0, 0, width, height);
}
export function clearArea(ctx, x=0, y=0, w, h){
    ctx.clearRect(x, y, w, h);
}

export function getCentre(c){
    centreX = c.width / 2;
    centreY = c.height / 2;
}

