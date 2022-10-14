const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const click = document.querySelector('article');
const chooseFile = document.querySelector('input[type="file"]');
const addtext = document.querySelector('input[type="text"]')
const defaultImage = document.querySelector('.default')

export {canvas, ctx, click, chooseFile, addtext, defaultImage};