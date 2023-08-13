const switchInput = document.querySelector('#flexSwitchCheckDefault');
const hungarianText = document.querySelector('.hungarianText');
const englishText = document.querySelector('.englishText');
const toggle = document.querySelector('.form-check-input');
const formText = document.querySelector('.form-check-label')

switchInput.addEventListener('click', function () {
    if (this.checked) {
        hungarianText.style.display = 'block';
        englishText.style.display = 'none';
        toggle.classList.add('.toggleActive');
        formText.textContent = 'EN';
        document.querySelector('.projects').textContent = 'Projektek';
        document.querySelector('.resume').textContent = 'Önéletrajz';
        document.querySelector('.contact').textContent = 'Kapcsolat';

        const projectLink = document.querySelector('.projects.section');
        const resumeLink = document.querySelector('.resume');
        const contactLink = document.querySelector('.contact.section');

        projectLink.href = '#projektek';
        resumeLink.href = 'Projects/MYownResume/resume.html';
        contactLink.href = '#kapcsolat';
    }
    else {
        hungarianText.style.display = 'none';
        englishText.style.display = 'block';
        formText.textContent = 'HU';
        document.querySelector('.projects').textContent = 'Projects';
        document.querySelector('.resume').textContent = 'Resume';
        document.querySelector('.contact').textContent = 'Contact';

        const projectLink = document.querySelector('.projects.section');
        const resumeLink = document.querySelector('.resume');
        const contactLink = document.querySelector('.contact.section');

        projectLink.href = '#projects';
        resumeLink.href = 'Projects/MYownResume/resume.html';
        contactLink.href = '#contact';
    }
});






//after translate anchor solution

//sliding effect of elements
const slideInSections = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
});

slideInSections.forEach(section => {
    observer.observe(section);
});


const imageContainers = document.querySelectorAll('.image-container');
const projectImages = document.querySelectorAll('.project-image');
const projectGifs = document.querySelectorAll('.project-gif');

imageContainers.forEach((imageContainer, index) => {
    const projectImage = projectImages[index];
    const projectGif = projectGifs[index];
    let isMobile = false;

    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        isMobile = true;
    }

    function setGifState(showGif) {
        if (showGif) {
            projectImage.style.display = 'none';
            projectGif.style.display = 'block';
        } else {
            projectImage.style.display = 'block';
            projectGif.style.display = 'none';
        }
    }

    if (isMobile) {
        imageContainer.addEventListener('touchstart', () => {
            setGifState(!projectGif.style.display === 'block'); // Invert the state
        });
    } else {
        imageContainer.addEventListener('mouseover', () => {
            setGifState(true);
        });
        imageContainer.addEventListener('mouseleave', () => {
            setGifState(false);
        });
    }
});
