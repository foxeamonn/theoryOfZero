
export function showCoord(diagram, centred = false) {
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
        console.log(`X: ${x}, Y: ${y}`);
    });
}