import drawImage from "./drawImage.js";

export default function (img) {
    if(!img) return;
    let canvas, ctx, width, height;
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.width;
    ctx.drawImage(img, 0, 0, width, height);
    canvas.parentElement.style.width = `${width}px`;
    canvas.parentElement.style.height = `${height}px`;
}


