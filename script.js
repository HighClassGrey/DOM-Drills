let headerDiv = document.createElement('div')

// creates an element
// creates text for the element
// aappend element to text
// show on page

let h1 = document.createElement('H1');
let h1Text = document.createTextNode('This is an h1');
h1.style.textTransform = 'uppercase'
h1.append(h1Text);
headerDiv.appendChild(h1);

let h2 = document.createElement('H2');
let h2Text = document.createTextNode('This is an h2');
h2.style.textTransform = 'uppercase'
h2.append(h2Text);
headerDiv.appendChild(h2); document.body.append(headerDiv);

let h3 = document.createElement('H3');
let h3Text = document.createTextNode('This is an h3');
h3.style.textTransform = 'uppercase'
h3.append(h3Text);
headerDiv.appendChild(h3);

let h4 = document.createElement('H4');
let h4Text = document.createTextNode('This is an h4');
h4.style.textTransform = 'uppercase'
h4.append(h4Text);
headerDiv.appendChild(h4);

let h5 = document.createElement('H5');
let h5Text = document.createTextNode('This is an h5');
h5.style.textTransform = 'uppercase'
h5.append(h5Text);
headerDiv.appendChild(h5);

let h6 = document.createElement('H6');
let h6Text = document.createTextNode('This is an h6');
h6.style.textTransform = 'uppercase'
h6.append(h6Text);
headerDiv.appendChild(h6);

//add to body
document.body.append(headerDiv);

headerDiv.classList.add('header-container');


//random colors function
function randomColor() {
    let colors = ['red', 'yellow', 'green', 'purple'];
    let randomNumber = Math.floor((Math.random() * colors.length) + 1);
    return colors[randomNumber];
};

//event listener for random colors
headerDiv.addEventListener('mouseover', function () {
    headerDiv.style.color = randomColor();
});

//create unordered list
let ul = document.createElement('ul');
document.body.append(ul);


//add button 
let listButton = document.createElement("button");
let buttonText = document.createTextNode("Click to add new list item");
listButton.append(buttonText);
document.body.append(listButton);

//add button event
listButton.addEventListener('click', function () {
    listadder();
});

liCounter = 0;

function listadder() {

    let li = document.createElement('li')
    let listText = 'This is list item ' + liCounter;
    liText = document.createTextNode(listText);
    liCounter++;
    li.append(liText);
    ul.appendChild(li);

    li.addEventListener('mouseover', function () {
        li.style.color = randomColor();

        li.addEventListener('click', function () {
            li.style.color = 'white';

            
        });
    });
};

