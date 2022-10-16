export default (files) => {
    if (!files) return true;
    const MB = 4000000;
    const extention = files.type.split("/")[1];
    const imgExtension = ['jpeg', 'jpg', 'png', 'gif', 'tiff', 'psd', 'ai', 'indd', 'raw'];


    if (imgExtension.indexOf(extention) == -1) {
        alert("Please Select Valid Image");
        return true;
    }
    if (files.size > MB) {
        alert("Image size is greater then 4MB");
        return true;
    }
}
