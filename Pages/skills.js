const skillsData = [
  { icon: "assets/icon/icons8-flutter-48.png", name: "Flutter", isImg: true },
  { icon: "fab fa-react text-blue-400", name: "React Native" },
  { icon: "fab fa-swift text-orange-500", name: "Swift" },
  { icon: "fab fa-android text-green-500", name: "Android" },
  { icon: "fas fa-fire text-yellow-500", name: "Firebase" },
  { icon: "fab fa-git-alt text-orange-600", name: "Git" },
  { icon: "fas fa-database text-blue-600", name: "SQL" },
  { icon: "fab fa-figma text-purple-500", name: "Figma" },
  { icon: "fas fa-cloud text-blue-300", name: "REST API" },
  { icon: "fas fa-sync-alt text-green-400", name: "CI/CD" },
  { icon: "fas fa-mobile-alt text-gray-600 dark:text-gray-300", name: "Responsive UI" },
  { icon: "fas fa-vial text-red-400", name: "Testing" }
];

document.addEventListener("DOMContentLoaded", function () {
  const skillsContainer = document.getElementById("skills-grid");

  skillsData.forEach(skill => {
    const div = document.createElement("div");
    div.className = `
    swiper-slide 
    flex flex-col items-center justify-center 
    w-32 h-32 md:w-36 md:h-36 
    p-4 
    bg-white dark:bg-gray-700 
    rounded-xl 
    shadow-sm
    `.trim();

    div.innerHTML = `
      ${skill.isImg
        ? `<img src="${skill.icon}" alt="${skill.name}" class="mb-3">`
        : `<i class="${skill.icon} text-4xl mb-3"></i>`}
      <span class="font-medium text-gray-800 dark:text-white">${skill.name}</span>
    `;

    skillsContainer.appendChild(div);
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: true,
    speed: 9000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: true,
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 }
    },
  });

  swiper.autoplay.start();
});
