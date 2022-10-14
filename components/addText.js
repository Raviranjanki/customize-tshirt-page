export default function (value, parent) {
    if (!value || !parent) return;
    let canvas, ctx2, metrics, width;
    canvas = document.createElement("canvas");
    ctx2 = canvas.getContext("2d");
    canvas.classList.add("text");
    canvas.height = 50;
    draw();

    metrics = ctx2.measureText(value);
    width = metrics.width;
    canvas.width = width + 5;
    draw();

    parent.parentNode.append(canvas);

    function draw() {
        ctx2.fillStyle = "red";
        ctx2.font = "48px georgia";
        ctx2.fillText(value, 0, 48);
    }
}
