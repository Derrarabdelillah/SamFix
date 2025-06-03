

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

// Update copyright year

document.getElementById('year').textContent = new Date().getFullYear();
// Mouse follow orb effect
 document.addEventListener('mousemove', (e) => {

    const orb = document.querySelector('.orb');
    orb.style.left = `${e.clientX}px`;
    orb.style.top = `${e.clientY}px`;

});

/*
    <!-- Footer Start -->
    <footer class="relative text-white overflow-hidden bg-white border border-gray-200">
        
    <!-- Animated background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div class="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full filter blur-3xl animate-float1"></div>
        <div class="absolute top-40 right-20 w-40 h-40 bg-gray-900 rounded-full filter blur-3xl animate-float2"></div>
        <div class="absolute bottom-10 left-1/2 w-48 h-48 bg-gray-500 rounded-full filter blur-3xl animate-float3"></div>
    </div>

    <!-- Main footer content -->
    <div class="container relative py-6">
        <!-- Grid layout -->
        <div class=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        
        <!-- Logo/Name section  -->

        <div class="group">

            <div class="flex items-center space-x-2 mb-6">
                <!-- Logo Start -->
                <div class="">
                    <a href=""><img class="w-35" src="/assets/Brand/WhiteLogo-r.png" alt=""></a>
                </div>
                <!-- Logo End -->
            </div>

            <p class="text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat libero beatae dolore inventore eos iusto cumque. Explicabo, iure ea voluptates soluta cum ipsum numquam unde libero sint dolor error?</p>
            
            <!-- Social media with hover glow -->
            <div class="flex space-x-4">

            <a href="#" class="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-green-500 hover:shadow-lg hover:shadow-blue-500/30">
                
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-green-500 hover:shadow-lg hover:shadow-sky-500/30">
            
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-green-500 hover:shadow-lg hover:shadow-purple-500/30">
            
            </a>
            
        </div>
        </div>

        <!-- Quick links with hover effect -->
        <div>
            <h3 class="text-lg font-semibold mb-6 relative inline-block">
            <span class="relative z-10 text-black">Quick Links</span>
            </h3>

            <ul class="space-y-3">
            <li>
                <a href="#" class="text-gray-500 hover:text-green-500 hover:pl-2 flex items-center">Home</a>
            </li>

            <li>
                <a href="#" class="text-gray-500 hover:text-green-500 hover:pl-2 flex items-center">About Us</a>
            </li>

            <li>
                <a href="#" class="text-gray-500 hover:text-green-500 hover:pl-2 flex items-center">Services</a>
            </li>
            
            <li>
                <a href="#" class="text-gray-500 hover:text-green-500 hover:pl-2 flex items-center">Blogs</a>
            </li>
            
            <li>
                <a href="#" class="text-gray-500 hover:text-green-500 hover:pl-2 flex items-center">Contact Us</a>
            </li>
            
        </div>

        <!-- Contact info with animated icons -->
        <div >
            <h3 class="text-lg font-semibold mb-6 text-black">Contact Us</h3>
            <p class="text-gray-500  max-w-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat libero beatae dolore inventore eos iusto cumque. Explicabo, iure ea voluptates soluta cum ipsum numquam unde libero sint dolor error?</p>

        </div>

        </div>

    </div>
        <!-- Bottom section with animated copyright -->
        <div class="container py-4 border-t border-gray-200  flex flex-col md:flex-row justify-center items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; <span id="year" class="text-green-500"></span> Manuel Dala. All rights reserved.
        </p>
        </div>

    <!-- Floating orb that follows cursor -->
    
    </footer>
    <!-- Footer End --> */