export default ( element, canvas, canvasContainer) => {
    if(!element || !canvas || !canvasContainer) return;
    const resizeableCanvas = element.parentElement.previousElementSibling;
    let elementPos, canvasLeft;
    elementPos = resizeableCanvas.getBoundingClientRect();
    
    function moveAt(clientX) {
        if(resizeableCanvas.style.width > canvas.width) return;
        resizeableCanvas.style.width = clientX + "px";
    }
    function onMouseMove(event) {
        let maxCanvasWidth = event.clientX - canvas.getBoundingClientRect().left;
        if(maxCanvasWidth > canvas.width) return;
        canvasLeft = event.clientX - elementPos.left;
        moveAt(canvasLeft);
    }
    document.addEventListener("mousemove", onMouseMove);
    canvasContainer.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
        canvas.onmouseup = null;
    });
}