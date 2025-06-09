

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
    let swiperContainer = document.querySelector(".swiper-wrapper-Logo");

    // Logo Data
    let logoSliderData = [
        { type: 'image', src: 'assets/LogoSliderImgs/Samsung-Logo.wine.webp', alt: 'Samsung' },
        { type: 'image', src: 'assets/LogoSliderImgs/Huawei-Logo.wine.webp', alt: 'Huawei' },
        { type: 'image', src: 'assets/LogoSliderImgs/OnePlus-Logo.wine.webp', alt: 'OnePlus' },
        { type: 'image', src: 'assets/LogoSliderImgs/Oppo-Logo.wine.webp', alt: 'Oppo' },
        { type: 'image', src: 'assets/LogoSliderImgs/Nokia-logo.wine.webp', alt: 'Nokia' },
        { type: 'image', src: 'assets/LogoSliderImgs/Vivo-Logo.wine.webp', alt: 'Vivo' },
    ];

    // Clear existing content
    swiperContainer.innerHTML = '';

    // Loop over logoSliderData and create slides
    logoSliderData.forEach((element) => {
        let slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide border border-gray-200 shadow-lg shadow-main rounded-lg overflow-x-hidden  hover:bg-gray-50 dark:border dark:border-slate-700 dark:shadow-xs hover:dark:bg-gray-50';

        let img = document.createElement('img');
        img.loading = 'lazy';
        img.src = element.src;
        img.alt = element.alt;
        img.className = 'w-25 md:w-35 mx-auto grayscale-100 hover:grayscale-0 dark:grayscale-0';

        slideDiv.appendChild(img);
        swiperContainer.appendChild(slideDiv);
    });
});

// Instagram Slider
const swiper = new Swiper('.swiper', {

  speed: 400,
  loop: true,
  grabCursor: true,

  autoplay:{
    delay: 3000,
  },

  
  breakpoints: {
    0: {
        slidesPerView: 1
    },

    620: {
        slidesPerView: 2
    },

    1024: {
        slidesPerView: 3
    },
  }
});

// Insert Instagram Cards
document.addEventListener("DOMContentLoaded", () => {
    let swiperContainer = document.querySelector("#swipContainer");

    // Cards Data
    let cardsData = [
        { imageSrc: "assets/InstagramImgs/insta1.webp", postLink: "https://www.instagram.com/p/DKE7Snfsu--/?img_index=1", title: "Casque Noir, Casque Bluetooth",   alt:"Casque Bluetooth"},
        { imageSrc: "assets/InstagramImgs/insta2.webp", postLink: "https://www.instagram.com/p/DKE42W2MwDS/?img_index=1", title: "CASQUE Hoco W35 Max 90H",   alt:"CASQUE Hoco"},
        { imageSrc: "assets/InstagramImgs/insta3.webp", postLink: "https://www.instagram.com/p/DKE2AzAsyB4/?img_index=1", title: "Led Wireless Charging Speaker",   alt:"Speaker"},
        { imageSrc: "assets/InstagramImgs/insta4.webp", postLink: "https://www.instagram.com/p/DH_jkscISxF/", title: "Smartwatch HainoTeko Rw-53",   alt:"martwatch"},
        { imageSrc: "assets/InstagramImgs/insta5.webp", postLink: "https://www.instagram.com/p/DH9octOoQWG/?img_index=1", title: "Infinix Smart 9",   alt:"Infinix"},
        { imageSrc: "assets/InstagramImgs/insta6.webp", postLink: "https://www.instagram.com/p/DHzJgJYoaSN/?img_index=1", title: "Casque Hoco W35 Max", alt:"Casque"},
    ]

    // Clear existing content
    swiperContainer.innerHTML = "";

    cardsData.forEach( (e) => {
        let slideDiv = document.createElement("div");
        slideDiv.className = "swiper-slide bg-white shadow-lg border border-gray-200 rounded-lg hover:bg-gray-50 dark:border dark:border-slate-700 dark:shadow-xs dark:bg-mainD ";

        slideDiv.innerHTML += `
                        <div class="relative h-102">
                            <a href="${e.postLink}"><img src="${e.imageSrc}" alt="${e.alt}" class="w-full h-70 rounded-tl-lg rounded-tr-lg object-cover"></a>

                            <p class="absolute left-1 top-1 text-sm bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] font-medium text-white w-fit px-2 py-1 rounded-full">Post</p>
                            <div class=" p-4">

                            <div class="flex flex-row items-center gap-2">
                                <span class="main-link rounded-full bg-main w-8 h-8 flex justify-center items-center"> <p class="text-white text-xs">SF</p> </span>

                                <div class="flex flex-col gap-1">
                                    <a href="https://www.instagram.com/sam_fix_store/" class="text-sm font-bold text-main">SamFix Store</a>
                                    <p class="text-gray-500 text-xs dark:text-gray-400">@sam_fix_store</p>
                                </div>
                            </div>

                            <h4 class="mt-2 font-medium text-gray-700 dark:text-gray-400">${e.title}</h4>
                            </div>
                        </div>
        `

        swiperContainer.appendChild(slideDiv);
    } )
})

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();



// Whatsapp Button
const whtsBtn = document.querySelector(".top");

window.onscroll = function() {

  if( scrollY >= 500  ) {
    whtsBtn.classList.add("active");
  } else {
    whtsBtn.classList.remove("active");
  }
}

// Scroller Progres
let element = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollPosition = (window.scrollY / height) * 100;
  element.style.width = `${scrollPosition}%`;
})