const favList = document.getElementById('fav-list');
let favs = JSON.parse(localStorage.getItem('favs')) || [];
function renderFavs() {
    favList.innerHTML = '';
    favs.forEach((anime, index) => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
        <div class = "cardBackgr">
        <img src="${anime.image}" alt="${anime.title}" class = "addImg">
        <div class="anime-info">
          <h3>${anime.title}</h3>
          <p>${anime.description}</p>
          <button onclick="removeFav(${index})">Delete from favorites🚫</button>
        </div>
        </div>
      `;
        favList.appendChild(card);
    });
}
function removeFav(index) {
    favs.splice(index, 1);
    localStorage.setItem('favs', JSON.stringify(favs));
    renderFavs();
}
renderFavs();
