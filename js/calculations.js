// various calculations

export function calcHypoteneuse(a, b){
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

}

export function coOrds(length, angle){
    const x = length * Math.cos(angle);
    const y = length * Math.sin(angle);
    return {x:x, y:y}
}

export function degToRad(){}

export function radToDeg(){}