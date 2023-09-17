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

//project gif animation appearing-disappearing 
const imageContainers = document.querySelectorAll('.image-container');
const projectImages = document.querySelectorAll('.project-image');
const projectGifs = document.querySelectorAll('.project-gif');


imageContainers.forEach((imageContainer, index) => {
    const projectImage = projectImages[index];
    const projectGif = projectGifs[index];
    let isMobile = false;
    let isGifVisible = false;

    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        isMobile = true;
    }

    function setGifState(showGif) {
        if (showGif) {
            projectImage.style.display = 'none';
            projectGif.style.display = 'block';
            isGifVisible = true;
        } else {
            projectImage.style.display = 'block';
            projectGif.style.display = 'none';
            isGifVisible = false;
        }
    }

    if (isMobile) {
        imageContainer.addEventListener('touchstart', () => {
            setGifState(!isGifVisible);
        });
    } else {
        imageContainer.addEventListener('mouseover', () => {
            setGifState(true);
        });
        imageContainer.addEventListener('mouseleave', () => {
            if (isGifVisible) {
                setGifState(false);
            }
        });
    }
});

//authentication to access resume 
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".submitButtons");
    const passwordInput = document.querySelector(".jelszo");
    const storedPassword = "LinkedIn";
    submitButton.addEventListener("click", function () {

        if (storedPassword === passwordInput.value) {
            setTimeout(function () {
                window.open('Projects/MYownResume/resume.html', 'myWindow', 'height=418, width=455, left=500, top=250, toolbar=0, titlebar=0, menubar=0, scrollbars=no, resizable=no, location=no,  status=no');
                window.location.reload();
            }, 1000);
        } else {
            alert(switchInput.checked ? "Hibás jelszó!" : "Incorrect Password!");
            passwordInput.value = "";
        }
        window.openResume = openResume;
    });


    switchInput.addEventListener("change", function () {
        const modalTitle = document.querySelector(".modal-title");
        const passwordInputLabel = document.querySelector("label[for='view']");

        if (switchInput.checked) {
            modalTitle.textContent = "Az önéletrajz megtekintése jelszóval védett!";
            passwordInputLabel.textContent = "Kérlek, add meg a jelszót";
            passwordInput.setAttribute("placeholder", "Ide írj...");
        } else {
            modalTitle.textContent = "Viewing the resume is password-protected!";
            passwordInputLabel.textContent = "Please enter a password";
            passwordInput.setAttribute("placeholder", "Write here");
        }
    });
});
