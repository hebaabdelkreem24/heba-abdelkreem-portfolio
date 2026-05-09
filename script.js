// ========================================
// PORTFOLIO JS - Heba Abdelkreem
// Dark/Light Mode + Arabic/English
// ========================================

// Skills Data
const skillsData = {
    frontend: {
        summary: {
            en: "Building modern, responsive, and interactive user interfaces using React ecosystem. Expert in component-based architecture, state management, and performance optimization for seamless user experiences.",
            ar: "بناء واجهات مستخدم حديثة وتفاعلية باستخدام نظام React. خبيرة في هندسة المكونات وإدارة الحالة وتحسين الأداء لتجارب مستخدم سلسة."
        },
        skills: [
            { name: "React.js", icon: "fab fa-react", level: 90, color: "#61DAFB" },
            { name: "Next.js", icon: "fab fa-react", level: 85, color: "#fff" },
            { name: "JavaScript", icon: "fab fa-js", level: 92, color: "#F7DF1E" },
            { name: "TypeScript", icon: "fas fa-code", level: 75, color: "#3178C6" },
            { name: "HTML5", icon: "fab fa-html5", level: 95, color: "#E34F26" },
            { name: "CSS3", icon: "fab fa-css3-alt", level: 90, color: "#1572B6" },
            { name: "Tailwind", icon: "fas fa-wind", level: 88, color: "#06B6D4" },
            { name: "Bootstrap", icon: "fab fa-bootstrap", level: 85, color: "#7952B3" },
            { name: "Redux", icon: "fas fa-cube", level: 80, color: "#764ABC" },
            { name: "Responsive", icon: "fas fa-mobile-alt", level: 92, color: "#3B82F6" }
        ]
    },
    backend: {
        summary: {
            en: "Developing robust server-side applications with Node.js and Express. Proficient in RESTful API design, authentication systems, and database management for scalable applications.",
            ar: "تطوير تطبيقات جانب الخادم القوية باستخدام Node.js و Express. متمكنة في تصميم RESTful APIs وأنظمة المصادقة وإدارة قواعد البيانات."
        },
        skills: [
            { name: "Node.js", icon: "fab fa-node-js", level: 88, color: "#339933" },
            { name: "Express.js", icon: "fas fa-server", level: 85, color: "#fff" },
            { name: "MongoDB", icon: "fas fa-database", level: 82, color: "#47A248" },
            { name: "REST APIs", icon: "fas fa-plug", level: 90, color: "#FF6C37" },
            { name: "JWT Auth", icon: "fas fa-shield-alt", level: 85, color: "#10B981" },
            { name: "API Integration", icon: "fas fa-globe", level: 88, color: "#3B82F6" }
        ]
    },
    tools: {
        summary: {
            en: "Utilizing modern development tools and workflows. Experienced with version control, design tools, Agile methodologies, and collaborative development practices.",
            ar: "استخدام أدوات التطوير الحديثة وسير العمل. خبرة في التحكم بالإصدارات وأدوات التصميم ومنهجيات Agile والتطوير التعاوني."
        },
        skills: [
            { name: "Git", icon: "fab fa-git-alt", level: 90, color: "#F05032" },
            { name: "GitHub", icon: "fab fa-github", level: 88, color: "#fff" },
            { name: "VS Code", icon: "fas fa-code", level: 92, color: "#007ACC" },
            { name: "Figma", icon: "fab fa-figma", level: 80, color: "#F24E1E" },
            { name: "Postman", icon: "fas fa-paper-plane", level: 82, color: "#FF6C37" },
            { name: "Agile/Scrum", icon: "fas fa-users", level: 85, color: "#10B981" }
        ]
    },
    soft: {
        summary: {
            en: "Strong interpersonal and professional skills developed through chemistry background and collaborative projects. Effective communicator with analytical thinking and time management abilities.",
            ar: "مهارات شخصية ومهنية قوية تطورت من خلال الخلفية الكيميائية والمشاريع التعاونية. متواصلة فعالة مع التفكير التحليلي وإدارة الوقت."
        },
        skills: [
            { name: "Problem Solving", icon: "fas fa-puzzle-piece", level: 92, color: "#EF4444" },
            { name: "Communication", icon: "fas fa-comments", level: 88, color: "#F59E0B" },
            { name: "Teamwork", icon: "fas fa-users", level: 90, color: "#10B981" },
            { name: "Time Management", icon: "fas fa-clock", level: 85, color: "#06B6D4" },
            { name: "Adaptability", icon: "fas fa-sync-alt", level: 87, color: "#8B5CF6" },
            { name: "Critical Thinking", icon: "fas fa-lightbulb", level: 90, color: "#FBBF24" }
        ]
    }
};

// Projects Data
const projectsData = [
  {
    title: { en: "Interno - Interior Design", ar: "إنترنو - تصميم داخلي" },
    category: { en: "Web Design", ar: "تصميم ويب" },
    image: "projects/interno.png",
    tech: ["React.js", "Tailwind CSS", "Figma"],
    githubLink: "https://github.com/hebaabdelkreem24/interno",
    description: {
      en: "Premier interior design agency platform with portfolio showcase and client testimonials.",
      ar: "منصة وكالة تصميم داخلي رائدة مع عرض المحفظة وشهادات العملاء.",
    },
  },
  {
    title: { en: "NewsDash - News Portal", ar: "نيوز داش - بوابة أخبار" },
    category: { en: "Full Stack", ar: "تطوير كامل" },
    image: "projects/newsdash.png",
    tech: ["Next.js", "Node.js", "APIs"],
    githubLink: "https://github.com/hebaabdelkreem24/news-app",
    description: {
      en: "Real-time news dashboard with weather, currency rates, and live match scores.",
      ar: "لوحة تحكم أخبار فورية مع الطقس وأسعار العملات ونتائج المباريات المباشرة.",
    },
  },
  {
    title: { en: "Employee Manager", ar: "مدير الموظفين" },
    category: { en: "HR Management", ar: "إدارة الموارد البشرية" },
    image: "projects/employee-manager.png",
    tech: ["MERN Stack", "JWT", "Tailwind"],
    githubLink: "https://github.com/hebaabdelkreem24/manage-employee",
    description: {
      en: "Complete HR system with employee CRUD operations and salary analytics dashboard.",
      ar: "نظام موارد بشرية كامل مع عمليات CRUD للموظفين ولوحة تحكم تحليلات الرواتب.",
    },
  },
];

// State
let currentLang = 'en';
let currentTheme = 'dark';
let currentCategory = 'frontend';
let currentView = 'desktop';

// ========================================
// THEME TOGGLE
// ========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ========================================
// LANGUAGE SWITCH
// ========================================
function initLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
    }
    updateLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage();
}

function updateLanguage() {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Update lang button
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLang === 'en' ? 'AR' : 'EN';
    }

    // Update all elements with data-en/data-ar
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const placeholder = el.getAttribute(currentLang === 'en' ? 'data-en-placeholder' : 'data-ar-placeholder');
            if (placeholder) el.placeholder = placeholder;
        } else {
            el.textContent = el.getAttribute(currentLang === 'en' ? 'data-en' : 'data-ar');
        }
    });

    // Re-render dynamic content
    renderSkills();
    renderProjects();
}

// ========================================
// SKILLS TABS
// ========================================
function initSkills() {
    const tabs = document.querySelectorAll('.skill-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderSkills();
        });
    });
    renderSkills();
}

function renderSkills() {
    const data = skillsData[currentCategory];
    const summaryEl = document.getElementById('skillsSummary');
    const gridEl = document.getElementById('skillsGrid');

    if (!data) return;

    if (summaryEl) {
        summaryEl.textContent = data.summary[currentLang];
    }

    if (gridEl) {
        gridEl.innerHTML = data.skills.map((skill, i) => `
            <div class="skill-card" style="animation: fadeInUp 0.4s ease ${i * 0.05}s both;">
                <i class="${skill.icon}" style="color: ${skill.color};"></i>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: 0%;" data-width="${skill.level}%"></div>
                </div>
                <div class="skill-level">${skill.level}%</div>
            </div>
        `).join('');

        // Animate progress bars
        setTimeout(() => {
            gridEl.querySelectorAll('.skill-progress-bar').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }, 100);
    }
}

// ========================================
// PROJECTS MOCKUP VIEW
// ========================================
// ========================================
// PROJECTS MOCKUP VIEW
// ========================================
function initProjects() {
    renderProjects();
}

function renderProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    container.className = `projects-mockup desktop-view`;

    container.innerHTML = projectsData
        .map(
            (project) => `
            <div class="project-mockup">
                <div class="mockup-frame desktop">
                    <img src="${project.image}" alt="${project.title[currentLang]}" 
                         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%238B5CF6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' fill=\'white\' font-size=\'18\' font-family=\'Arial\'%3E${project.title.en}%3C/text%3E%3C/svg%3E'">
                    <div class="mockup-overlay">
                        <a href="${project.githubLink}" target="_blank" class="github-link-btn">
                            <i class="fab fa-github"></i> ${currentLang === "en" ? "View Code" : "عرض الكود"}
                        </a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title[currentLang]}</h3>
                    <div class="project-category">${project.category[currentLang]}</div>
                    <div class="project-tech">
                        ${project.tech.map((t) => `<span>${t}</span>`).join("")}
                    </div>
                    <p>${project.description[currentLang]}</p>
                    <a href="${project.githubLink}" target="_blank" class="btn-github-project">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        `)
        .join("");
}



// ========================================
// ANIMATED COUNTERS
// ========================================
function initCounters() {
    const counters = document.querySelectorAll('.achievement-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix || '';
                animateCounter(el, target, suffix);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target, suffix) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// ========================================
// NAVBAR SCROLL
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar background
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Back to top
        backToTop.classList.toggle('visible', window.scrollY > 500);

        // Active section
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        const icon = menuBtn.querySelector('i');
        icon.className = navLinks.classList.contains('mobile-open') ? 'fas fa-times' : 'fas fa-bars';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
            menuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========================================
// SCROLL REVEAL
// ========================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.section-header, .about-grid, .timeline-item, .exp-card, .service-card, .project-mockup, .achievement-card, .testimonial-card, .contact-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = currentLang === 'en' 
            ? 'Thank you! I will get back to you soon.' 
            : 'شكراً لك! سأعود إليك قريباً.';
        alert(msg);
        form.reset();
    });
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavbar();
    initMobileMenu();
    initSkills();
    initProjects();
    initCounters();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();

    // Event listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
});
