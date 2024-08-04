let btn = document.getElementById("button");
let textArea = document.getElementById("textarea");
let myNotes = document.getElementById("notes-container");
let colors = document.getElementById("color");
let message = document.getElementById("message");

function addNotes() {
  if (textArea.value === "") {
    alert("please enter some text in sticky notes");
    return;
  }

  message.innerText = "";

  let div = document.createElement("div");
  let p = document.createElement("p");
  let crossBtn = document.createElement("button");

  div.appendChild(p);
  div.appendChild(crossBtn);

  crossBtn.innerText = "X";
  p.innerText = textArea.value;
  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  div.style.alignItems = "start";
  div.style.height = "150px";
  div.style.width = "200px";
  div.style.borderRadius = "10px";
  crossBtn.style.background = "none";


  myNotes.appendChild(div);

  div.style.backgroundColor = colors.value;
  textArea.value = "";

  crossBtn.addEventListener("click", function (e) {
    div.remove();
    message.innerText = "Sticky note deleted.";
    setTimeout(function () {
      message.innerText = "";
    }, 2000);
  });
}

btn.addEventListener("click", addNotes);
