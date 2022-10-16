const canvas = document.querySelector('canvas');
const ctx = canvas&&canvas.getContext('2d');
const click = document.querySelector('article:first-child');
const chooseFile = document.querySelector('input[type="file"]');
const showInput = document.querySelector('#js-add-text')
const getText = document.querySelector('input[type="text"]');
const defaultImage = document.querySelector('.default');
const inputBox = document.querySelector('.input-box');
const canvasContainer = document.querySelector(".show-tshirt-sides");

export { canvas, ctx, click, chooseFile, getText, defaultImage, canvasContainer, showInput, inputBox };