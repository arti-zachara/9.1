"use strict";
// standard start

// task data
var data = [
  {
    id: "box1",
    title: "First box",
    content: "<p>Lorem ipsum dolor sit amet!</p>",
    categories: ["highlighted", "special-header", "important"]
  },
  {
    id: "box2",
    title: "Second box",
    content: "<p>Lorem ipsum dolor sit amet!</p>",
    categories: ["special-header", "important"]
  },
  {
    id: "box3",
    title: "Third box",
    content: "<p>Lorem ipsum dolor sit amet!</p>",
    categories: ["highlighted", "important"]
  },
  {
    id: "box4",
    title: "Fourth box",
    content: "<p>Lorem ipsum dolor sit amet!</p>",
    categories: ["highlighted"]
  },
  {
    id: "box5",
    title: "Fifth box",
    content: "<p>Lorem ipsum dolor sit amet!</p>",
    categories: []
  }
];

// function adding clases to the specified elements, from categories specified in an array
function addClassToBox(boxElement, boxCategoryList) {
  var box = document.getElementById(boxElement);
  box.classList.add("box");
  for (var i = 0; i < boxCategoryList.length; i++) {
    box.classList.add(boxCategoryList[i]);
  }
}

// function inserting html code from the data array
for (var i = 0; i < data.length; i++) {
  var taskBody = document.getElementById("task-body");
  taskBody.insertAdjacentHTML(
    "beforeend",
    "<div id='" +
      data[i].id +
      "'><header>" +
      data[i].title +
      "</header>" +
      data[i].content
  );
  addClassToBox(data[i].id, data[i].categories);
}
