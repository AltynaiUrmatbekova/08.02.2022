// // Method 1.

// // Create
// document.body.innerHTML = "<h1>Hello world!</h1>";
// // Find
// let h1Element = document.querySelector('h1');
// // Modify
// h1Element.style.color = "rgb(255, 0, 0)";

// // Method 2.

// // Create
// let h2Element = document.createElement('h2');
// // Attach
// document.body.prepend(h2Element);
// // Modify
// h2Element.textContent = "Nice to meet you!";

let exercisesElement = document.querySelector('#exercises');

// append - insert element before closing tag
// prepend - insert element after opening tag
// before - insert element before opening tag
// after - insert element after closing tag

// create
let h1Element = document.createElement('h1'); 
// modify
h1Element.textContent = "H1 header";
// attach
exercisesElement.append(h1Element);


let h2Element = document.createElement('h2');
h2Element.textContent = "H2 header";
exercisesElement.append(h2Element);

let h3Element = document.createElement('h3');
h3Element.textContent = "H3 header";
exercisesElement.append(h3Element);

let h4Element = document.createElement('h4');
exercisesElement.append('h4Element');
h4Element.textContent = ('H4 Header');

let h5Element = document.createElement('h5');
h5Element.textContent = "H5 Header";
exercisesElement.before('h5Element');

let h6Element = document.createElement('h6');
h6Element.textContent = "H6 Header";
exercisesElement.after('h6Element');


// Exercise

let exercise1 = document.querySelector('#exercise1');
exercise1.before('before');
exercise1.prepend('prepend');
exercise1.append('append');
exercise1.after('after');

// exercise1/replacedWith('replaced');

// let buttonElement = document.querySelector('button');

let button = document.createElement('button');
exercisesElement.prepend(button);
button.textContent = ('Launch Meeting');
button.style.padding = "10px 25px";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.background = "blue";
button.style.border = "none";

let shoppingList = ['Apple', 'Banana', 'Pineapple'];
// create ul
let listElement = document.createElement('ul');
exercisesElement.prepend(listElement);
// create li
for (let i = 0; i < shoppingList.length; i++) {
    let listItemElement = document.createElement('li');
    listElement.append(listItemElement);
    listItemElement.textContent = shoppingList[i];  
}
// how to copy
let button2 = button.cloneNode();
button2.textContent = "hello"
exercisesElement.prepend(button2);

let button3 = button.cloneNode();
button3textContent = "Yellow";
button.style.background = "yellow";
exercisesElement.prepend(button3);

// how to remove
button2.remove();

let list2 = listElement.cloneNode(true);
exercisesElement.prepend(list2);

let table = document.createElement('table');
exercisesElement.prepend(table);
for (let i = 0; i < shoppingList.length; i++) {
let tr = document.createElement('tr');
table.append(tr);
let td = document.createElement('td');
tr.append(td);
td.style.border = "1px solid black";
td.textContent = shoppingList[i];
}

let colorful = document.createElement('div');
colorful.textContent = "Hello";
document.body.prepend(colorful);
colorful.style.color = 'rgb${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})'

