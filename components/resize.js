export default function (element, parent){
    console.log(element);
    console.log(element.parentElement.nextElementSibling);
    element.onmousedown = function (event) {
        if (event.target.classList == "main") return;
        console.log(parent);
        function resizeCanvas(clientX) {
            parent.style.width = clientX  + "px";
        }
        function onMouseMove(event) {
            resizeCanvas(event.clientX)
        }

        parent.addEventListener("mousemove", onMouseMove);
        
        // document.onmouseup = function () {
        //     parent.removeEventListener("mousemove", onMouseMove);
        //     element.onmouseup = null;
        // };
        element.onmouseup = function () {
            parent.removeEventListener("mousemove", onMouseMove);
            element.onmouseup = null;
        };
    };
}