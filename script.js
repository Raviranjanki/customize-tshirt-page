import addText, { draw } from "./components/addText.js";
import drawImage from "./components/drawImage.js";
import { canvas, click, chooseFile, getText, defaultImage, canvasContainer, showInput, inputBox } from "./components/elements.js";
import handleClick from "./components/handleClick.js";
import move from "./components/move.js";
import resizeCanvas from "./components/resize.js";

(() => {
    const addTextBtn = inputBox && inputBox.lastElementChild;

    handleClick(defaultImage);

    click && click.addEventListener("click", (e) => {
        if (e.target != e.currentTarget);
        handleClick(e.target);
    });

    showInput && showInput.addEventListener("click", () => {
        inputBox.style.visibility = "visible";
    });

    getText &&
        getText.addEventListener("keyup", (e) => {
            const value = e.target.value;
            if (e.key === 'Enter') {
                addText(value, canvas);
            }
        });

    addTextBtn.addEventListener("click", () => {
        addText(getText.value, canvas);
        console.log(getText.value);
    });

    canvasContainer &&
        canvasContainer.addEventListener("mousedown", (e) => {
            const element = e.target;
            move(element, canvas, canvasContainer);

            if (element.classList.contains("resize-canvas")) {
                resizeCanvas(element, canvas, canvasContainer);
            }
            if (element.classList.contains("remove-canvas")) {
                const resizeableCanvas = element.parentElement.parentElement;
                resizeableCanvas.remove();
            }
        });
        
    chooseFile &&
        chooseFile.addEventListener("change", () => {
            drawImage(canvas, chooseFile);
        });
})();
