import { canvas, chooseFile } from "./elements.js";
export default function getImage(element) {
    const icon = {
        resize: `<svg class="w-64 h-64" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 21l-11 -11"></path>
        <path d="M3 14v-4h4"></path>
        <path d="M17 14h4v-4"></path>
        <line x1="10" y1="3" x2="21" y2="14"></line>
      </svg>`,
        cross: `<svg class="w-64 h-64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path></svg>`,
    };
    let resizeBox, div, resize, cross;
    resizeBox = document.createElement("div");
    div = document.createElement("div");
    cross = document.createElement("span");
    resize = document.createElement("span");
    cross.textContent = "X";
    resize.textContent = ">";
    resizeBox.classList.add("resize");
    let canvas2 = document.createElement("canvas");
    var ctx = canvas2.getContext("2d");
    const files = chooseFile.files[0];
    const MB = 4000000;
    if (!files || files.size > MB) return;
    var reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = function () {
        var img = new Image();
        img.onload = function () {
            canvas2.width = img.width;
            canvas2.height = img.height;
            console.log(img.width);
            resizeBox.style.width = img.width;
            resizeBox.style.height = img.height;
            console.log(resizeBox);
            ctx.drawImage(img, 0, 0);
        };
        img.src = this.result;
    };
    div.append(cross, resize);
    resizeBox.append(canvas2, div);
    canvas.parentNode.append(resizeBox);
}
