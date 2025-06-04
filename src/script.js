// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

const navLinks = document.querySelector(".nav-links");
// Toggle Menu
function onToggleMenu(e) {
    e.classList.toggle("fa-xmark");
    navLinks.classList.toggle("top-[100%]");
}

// Logo Slider
const swiperLogo = new Swiper('.slider', {
  speed: 500,
  loop: true,
  grabCursor: true,

  autoplay:{
    delay: 2000,
  },

  // Scroll Bar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: {
        slidesPerView: 1,
    },

    1024: {
        slidesPerView: 3,
    },
  }
});

// Insert Logos in the Slider
document.addEventListener('DOMContentLoaded', function () {
    let swiperContainer = document.querySelector(".swiper-wrapper");

    // Logo Data
    let logoSliderData = [
        { type: 'image', src: 'assets/LogoSliderImgs/Samsung-Logo.wine.png', alt: 'Samsung' },
        { type: 'image', src: 'assets/LogoSliderImgs/Huawei-Logo.wine.png', alt: 'Huawei' },
        { type: 'image', src: 'assets/LogoSliderImgs/OnePlus-Logo.wine.png', alt: 'OnePlus' },
        { type: 'image', src: 'assets/LogoSliderImgs/Oppo-Logo.wine.png', alt: 'Oppo' },
        { type: 'image', src: 'assets/LogoSliderImgs/Sony-Logo.wine.png', alt: 'Sony' },
        { type: 'image', src: 'assets/LogoSliderImgs/Vivo-Logo.wine.png', alt: 'Vivo' },
    ];

    // Clear existing content
    swiperContainer.innerHTML = '';

    // Loop over logoSliderData and create slides
    logoSliderData.forEach((element) => {
        let slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide border border-gray-200 shadow-lg shadow-main rounded-lg hover:bg-gray-50 dark:border dark:border-slate-700 dark:shadow-xs';

        let img = document.createElement('img');
        img.loading = 'lazy';
        img.src = element.src;
        img.alt = element.alt;
        img.className = 'w-25 md:w-35 mx-auto grayscale-100 hover:grayscale-0';

        slideDiv.appendChild(img);
        swiperContainer.appendChild(slideDiv);
    });
});
