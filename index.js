var myMealList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myMealList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myMealList[i].appendChild(span);
}

// function to remove item....
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {s
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Click on items to toogle and check them......
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new Meal item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// function modify(){
//     document.getElementById("listy").innerHTML.
// }