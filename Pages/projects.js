const projectData = [
  {
    id: 1,
    title: "CekPaket - Cek Resi Pengiriman [Internal Testing]",
    description:
      "CekPaket - Cek Resi Pengiriman is a Flutter-based parcel tracking application that allows users to check their shipment status in real-time using tracking numbers from multiple Indonesian courier services. Powered by the Binderbyte API, this app provides an easy and clean interface for monitoring package delivery status across popular logistics providers..",
    technologies: ["Flutter", "REST API", "AdMob", "Dart", ],
    completed: "Juli 2025",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOQPFgkAfpcLVMOp3pJ3-iZ33-lWA1SZzelcsP_Ej_fRGCXK04RcRXQWkj453UtoXFRFjDlR6fDLvEANNZUDeCuULPSyZBAQGZ5t6Cg1PrTrFVr9QxlOYvAYQCZCiEWWjpXcGMLq5GLW-zrj7s5mBM5=w1024-h500-s-no-gm?authuser=0",
    liveLink: "https://play.google.com/store/apps/details?id=com.andriirvansyah.cek_resi",
    githubLink: "https://github.com/Irvansbase/cek-resiku-tracking-app?tab=readme-ov-file",
    rating: 0,
    downloads: "Internal Testing",
    isHidden: false
  },
  {
    id: 2,
    title: "ShiftKu: Laporan Akhir Shift [Internal Testing]",
    description:
      "ShiftKu is a modern and lightweight Flutter-based application designed to help employees and supervisors record and review end-of-shift reports in a clear and structured format. Ideal for retail, hospitality, warehouse, or any operational team that relies on daily shift tracking and reporting.",
    technologies: ["Flutter", "REST API", "Dart", "Supabase"],
    completed: "Juli 2025",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczOKp_d2mnJfH46H-oNFjnuel3Nl1lrxB8xmqlvZBXQf_a4G9KWxT7SzhRPHVmXOnxN-yGw_Lbn42c27ilsLKAg7EdnhoP9A51GyxPxYeh2h1jgooQO8-yoD633PIcQTnUX6Xtdz02QcOa3HL4mK-Fxj=w1024-h500-s-no-gm?authuser=0",
    liveLink: "https://play.google.com/store/apps/details?id=com.andriirv.laporan_akhir_shift",
    githubLink: "https://github.com/Irvansbase/shiftku-laporan-akhir-shift",
    rating: 0,
    downloads: "9",
    isHidden: false
  },
  {
    id: 3,
    title: "Flutter Ecommerce UI Kit | Built with Provider (90% Figma Match) [Slicing Figma]",
    description:
      "This is a complete Flutter app template built from a Figma design, ideal for anyone building a shopping or catalog app. The UI is modular, clean, and uses Provider for state management.",
    technologies: ["Flutter", "Firebase", "Google Fit API", "HealthKit", "BLoC"],
    completed: "Juli 2025",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczP9mVHvxmW_ewYTnH3-s5-QTl0KFT2vAj4qygfs2_oRWcEzWjRHU3XFu4dpJLZtAvWBtmlAFWYyhLUdqeWikmtbKyyRiMQrmZF92UgGT3gW34BbxLCDaxp6UPnIQxs_nVKKqSGrMes1ZedrxVRv8pgo=w1600-h800-s-no-gm?authuser=0",
    liveLink: "https://github.com/Irvansbase/flutter-ecommerce-ui-kit",
    githubLink: "https://github.com/Irvansbase/flutter-ecommerce-ui-kit",
    rating: 0,
    downloads: "0",
    isHidden: false
  },
  // {
  //   id: 1,
  //   title: "TopUp Game & Pulsa App",
  //   description:
  //     "A modern Flutter application for buying game top-ups, electricity tokens, and mobile credits. Integrated with Supabase, Midtrans, and Google AdMob for monetization.",
  //   technologies: ["Flutter", "Supabase", "REST API", "AdMob", "Dart", "Firebase"],
  //   completed: "May 2025",
  //   image:
  //     "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //   liveLink: "https://your-app-link.com",
  //   githubLink: "https://github.com/yourusername/topup-app",
  //   rating: 4.8,
  //   downloads: "10K+",
  //   isHidden: true
  // },
  // {
  //   id: 2,
  //   title: "Finance Tracker Pro",
  //   description:
  //     "Comprehensive personal finance tracking app with budget management, expense categorization, and financial insights.",
  //   technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Chart.js"],
  //   completed: "March 2025",
  //   image:
  //     "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //   liveLink: "https://finance-app.com",
  //   githubLink: "https://github.com/yourusername/finance-app",
  //   rating: 4.6,
  //   downloads: "5K+",
  //   isHidden: true
  // },
  // {
  //   id: 3,
  //   title: "Health & Fitness Companion",
  //   description:
  //     "All-in-one health tracking app with workout plans, nutrition logging, and progress analytics.",
  //   technologies: ["Flutter", "Firebase", "Google Fit API", "HealthKit", "BLoC"],
  //   completed: "January 2025",
  //   image:
  //     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //   liveLink: "https://health-app.com",
  //   githubLink: "https://github.com/yourusername/health-app",
  //   rating: 4.9,
  //   downloads: "15K+",
  //   isHidden: true
  // },
];

const dataContainer = document.getElementById("data-container");

projectData.forEach(project => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<i class="fas fa-star ${i < Math.floor(project.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}"></i>`
  ).join("");

  const techBadges = project.technologies
    .map(
      tech => `
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
        ${tech}
      </span>
    `
    )
    .join("");

  const card = document.createElement("div");
  card.className = "relative group";
  card.innerHTML = `
    <div class="projects-item bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
      <div class="relative">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="w-full h-48 object-cover"
          loading="lazy"
        >
        <div class="absolute top-3 right-3">
        </div>
      </div>
      
      <div class="p-5 flex flex-col flex-grow">
        <div class="flex justify-between items-start">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${project.title}</h3>
          <span class="flex items-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
            ${stars}
            <span class="ml-1 text-gray-600 dark:text-gray-300">${project.rating}</span>
          </span>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">${project.description}</p>
        
        <div class="flex flex-wrap gap-1.5 mb-4">${techBadges}</div>
        
        <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            <i class="far fa-calendar mr-1.5"></i> ${project.completed}
          </p>
          
          <div class="flex gap-3">
            <a href="${project.liveLink}" target="_blank" 
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-gray-200 dark:text-white hover:bg-primary-600 transition-colors shadow-md group-hover:shadow-lg"
              aria-label="View project">
              <i class="fas fa-external-link-alt"></i>
            </a>
            
            <a href="${project.githubLink}" target="_blank" 
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-gray-700 transition-colors shadow-md group-hover:shadow-lg"
              aria-label="View code on GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  dataContainer.appendChild(card);
});


