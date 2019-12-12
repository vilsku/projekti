'use srict';
const url = 'http://localhost:3000'; // change url when uploading to server

const ul = document.querySelector('ul');


const getSearch = async () => {
  $("li").remove();
  const response = await fetch(url + '/img/search/' + $("#search").val());
  const imgs = await response.json();
  for (const image of imgs) {
    ul.innerHTML += `
    <li>
        <h2>${image.name}</h2>
        <figure>
            <img src="../uploads/${image.filename}" class="resp">
        </figure>
        <p class="tag">${image.tag1}</p>
        <p class="tag">${image.tag2}</p>
        <p class="tag">${image.tag3}</p>
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
    <li>
        <h2>${img.name}</h2>
        <figure>
            <img src="../uploads/${img.filename}" class="resp">
        </figure>
        <p class="tag">${img.tag1}</p>
        <p class="tag">${img.tag2}</p>
        <p class="tag">${img.tag3}</p>
    </li>
    `;
    $(".tag").on("click", function () {
      console.log("click", this.innerText );
      $("#search").val(this.innerText);
      getSearch();

    });
  }
};
getImg();
$("#searchBtn").on("click", getSearch);
$("#logo").on("click", getImg);
