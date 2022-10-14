import addText from "./components/addText.js";
import getImage from "./components/drawImage.js";
import {
    canvas,
    click,
    chooseFile,
    addtext,
    defaultImage,
} from "./components/elements.js";
import handleClick from "./components/handleClick.js";
import move from "./components/move.js";
import resize from "./components/resize.js";

(() => {
    handleClick(defaultImage);
    click.addEventListener("click", (e) => {
        if (e.target != e.currentTarget);
        handleClick(e.target);
    });

    addtext.addEventListener("change", (e) => {
        const value = e.target.value;
        addText(value, canvas);
    });

    const text = document.querySelector(".canvas");

    text.addEventListener("mousedown", (e) => {
        const element = e.target;
        move(element, canvas);
    });

    chooseFile.addEventListener("change", (e) => {
        getImage(canvas);
    });

    text.addEventListener("mousedown", (e) => {
        if (e.target.tagName != "SPAN") return;
        const element = e.target;
        const moveCanvas = element.parentElement.previousElementSibling;
        let canvasLeft = 0;
        function onMouseMove(e) {
            if (canvasLeft > canvas.width) return;
            const canvasPos = canvas.getBoundingClientRect();
            canvasLeft = e.clientX - canvasPos.left;
            moveCanvas.style.width = `${canvasLeft}px`;
        }
        document.addEventListener("mousemove", onMouseMove);
        text.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMouseMove);
            canvas.onmouseup = null;
        });
    });
})();
