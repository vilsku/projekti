'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

const getImage = async () => {
  const response = await fetch(url + '/image');
  const images = await response.json();
  for (const image of images) {
    ul.innerHTML += `
    <li>
        <h2>${image.name}</h2>
        <figure>
            <img src="uploads/${image.filename}" class="resp">
        </figure>
    </li>
    `;
  }
};

/* // select existing html elements
const addForm = document.querySelector('#addImageForm');
const ul = document.querySelector('ul');

const createImageCards = (images) => {
  // clear ul
  ul.innerHTML = '';
  images.forEach((image) => {
    // create li with DOM methods
  const img = document.createElement('img');
  img.src = url + '/' + image.filename;
  img.alt = image.name;
  img.classList.add('resp');

  const figure = document.createElement('figure').appendChild(img);

  const li = document.createElement('li');
  li.classList.add('light-border');

  li.appendChild(figure);
  ul.appendChild(li);

  });
};

const getImage = async () => {
  try {
    const response = await fetch(url + '/');
    const images = await response.json();
    createImageCards(images);
  }
  catch (e) {
    console.log(e.message);
  }
};
getImage();

addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    body: fd,
  };
  const response = await fetch(url + '/', fetchOptions);
  const json = await response.json();
  console.log('add response', json);
  getImage();
});
*/