'use srict';
const url = 'http://localhost:3000'; // change url when uploading to server

const ul = document.querySelector('ul');


const getImg = async () => {
  const response = await fetch(url + '/img');
  const imgs = await response.json();
  for (const img of imgs) {
    ul.innerHTML += `
    <li class="img">
        <h2>${img.name}</h2>
        <figure>
            <img src="../uploads/${img.filename}" class="resp">
        </figure>
        <p>${img.tag1}</p>
        <p>${img.tag2}</p>
        <p>${img.tag3}</p>
    </li>
    `;
  }
};
getImg();