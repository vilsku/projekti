'use srict';
const url = 'http://localhost:3000'; // change url when uploading to server

const ul = document.querySelector('ul');


const getSearch = async () => {
  $("li").remove();
  const response = await fetch(url + '/img/search/'+$("#search").val());
  const imgs = await response.json();
  for (const image of imgs) {
    ul.innerHTML += `
    <li>
        <h2>${image.name}</h2>
        <figure>
            <img src="../uploads/${image.filename}" class="flex-item">
        </figure>
        <p>${image.tag1}</p>
        <p>${image.tag2}</p>
        <p>${image.tag3}</p>
    </li>
    `;
  }
};


const getImg = async () => {
  $("li").remove();
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
$("#searchBtn").on("click",getSearch);
$("#logo").on("click",getImg);

