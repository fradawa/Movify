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

    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');

    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    const closeLoginBtn = loginModal.querySelector('.close-btn');
    const closeRegisterBtn = registerModal.querySelector('.close-btn');

    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');

    // Function to open a modal
    function openModal(modal) {
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('modal-visible'), 10);
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.classList.remove('modal-visible');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    // Event listeners for navbar buttons
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(loginModal);
    });

    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(registerModal);
    });

    // Event listeners for close buttons
    closeLoginBtn.addEventListener('click', () => closeModal(loginModal));
    closeRegisterBtn.addEventListener('click', () => closeModal(registerModal));

    // Event listeners for switching between modals
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModal(loginModal);
        }
        if (e.target === registerModal) {
            closeModal(registerModal);
        }
    });
});
