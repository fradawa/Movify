document.addEventListener('DOMContentLoaded', () => {

    // ==================== Movie Carousel Logic ==================== //

    const carouselContainer = document.getElementById('carousel-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Movie data for the carousel
    //movies that figure here are the same as the ones in the trending section
    const movies = [
        {
            id: 1,
            title: 'Dune: Part Two',
            description: 'Paul Atreides unites with Chani and the Fremen to lead a rebellion against those who destroyed his family.',
            image: 'https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
            category: 'Action/Sci-Fi'
        },
        {
            id: 2,
            title: 'Godzilla x Kong: The New Empire',
            description: 'The all-powerful Kong and the fearsome Godzilla unite their forces against a terrible threat.',
            image: 'https://image.tmdb.org/t/p/original/v5XyXZe8FADw8iHupB4L7QOAwH9.jpg',
            category: 'Action/Adventure'
        },
        {
            id: 3,
            title: 'Kung Fu Panda 4',
            description: 'Po must find and train a new Dragon Warrior, but a wicked sorceress plans to re-summon all the villainous masters that Po has defeated.',
            image: 'https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
            category: 'Animation/Family'
        }
    ];

    let currentIndex = 0;

    // Function to create and inject carousel slides.
    function createSlides() {
        carouselContainer.innerHTML = ''; // To empty the container
        movies.forEach(movie => {
            const slide = `
                <div class="carousel-slide" style="background-image: url('${movie.image}');">
                    <div class="slide-content">
                        <span class="genre-tag">${movie.category}</span>
                        <h1>${movie.title}</h1>
                        <p>${movie.description}</p>
                        <a href="movie.html?id=${movie.id}" class="watch-btn"><i class="fas fa-play"></i> watch now</a>
                    </div>
                </div>
            `;
            carouselContainer.innerHTML += slide;
        });
    }

    // Function to move the carousel
    function moveCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    // Event listeners for the arrows
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % movies.length;
        moveCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + movies.length) % movies.length;
        moveCarousel();
    });

    // To initialize the carousel
    createSlides();

    // ==================== Trending Movies Logic ==================== //

    const moviesGrid = document.getElementById('movies-grid');

    // Function to create and inject movie cards
    function createMovieCards() {
        movies.forEach(movie => {
            const movieCard = `
                <a href="movie.html?id=${movie.id}" class="movie-card-link">
                    <div class="movie-card">
                        <img src="${movie.image}" alt="${movie.title}">
                        <h3>${movie.title}</h3>
                    </div>
                </a>
            `;
            moviesGrid.innerHTML += movieCard;
        });
    }

    // To initialize the movie cards
    createMovieCards();
});
