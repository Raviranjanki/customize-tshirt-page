export default function (element, canvas) {
    if (!element || !canvas) return;
    element.onmousedown = function (event) {
        if (event.target.classList == "main") return;
        console.log(element);
        let moveCanvas = element.parentElement;
        moveCanvas.tagName == "ARTICLE"
            ? (moveCanvas = element)
            : (moveCanvas = element.parentElement);
        console.log(moveCanvas.tagName);
        element.style.border = "1px solid red";
        let shiftX, shiftY, elementPos, canvasPos, canvasLeft, canvasRight;

        elementPos = element.getBoundingClientRect();
        shiftX = event.clientX - elementPos.left;
        shiftY = event.clientY - elementPos.top;

        function moveAt(clientX, clientY) {
            moveCanvas.style.left = clientX - shiftX + "px";
            moveCanvas.style.top = clientY - shiftY + "px";
        }
        function onMouseMove(event) {
            canvasPos = canvas.getBoundingClientRect();
            canvasLeft = event.clientX - canvasPos.left;
            canvasRight = event.clientY - canvasPos.top;
            moveAt(canvasLeft, canvasRight);
        }

        canvas.addEventListener("mousemove", onMouseMove);

        canvas.onmouseup = function () {
            canvas.removeEventListener("mousemove", onMouseMove);
            canvas.onmouseup = null;
        };

        moveCanvas.onmouseup = function () {
            canvas.removeEventListener("mousemove", onMouseMove);
            moveCanvas.onmouseup = null;
        };
    };
}
