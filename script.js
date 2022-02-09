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