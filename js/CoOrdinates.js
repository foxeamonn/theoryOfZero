
let x;
let y;

export function CalcCoord(diagram) {
    diagram.addEventListener('mousemove', (event) => {
        const rect = diagram.getBoundingClientRect();
        const height = diagram.height;
        const width = diagram.width;
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        
        // Update the coordinates in the paragraph element
        console.log(`X: ${x}, Y: ${y}`);

    });


}