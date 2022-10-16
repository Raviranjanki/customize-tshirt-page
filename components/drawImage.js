import checkImage from "./checkImage.js";
import elementFeatures from "./elementFeatures.js";
export default (mainCanvas, chooseFile) => {
    if(!mainCanvas || !chooseFile) return;
    let canvas, ctx, files;
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    files = chooseFile.files[0];
    if(checkImage(files)){
        return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = function () {
        let img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            resizeBox.style.width = img.width;
            resizeBox.style.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = this.result;
    };
    let [resizeBox, div] = elementFeatures();
    resizeBox.append(canvas, div);
    mainCanvas.parentNode.append(resizeBox);
}