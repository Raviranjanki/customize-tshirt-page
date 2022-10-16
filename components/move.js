export default (element, canvas, canvasContainer) => {
    if (!element || !canvas || !canvasContainer) return;
    element.onmousedown = function (event) {
        let moveCanvas, shiftX, shiftY, elementPos;
        moveCanvas = element.parentElement;
        moveCanvas.tagName == "ARTICLE" ? (moveCanvas = element) : (moveCanvas = element.parentElement);
        elementPos = element.getBoundingClientRect();
        shiftX = event.clientX - elementPos.left;
        shiftY = event.clientY - elementPos.top;

        function moveAt(clientX, clientY) {
            let top, right, bottom, left;
            top = elementPos.height - clientY + shiftY - elementPos.height > 0;
            left = elementPos.width - clientX + shiftX - elementPos.width > 0;
            bottom = clientY + elementPos.height - shiftY > canvas.height;
            right = clientX + elementPos.width - shiftX > canvas.width;

            if (top || left || bottom || right) return;

            moveCanvas.style.left = clientX - shiftX + "px";
            moveCanvas.style.top = clientY - shiftY + "px";
        }
        function onMouseMove(event) {
            let canvasPos, canvasLeft, canvasRight
            canvasPos = canvas.getBoundingClientRect();
            canvasLeft = event.clientX - canvasPos.left;
            canvasRight = event.clientY - canvasPos.top;
            moveAt(canvasLeft, canvasRight);
        }

        document.addEventListener("mousemove", onMouseMove);
        canvasContainer.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMouseMove);
            canvas.onmouseup = null;
        });
    };
}
