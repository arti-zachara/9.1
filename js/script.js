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

// function inserting html code from the data array
for (var i = 0; i < data.length; i++) {
  var taskBody = document.getElementById("task-body");
  var boxesCodeClass = "";
  if (data[i].categories.length == 0) {
    boxesCodeClass = "class='box'>";
  } else {
    var boxCategories = data[i].categories.join(" ");
    boxesCodeClass = "class='box " + boxCategories + "'>";
  }
  var boxesCode =
    "<div id='" +
    data[i].id +
    "' " +
    boxesCodeClass +
    "<header>" +
    data[i].title +
    "</header>" +
    data[i].content;

  taskBody.insertAdjacentHTML("beforeend", boxesCode);
}
