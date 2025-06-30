document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  if (!mobileMenuButton || !mobileMenu || !menuIcon) return;

  // Awal: pastikan menu tersembunyi dan dalam kondisi 'terlipat' dengan opacity 0
  mobileMenu.classList.add(
    "hidden",
    "opacity-0",
    "scale-y-0",
    "origin-top",
    "transition-all",
    "duration-500",
    "ease-in-out"
  );

  mobileMenuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
      // Tampilkan menu
      mobileMenu.classList.remove("hidden");

      // Trigger reflow agar transisi berjalan
      void mobileMenu.offsetWidth;

      mobileMenu.classList.replace("scale-y-0", "scale-y-100");
      mobileMenu.classList.replace("opacity-0", "opacity-100");

      menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
      // Tutup menu dengan efek
      mobileMenu.classList.replace("scale-y-100", "scale-y-0");
      mobileMenu.classList.replace("opacity-100", "opacity-0");

      // Sembunyikan setelah animasi selesai
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 500);

      menuIcon.classList.replace("fa-times", "fa-bars");
    }
  });

  // Tutup menu saat salah satu link diklik
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.replace("scale-y-100", "scale-y-0");
      mobileMenu.classList.replace("opacity-100", "opacity-0");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 500);
      menuIcon.classList.replace("fa-times", "fa-bars");
    });
  });
});


        
        // Dark mode toggle
        function setupDarkModeToggle() {
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
            const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
            
            // Change the icons inside the button based on previous settings
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden');
                document.documentElement.classList.add('dark');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
                document.documentElement.classList.remove('dark');
            }
            
            themeToggleBtn.addEventListener('click', function() {
                // Toggle icons
                themeToggleDarkIcon.classList.toggle('hidden');
                themeToggleLightIcon.classList.toggle('hidden');
                
                // If set via local storage previously
                if (localStorage.getItem('color-theme')) {
                    if (localStorage.getItem('color-theme') === 'light') {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    }
                } else {
                    // If NOT set via local storage previously
                    if (document.documentElement.classList.contains('dark')) {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    } else {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    }
                }
            });
        }
        
        // Smooth scrolling
        function setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    const menuIcon = document.getElementById('menu-icon');
                    if (mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        menuIcon.classList.replace('fa-times', 'fa-bars');
                    }
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        }
        
        // Initialize all functions when the DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            setupMobileMenu();
            setupDarkModeToggle();
            setupSmoothScrolling();
        });
        // Data untuk layanan
        const services = [
            {
                icon: 'mobile-alt',
                title: 'Pengembangan Aplikasi Native',
                description: 'Membangun aplikasi native untuk iOS dan Android dengan performa optimal dan akses penuh ke fitur perangkat.',
                color: 'bg-blue-100 text-blue-600'
            },
            {
                icon: 'code',
                title: 'Pengembangan Cross-Platform',
                description: 'Solusi penghematan biaya dengan teknologi Flutter dan React Native untuk aplikasi yang berjalan di semua platform.',
                color: 'bg-green-100 text-green-600'
            },
            {
                icon: 'sync',
                title: 'Integrasi API & Backend',
                description: 'Mengintegrasikan aplikasi dengan berbagai layanan backend dan API untuk fungsionalitas yang lebih kaya.',
                color: 'bg-purple-100 text-purple-600'
            },
            {
                icon: 'palette',
                title: 'UI/UX Design',
                description: 'Mendesain antarmuka yang intuitif dan menarik untuk meningkatkan pengalaman pengguna aplikasi Anda.',
                color: 'bg-yellow-100 text-yellow-600'
            },
            {
                icon: 'cogs',
                title: 'Optimasi & Pemeliharaan',
                description: 'Layanan optimasi kinerja dan pemeliharaan rutin untuk memastikan aplikasi berjalan lancar.',
                color: 'bg-red-100 text-red-600'
            },
            {
                icon: 'rocket',
                title: 'Penerbitan App Store',
                description: 'Bantuan dalam proses penerbitan aplikasi ke App Store dan Google Play Store.',
                color: 'bg-indigo-100 text-indigo-600'
            }
        ];


        // Data untuk keahlian
        const skills = [
            { name: 'Flutter', icon: 'fa-brands fa-flutter' },
            { name: 'React Native', icon: 'fab fa-react' },
            { name: 'Swift', icon: 'fab fa-swift' },
            { name: 'Kotlin', icon: 'fas fa-mobile-alt' },
            { name: 'Firebase', icon: 'fas fa-database' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'UI/UX Design', icon: 'fas fa-paint-brush' },
            { name: 'Git', icon: 'fab fa-git-alt' },
            { name: 'REST API', icon: 'fas fa-cloud' },
            { name: 'CI/CD', icon: 'fas fa-sync-alt' },
            { name: 'Agile', icon: 'fas fa-tasks' },
            { name: 'Testing', icon: 'fas fa-vial' }
        ];

        // Fungsi untuk merender layanan
        function renderServices() {
            const container = document.getElementById('services-container');
            let html = '';
            
            services.forEach(service => {
                html += `
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition-all duration-300">
                    <div class="w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-${service.icon} text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>
                `;
            });
            
            container.innerHTML = html;
        }


        // Fungsi untuk merender keahlian
        function renderSkills() {
            const container = document.getElementById('skills-container');
            let html = '';
            
            skills.forEach(skill => {
                html += `
                <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                    <i class="${skill.icon} text-4xl text-primary mb-3"></i>
                    <span class="font-medium text-gray-800">${skill.name}</span>
                </div>
                `;
            });
            
            container.innerHTML = html;
        }

        // Fungsi untuk toggle mobile menu
        function setupMobileMenu() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('open');
                if (mobileMenu.classList.contains('open')) {
                    menuIcon.classList.replace('fa-bars', 'fa-times');
                } else {
                    menuIcon.classList.replace('fa-times', 'fa-bars');
                }
            });
            
            // Tutup menu saat item menu di klik
            const menuLinks = mobileMenu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    menuIcon.classList.replace('fa-times', 'fa-bars');
                });
            });
        }

        // Panggil fungsi render saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            renderServices();
            renderProjects();
            renderSkills();
        
            
            // Animasi scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });


document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('showMoreBtn-certificates');
    const container = document.getElementById('certificates-container');
    const allItems = container.querySelectorAll('.certificate-item');

    const step = 3;
    let visibleCount = 3;

    // Inisialisasi: sembunyikan semua kecuali 3 item pertama
    allItems.forEach((item, index) => {
        item.classList.toggle('hidden', index >= visibleCount);
    });

    toggleBtn.addEventListener('click', function () {
        const totalItems = allItems.length;

        if (visibleCount < totalItems) {
            visibleCount = Math.min(visibleCount + step, totalItems);
            allItems.forEach((item, index) => {
                item.classList.toggle('hidden', index >= visibleCount);
            });

            // Ubah teks jika semua item sudah tampil
            if (visibleCount === totalItems) {
                toggleBtn.textContent = 'Show Less Certificates';
            }
        } else {
            // Reset ke 3 item
            visibleCount = 3;
            allItems.forEach((item, index) => {
                item.classList.toggle('hidden', index >= visibleCount);
            });
            toggleBtn.textContent = 'Show More Certificates';
        }

        // Scroll tombol agar tetap terlihat
        setTimeout(() => {
            toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('showMoreBtn-projects');
    const container = document.getElementById('data-container');
    const allItems = container.querySelectorAll('.projects-item');

    const step = 3;
    let visibleCount = 3;

    // Inisialisasi: sembunyikan semua kecuali 3 item pertama
    allItems.forEach((item, index) => {
        item.classList.toggle('hidden', index >= visibleCount);
    });

    toggleBtn.addEventListener('click', function () {
        const totalItems = allItems.length;

        if (visibleCount < totalItems) {
            visibleCount = Math.min(visibleCount + step, totalItems);
            allItems.forEach((item, index) => {
                item.classList.toggle('hidden', index >= visibleCount);
            });

            // Ubah teks jika semua item sudah tampil
            if (visibleCount === totalItems) {
                toggleBtn.textContent = 'Show Less Certificates';
            }
        } else {
            // Reset ke 3 item
            visibleCount = 3;
            allItems.forEach((item, index) => {
                item.classList.toggle('hidden', index >= visibleCount);
            });
            toggleBtn.textContent = 'Show More Certificates';
        }

        // Scroll tombol agar tetap terlihat
        setTimeout(() => {
            toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scroll ke bawah → buat header transparan
      header.style.opacity = "0.5";
    } else {
      // Scroll ke atas → kembalikan opacity penuh
      header.style.opacity = "1";
    }

    lastScrollY = currentScrollY;
  });
});
