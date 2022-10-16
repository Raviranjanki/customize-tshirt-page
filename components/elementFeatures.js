const icon = {
  resize: `<svg class="w-64 h-64" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 11v-8h8"></path>
    <path d="M19 20h8v-8"></path>
    <line x1="10" y1="3" x2="26" y2="19"></line>
  </svg>`,
  remove: `<svg class="w-64 h-64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path></svg>`,
};

export default () => {
  let resizeBox, div, resize, remove;
  resizeBox = document.createElement("div");
  div = document.createElement("div");
  remove = document.createElement("span");
  resize = document.createElement("span");
  resize.classList.add('resize-canvas');
  remove.classList.add('remove-canvas');
  remove.innerHTML = icon.remove;
  resize.innerHTML = icon.resize;
  resizeBox.classList.add("resize");

  div.append(remove, resize);
  return [resizeBox, div];
}
