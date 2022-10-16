import elementFeatures from "./elementFeatures.js";

export default (value, parent) => {
    if (!value || !parent) return;
    let canvas, ctx;
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    canvas.classList.add("text-container");
    canvas.height = 60;

    draw(ctx, value, canvas);

    draw(ctx, value, canvas);

    let [resizeBox, div] = elementFeatures();
    resizeBox.append(canvas, div);
    parent.parentNode.append(resizeBox);
}

export function draw(ctx, value, canvas) {
    let metrics, width;
    metrics = ctx.measureText(value);
    width = metrics.width;
    canvas.width = width;
    ctx.font = "48px georgia";
    ctx.fillText(value, 0, 45);
}
