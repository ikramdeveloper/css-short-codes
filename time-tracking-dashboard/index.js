"use strict";
const selectList = document.querySelector(".card__owner");
const currentText = document.querySelectorAll(".current");
const previousText = document.querySelectorAll(".previous");
const list = document.querySelectorAll("li");

const getData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  console.log(data);
  return data;
};

const selectMenu = (e) => {
  const target = e.target;
  if (target.matches("#daily")) {
    unSelect();
    target.classList.toggle("selected");
    updateTimeText("daily", "Daily");
  }
  if (target.matches("#weekly")) {
    unSelect();
    target.classList.toggle("selected");
    updateTimeText("weekly", "Weekly");
  }

  if (target.matches("#monthly")) {
    unSelect();
    target.classList.toggle("selected");
    updateTimeText("monthly", "Monthly");
  }
};

async function updateTimeText(select, select2) {
  const data = await getData();
  data.forEach((v, i) => {
    const current = v.timeframes[select].current;
    const previous = v.timeframes[select].previous;
    currentText[i].innerText = `${current}hrs`;
    previousText[i].innerText = `Last ${select2} - ${previous}hrs`;
  });
}

function unSelect() {
  list.forEach((v) => v.classList.remove("selected"));
}
function init() {
  updateTimeText("weekly", "Weekly");
}
init();
selectList.addEventListener("click", selectMenu);
