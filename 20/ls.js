
//1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
   //Використовуючи JavaScript, змініть стиль одного або декількох елементів 
   //(наприклад, колір фону або розмір шрифту).

    function myFunction() {
    document.getElementsByTagName("button")[0].style.backgroundColor = "red";
  }

  
//2. Зміна текстового вмісту: Створіть елементи, які містять текст. За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.

  function changeText() {
  document.getElementById("myHeading").innerHTML = "New text!";
}

//3. Додавання нового елементу: За допомогою JavaScript,

  function AddItem() {
  var para = document.createElement("p");
  var node = document.createTextNode("Hello!!!.");
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);
}
  
//4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.


  function removeElement() {
  var elem = document.getElementById("demo");
  elem.parentNode.removeChild(elem);
}


//5. Зміна атрибутів: Створіть елементи, які мають атрибути 
  // (наприклад, "src" для зображення або "href" для посилання).
  // За допомогою JavaScript, змініть атрибути цих елементів.

  function AttributeChanges() {
    document.getElementById("myImg").src= "./Новая папка/IMG_0053.JPG";
  }

//6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами. 
   //Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("MyList");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
  


//7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
   //змініть порядок цих елементів в DOM.

   function change() {
    var list = document.getElementById("myList");
    var items = list.getElementsByTagName("li");
    var itemsArr = [];
    for (var i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
    itemsArr.sort(function(a, b) {
      return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
    });
    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }

  

//8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
   //Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.
   function delit() {
    var parent = document.getElementById("myDiv");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  

//9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, змініть класи цих елементів без використання подій.


  function changeclass() {
  var elements = document.getElementsByClassName("oldClass");
  for (var i = 0; i < elements.length; i++) {
    elements[i].className = "newClass";
    console.log("Класи елементів були успішно змінені.");

  }
}

//10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. 
    //Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
    //переміщення або видалення існуючих елементів.

    function chengeHTML() {
      var para = document.createElement("p");
      var node = document.createTextNode("Це новий елемент.");
      para.appendChild(node);
    
      var element = document.getElementById("myDive");
      element.appendChild(para);
    }

  