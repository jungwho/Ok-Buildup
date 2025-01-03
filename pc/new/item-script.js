const newSlider = document.getElementById("new-img-slider");
const leftBtn1 = document.getElementById("left-button");
const rightBtn1 = document.getElementById("right-button");

let index1 = 0;

const onClickNext1 = () => {
  if (index1 === newSlider.children.length - 1) index1 = 0;
  else index1++;

  newSlider.style.transform = `translateX(-${index1 * 100}%)`;
};

const onClickPrev1 = () => {
  if (index1 === 0) index1 = newSlider.children.length - 1;
  else index1--;

  newSlider.style.transform = `translateX(-${index1 * 100}%)`;
};
