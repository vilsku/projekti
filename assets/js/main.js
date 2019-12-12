'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
const addForm = document.querySelector('#addImageForm');
const ul = document.querySelector('ul');

// create cat cards
const createImgCards = (images) => {
  // clear ul
  ul.innerHTML = '';
  images.forEach((image) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/' + image.filename;
    img.alt = image.name;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerHTML = image.name;

    const li = document.createElement('li');
    li.classList.add('light-border');

    li.appendChild(h2);
    li.appendChild(figure);
    ul.appendChild(li);
  });
};

const getImg = async () => {
  try {
    const response = await fetch(url + '/cat');
    const cats = await response.json();
    createImgCards(cats);
  }
  catch (e) {
    console.log(e.message);
  }
};
getImg();