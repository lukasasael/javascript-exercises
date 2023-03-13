function alertFunction() {
    alert("YAY! YOU DID IT!");
}
//btn.onclick = alertFunction;
//btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const pa1 = document.createElement('p');
pa1.textContent = "Hey I'm red!";
pa1.style.color = 'red';

container.appendChild(pa1);

const he1 = document.createElement('h3');
he1.textContent = "I'm a blue h3!";
he1.style.color = 'blue';

container.appendChild(he1);

const div1 = document.createElement('div');
div1.style.border = 'thick solid black';
div1.style.backgroundColor = 'pink';

container.appendChild(div1);

const he2 = document.createElement('h1');
he2.textContent = "I'm in a div";

div1.appendChild(he2);

const pa2 = document.createElement('p');
pa2.textContent = "ME TOO!";

div1.appendChild(pa2);