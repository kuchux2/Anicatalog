const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", function(){
    document.body.classList.toggle("dark");
   let currentTheme = "";
   if(document.body.classList.contains("dark")){
    currentTheme = "dark";
   }
   localStorage.setItem("theme", currentTheme)
});
window.addEventListener("load", function(){
    const theme = localStorage.getItem ("theme");
    if(theme === "dark"){
        document.body.classList.add("dark")
    }
});


const inputForm = document.getElementById("inputForm");
const animeName = document.getElementById("animeName");
const animeImg = document.getElementById("animeImg");
const selector = document.getElementById("selector");
const descriptionInput = document.getElementById("descriptionInput");
const submitBtn = document.getElementById("submitBtn");




const list = document.getElementById('anime-list');
const clearBtn = document.getElementById('clear-all');
let animeList = JSON.parse(localStorage.getItem('animeList')) || [];
function saveList() {
    localStorage.setItem('animeList', JSON.stringify(animeList));
}
function renderList() {
    list.innerHTML = '';
    animeList.forEach((anime, index) => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
        <div class = "cardBackgr">
      <img src="${anime.image}" alt="${anime.title}" class = "addImg">
      <div class="anime-info">
        <h3>${anime.title}</h3>
        <p>${anime.description}</p>
        <strong>Status: ${anime.selector}</strong><br>
        <button onclick="addToFav(${index})">Add to Favorites⭐</button>
        <button onclick="deleteOne(${index})">Delete🚫</button>
      </div>
      </div>
    `;
        list.appendChild(card);
    });
}
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newAnime = {
        title: animeName.value,
        image: animeImg.value,
        description: descriptionInput.value,
        selector: selector.value
    };
    animeList.push(newAnime);
    saveList();
    renderList();
    inputForm.reset();
});
clearBtn.addEventListener('click', function () {
    if (confirm('Видалити всі записи?')) {
        animeList = [];
        saveList();
        renderList();
    }
});
function deleteOne(index) {
    animeList.splice(index, 1);
    saveList();
    renderList();
}
function addToFav(index) {
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push(animeList[index]);
    localStorage.setItem('favs', JSON.stringify(favs));
    alert('Додано в улюблене!');
}
renderList();







// const favList = document.getElementById('fav-list');
// let favs = JSON.parse(localStorage.getItem('favs')) || [];
// function renderFavs() {
//     favList.innerHTML = '';
//     favs.forEach((anime, index) => {
//         const card = document.createElement('div');
//         card.className = 'anime-card';
//         card.innerHTML = `
//         <img src="${anime.image}" alt="${anime.title}">
//         <div class="anime-info">
//           <h3>${anime.title}</h3>
//           <p>${anime.description}</p>
//           <button onclick="removeFav(${index})">Видалити з улюбленого</button>
//         </div>
//       `;
//         favList.appendChild(card);
//     });
// }
// function removeFav(index) {
//     favs.splice(index, 1);
//     localStorage.setItem('favs', JSON.stringify(favs));
//     renderFavs();
// }
// renderFavs();
