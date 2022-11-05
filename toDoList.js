const newList = document.querySelector(".myList");
const delElement = document.querySelector(".myBtn");
const insert = document.querySelector("#textArea");
const clickBtn = document.querySelector(".addText");
const text = document.querySelector(".myList p");
const newBtnForm = document.querySelector("#myBtnForm");
const newInp = document.querySelector(".myInp");
const myInput = document.querySelector('.myInp input');
const sortButton = document.querySelector(".sort");

//add new task

insert.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (insert.value.length == 0) {
      alert("Enter the task");
      newBtnForm.style.display = "block";
      newInp.style.border = "1px solid #C4C4C4";
    } 
    else {
      const newLi = document.createElement("LI");
      newLi.classList.add("showMyLi");
      newLi.innerHTML = insert.value;
      const deletebtn = document.createElement("button");
      deletebtn.classList.add("remove-btn");
      newLi.appendChild(deletebtn);
      newList.appendChild(newLi);
      insert.value = "";
      newList.style.display = "block";
      newList.style.display = "flex";
      newBtnForm.style.display = "none";
      newLi.setAttribute("draggable", true);
      newBtnForm.style.marginTop = '0px';
      newLi.lastChild.style.marginBottom = '0px';
    }
  }

//task remove

  const delLi = document.querySelectorAll(".remove-btn");
  for (let i = 0; i < delLi.length; i++) {
    delLi[i].onclick = function () {
      this.parentNode.remove();
      if (newList.childElementCount == 0) {
        newList.style.display = "none";
        newBtnForm.style.display = "block";
        newBtnForm.style.marginTop = '10px';
        newInp.style.border = "1px solid #C4C4C4";
        newInp.style.display = 'block';
      }
    }
  }
});

clickBtn.addEventListener("click", () => {
  newBtnForm.style.display = "block";
  newInp.style.border = "1px solid #C4C4C4";
  newInp.style.display = 'block'
  myInput.focus()
});

delElement.addEventListener("mouseleave", () => {
  delElement.style.background = `url(./img/closeBtn.svg)`;  
  delElement.style.backgroundSize = 'cover'
  delElement.style.backgroundRepeat = "no-repeat"
  delElement.style.backgroundPosition = "center";
  delElement.style.width = '20px';
  delElement.style.height = '20px';
});

delElement.addEventListener("mouseover", () => {
  delElement.style.background = `url(./img/closeBtnHov.svg)`;
  delElement.style.backgroundPosition = "center";
  delElement.style.backgroundRepeat = "no-repeat"
  delElement.style.backgroundSize = 'cover'
  delElement.style.width = '20px';
  delElement.style.height = '20px';
});

delElement.addEventListener("click", () => {
  insert.value = "";
});

const myDrag = document.querySelector('.wrap');
new Sortable(myDrag, {
  animation: 250
})

let isTrue = true;
sortButton.onclick = function () {
  if (isTrue) {
    isTrue = false;
    sortButton.style.background = "url(./img/sorted.svg)";
    sortButton.style.width = "25px";
    sortButton.style.height = "15px";
    sortButton.style.backgroundSize = 'cover'
    sortButton.style.backgroundRepeat = 'no-repeat'
    sortButton.style.border = "none";

    sortButton.onmouseout = function () {
      sortButton.style.background = `url(./img/sort.svg)`;
      sortButton.style.transition = "0.2s";
      sortButton.style.width = "25px";
      sortButton.style.height = "15px";
      sortButton.style.backgroundSize = 'cover'
      sortButton.style.backgroundRepeat = 'no-repeat'
    };

    sortButton.onmouseover = function () {
      sortButton.style.background = `url(./img/sorted.svg)`;
      sortButton.style.width = "25px";
      sortButton.style.height = "15px";
      sortButton.style.backgroundSize = 'cover'
      sortButton.style.backgroundRepeat = 'no-repeat'
      sortButton.style.transition = "0.2s";
    };
  } 
  else {
    isTrue = true;
    sortButton.style.background = "url(./img/reverseSorted.svg)";
    sortButton.style.width = "25px";
    sortButton.style.height = "15px";
    sortButton.style.backgroundSize = 'cover'
    sortButton.style.backgroundRepeat = 'no-repeat'
    sortButton.style.border = "none";

    sortButton.onmouseout = function () {
    sortButton.style.background = `url(./img/reverseSort.svg)`;
    sortButton.style.transition = "0.2s";
    sortButton.style.width = "25px";
    sortButton.style.height = "15px";
    sortButton.style.backgroundSize = 'cover'
    sortButton.style.backgroundRepeat = 'no-repeat'
    };

    sortButton.onmouseover = function () {
    sortButton.style.background = `url(./img/reverseSorted.svg)`;
    sortButton.style.transition = "0.2s";
    sortButton.style.width = "25px";
    sortButton.style.height = "15px";
    sortButton.style.backgroundSize = 'cover'
    sortButton.style.backgroundRepeat = 'no-repeat'
    }; 
  }

  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = newList.getElementsByTagName("LI");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } 
      else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } 
    else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};