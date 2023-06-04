const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '559c016c9amshf7fbeaf5e1ee1efp1f37b9jsn03da7fd9457e',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => response.json())
  .then(response => {
    
    const top20Movies = response.slice(1, 22); // Extracting top 21 movies
   top20Movies.forEach(movie =>
    { 

        const name = movie['title'];
        const poster = movie['image'];
        const card = document.createElement('div');
        card.classList.add('card');
        const cardImg = document.createElement('div');
        cardImg.classList.add('card-img');
        cardImg.style.backgroundImage = `url(${poster})`;
        card.appendChild(cardImg);
        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = name;
        card.appendChild(movieTitle);
        document.querySelector('.cards').appendChild(card);
        console.log(poster);
        console.log(name);

    });
  })
  .catch(err => console.log(err));

