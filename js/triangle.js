// triangle functions

export class MakeTriangle {
    constructor(x1, y1, base, height, colour = "black",  fill = false, id="none") {
        this.base = base;
        this.height = height;
        this.x1 = x1;
        this.y1 = y1;
        this.y2 = y1;
        this.colour = colour;
        this.fill = fill;
        this.id = id;
        this.area = (base * height);

        if(id === "triangleOne"){
            this.x2 = x1 - base;
            this.x3 = this.x2;
            this.y3 = y1 - height;
        }
        else{
            this.x2 = x1 + base;
            this.x3 = this.x2;
            this.y3 = y1 + height;
        }
    }
    
}

export function Update(t, direction){
       direction ==="A" ? t.base += t.change: t.base -= t.change;
       t.height = t.area / t.base;
       t.x3 = t.x2;
       if(t.id === "triangleOne"){
           t.x2 = t.x1 - t.base;
           t.y3 = t.y1 - t.height;
       }
       else{
           t.x2 = t.x1 + t.base;
           t.y3 = t.y1 + t.height;
       }
}