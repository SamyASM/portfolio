// Sample projects data
const projectsData = [
    {
        id: 1,
        title: "Analyse et prédiction du Churn (Télécom)",
        description: "Projet complet de Data Science conduit selon la méthodologie CRISP-DM, de la compréhension métier jusqu'à la modélisation prédictive à partir dataset réel et fortement dégradé (valeurs manquantes, incohérences métier, formats hétérogènes, variables mal typées",
        image: "assets/images/Churn.png",
        categories: ["ml"],
        tools: ["python", "sklearn"],
        tags: ["Data", "CRISP-DM", "Python", "Scikit-Learn"],
        github: "https://github.com/SamyASM/Analyse-et-Prediction-du-Churn-Telecom-/blob/main/PROJET.ipynb",
        demo: ".pdf"
    },

   {
        id: 3,
        title: "Plateforme Cinéfan",
        description: "Conception d’une architecture relationnelle complexe (SQL) incluant la modélisation entité-association et l'implémentation de contraintes d'intégrité rigoureuses pour la cohérence des données. Développement d’une interface Python/Flask intégrant des algorithmes de recherche et d'insertion optimisés pour la gestion des sessions et des entités.",
        image: "assets/images/cine.jpg",
        categories: ["web-data","industrialisation"],
        tools: ["sql","python", "api"],
        tags: ["Python", "Data", "Automatisation", "Outil"],
        github: "https://github.com/SamyASM/Base-de-donn-es-Cin-fan/tree/main/a",
        demo: "rapport.pdf"
    },

    {
        id: 2,
        title: "Générateur de données CSV fictives intelligent",
        description: "Création avec un ami d'un générateur de données fictives et aléatoires cohérentes, idéal pour s'entraîner sur des projets DATA en condition réelle. <a href='https://claude.ai/public/artifacts/5c5cd93c-e664-478f-ae39-d9cb574a8acf' target='_blank'>Lien de la version intelligente/IA ici</a>",
        image: "assets/images/Generateur_csv2_reoptimized.jpeg",
        categories: ["industrialisation"],
        tools: ["python, api"],
        tags: ["IA", "API", "Python", "Data"],
        github: "https://github.com/Drissbrtn/drissbrtn.github2.io",
        demo: "https://drissbrtn.github.io/drissbrtn.github2.io/"
    },
 
    {
        id: 4,
        title: "Prédiction du churn bancaire — NLP & Benchmark multi-modèles",
        description: "Projet de Data Science appliqué au secteur bancaire combinant traitement du langage naturel et modélisation prédictive. Les verbatims clients sont transformés en variable exploitable via un modèle RoBERTa (Hugging Face), puis 9 algorithmes de classification sont benchmarkés et comparés.",
        image: "assets/images/Churn_mod.png",
        categories: ["ml","stats"],
        tools: ["python", "sklearn"],
        tags: ["NLP", "Cross-validation", "Scikit-Learn"],
        github: "https://github.com/SamyASM/Exploitation-avis-client-avec-les-Transformers-NLP-et-comparaisons-des-mod-les-pour-le-Churn./blob/main/Mod%C3%A9lisation_churn_bancaire1.ipynb",
        demo: "Churn.pdf"
    },
    {
        id: 5,
        title: "Résumé de certains de mes travaux en théorie du Machine learning en Master",
        description: "Il s'agit de certains de mes projets réalisés seul ou en groupe durant ce semestre, sur le fonctionnement théorique de certains modèles",
        image: "assets/images/projet_licence.png",
        categories: ["ml", "stats"],
        tools: ["python"],
        tags: ["Inférence statistique", "Apprentissage supervisé", "R", "Python"],
        github: null,
        demo: "lien.pdf"
    },
    
];

// DOM elements
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProjects(projectsData);
    setupEventListeners();
    setupSmoothScrolling();
    setupNavbarScroll();
});

// Render projects
function renderProjects(projects) {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}


// Remplacez l'ancienne fonction par celle-ci
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-categories', project.categories.join(' '));
    card.setAttribute('data-tools', project.tools.join(' '));
    
    // --- NOUVELLE LOGIQUE DE LIENS AMÉLIORÉE ---
    
    let codeLinkHtml = ''; // Variable pour le lien Code/Tableau
    let demoLinkHtml = ''; // Variable pour le lien Démo/PDF

    // 1. Génère le bouton "Code" SEULEMENT SI project.github existe
    if (project.github) { 
        if (project.id === 6) {
            // Cas spécial Tableau (ID 4)
            codeLinkHtml = `
                <a href="${project.github}" class="project-link tableau" target="_blank">
                    <i class="fas fa-chart-simple"></i> Tableau
                </a>
            `;
        } else {
            // Cas GitHub par défaut
            codeLinkHtml = `
                <a href="${project.github}" class="project-link github" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
            `;
        }
    }

    // 2. Génère le bouton "Démo" SEULEMENT SI project.demo existe
    if (project.demo) {
        if (project.demo.includes('.pdf')) {
            // Cas PDF
            demoLinkHtml = `
                <a href="${project.demo}" class="project-link demo" target="_blank">
                    <i class="fas fa-file-pdf"></i> Voir PDF
                </a>
            `;
        } else {
            // Cas Démo Live
            demoLinkHtml = `
                <a href="${project.demo}" class="project-link demo" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Démo live
                </a>
            `;
        }
    }
    
    // --- FIN DE LA NOUVELLE LOGIQUE ---
    
    // On assemble la carte
    card.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${codeLinkHtml} ${demoLinkHtml} </div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Handle filter button clicks
function handleFilterClick(e) {
    const button = e.target;
    const filterType = button.parentElement.getAttribute('data-filter-type');
    const filterValue = button.getAttribute('data-filter');
    
    // Update active state for buttons in the same group
    const groupButtons = button.parentElement.querySelectorAll('.filter-btn');
    groupButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Apply filters
    applyFilters();
}

// Apply filters to projects
function applyFilters() {
    const categoryFilter = document.querySelector('[data-filter-type="category"] .filter-btn.active')?.getAttribute('data-filter') || 'all';
    const toolsFilter = document.querySelector('[data-filter-type="tools"] .filter-btn.active')?.getAttribute('data-filter') || 'all';
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-categories');
        const cardTools = card.getAttribute('data-tools');
        
        const categoryMatch = categoryFilter === 'all' || cardCategories.includes(categoryFilter);
        const toolsMatch = toolsFilter === 'all' || cardTools.includes(toolsFilter);
        
        if (categoryMatch && toolsMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Close mobile menu
function closeMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});