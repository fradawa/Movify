document.addEventListener('DOMContentLoaded', () => {

    // ==================== Movie Carousel Logic ==================== //

    const carouselContainer = document.getElementById('carousel-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Movie data for the carousel
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

    let currentIndex = 1; // Start at the first real slide
    let isTransitioning = false;

    // Create slides with clones for infinite loop
    function createSlides() {
        const slides = [movies[movies.length - 1], ...movies, movies[0]]; // Clones
        carouselContainer.innerHTML = '';
        slides.forEach(movie => {
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
    function moveCarousel(withTransition = true) {
        if (withTransition) {
            carouselContainer.style.transition = 'transform 0.5s ease-in-out';
        } else {
            carouselContainer.style.transition = 'none';
        }
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    // Handle infinite loop transition
    carouselContainer.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentIndex === 0) { // After transitioning to the cloned last slide
            currentIndex = movies.length;
            moveCarousel(false);
        } else if (currentIndex === movies.length + 1) { // After transitioning to the cloned first slide
            currentIndex = 1;
            moveCarousel(false);
        }
    });

    // Event listeners for the arrows
    nextBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        moveCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        moveCarousel();
    });

    // Initialize the carousel
    createSlides();
    moveCarousel(false); // Set initial position without transition

    // Automatically scroll the carousel every 3 seconds
    setInterval(() => {
        nextBtn.click();
    }, 3000);


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
