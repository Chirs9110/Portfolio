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

//'HandMade' Safety check  
document.addEventListener("DOMContentLoaded", function () {
    const submitButtons = document.querySelectorAll(".submitButton");
    const captchaInputs = document.querySelectorAll(".m_captcha_answer_modal");

    submitButtons.forEach(function (submitButton, index) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            const captchaInput = captchaInputs[index];
            const captchaAnswer = captchaInput.value.toLowerCase();
            let correctAnswer = "ear";

            if (switchInput.checked) {
                correctAnswer = "fül";
            }
            if (captchaAnswer === correctAnswer) {
                window.location.href = "mailto:krisztianczinege.info@gmail.com";
                window.location.reload();
            } else {
                alert(switchInput.checked ? "Hibás válasz!" : "Wrong answer!");
                captchaInput.value = "";
            }
        });
    });
});


//console disbale
(function(){
 
    var _z = console;
    Object.defineProperty( window, "console", {
          get : function(){
              if( _z._commandLineAPI ){
              throw "Sorry, Can't execute scripts!";
                    }
              return _z; 
          },
          set : function(val){
              _z = val;
          }
    });
   
  })();

  window.console.log = function(){
    console.error('Sorry , developers tools are blocked here....');
    window.console.log = function() {
        return false;
    }
  }
  
  console.log('test')