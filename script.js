document.addEventListener('DOMContentLoaded', () => {

    // ==================== Movie Carousel Logic ==================== //

    const carouselContainer = document.getElementById('carousel-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Movie data for the carousel
    const movies = [
        {
            title: 'Dune: Part Two',
            description: 'Paul Atreides unites with Chani and the Fremen to lead a rebellion against those who destroyed his family.',
            image: 'https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
            category: 'Action/Sci-Fi'
        },
        {
            title: 'Godzilla x Kong: The New Empire',
            description: 'The all-powerful Kong and the fearsome Godzilla unite their forces against a terrible threat.',
            image: 'https://image.tmdb.org/t/p/original/v5XyXZe8FADw8iHupB4L7QOAwH9.jpg',
            category: 'Action/Adventure'
        },
        {
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
                        <a href="#" class="watch-btn"><i class="fas fa-play"></i> watch now</a> 
                    </div>
                </div>
            `;
            carouselContainer.innerHTML += slide;
        });
    }
    //replace # by the link of the movie 

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


   // ==================== AUTHENTICATION MODAL LOGIC ==================== //

const modal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.querySelector('.close-btn');

const showLoginBtn = document.getElementById('showLoginBtn');
const showRegisterBtn = document.getElementById('showRegisterBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Function to display the login form
const displayLoginForm = () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    showLoginBtn.classList.add('active');
    showRegisterBtn.classList.remove('active');
};

// Function to display the registration form
const displayRegisterForm = () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    showRegisterBtn.classList.add('active');
    showLoginBtn.classList.remove('active');
};

// Opens the modal and displays the login form
loginBtn.onclick = (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    displayLoginForm();
}

// Opens the modal and displays the registration form
signupBtn.onclick = (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    displayRegisterForm();
}

// Handles clicks on the toggle buttons
showLoginBtn.onclick = displayLoginForm;
showRegisterBtn.onclick = displayRegisterForm;

// Closes the modal
closeBtn.onclick = () => {
    modal.style.display = 'none';
}

// Closes the modal if the user clicks outside of it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
});
