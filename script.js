// Sample projects data
const projectsData = [
    {
        id: 1,
        title: "Analyse et prédiction du Churn (Télécom)",
        description: "Projet complet de Data Science, de la compréhension métier jusqu'à la modélisation prédictive à partir dataset réel et fortement dégradé (valeurs manquantes, incohérences métier, formats hétérogènes, variables mal typées",
        image: "assets/images/Churn.PNG",
        categories: ["ml"],
        tools: ["python", "sklearn"],
        tags: ["Data", "CRISP-DM", "Python", "Scikit-Learn"],
        github: "https://github.com/SamyASM/Analyse-et-Prediction-du-Churn-Telecom-/blob/main/README.md",
        demo : "Churn_Prediction_Presentation.pdf" // Rétrocompatible : sera traité comme un bouton PDF
    },

    {
        id: 2,
        title: "Assistant IA Datack pour l'Actuariat",
        description: "Conception et développement en 36 heures d'un assistant IA basé sur une approche RAG (Retrieval-Augmented Generation) sur plus de 150 mémoires d'actuariat. La solution intègre un découpage sémantique, une recherche hybride (Vectorielle + BM25), un requêtage adaptatif (Top-K) et un routage intelligent afin de maximiser la précision des réponses tout en optimisant le coût financier et l'empreinte carbone.", 
        image: "assets/images/assistant.jpg",
        categories: ["ml"],
        tools: ["python", "api"],
        tags: ["RAG", "LLM", "ChromaDB", "Actuariat", "Python"],
        github: null, // Plus de bouton Github/Code erroné
        demo: "https://huggingface.co/spaces/Datack/My_App_Datack", // Vrai lien de démo
        pdf: "Presentation_Datack.pdf" // Clé dédiée pour ton PDF
    },

    {
        id: 7,
        title: "Stratégie & Cas d'Usage ML",
        description: "Analyse de 35 cas d'usage du Machine Learning à travers différents secteurs (Energie, Santé, Retail). Identification des leviers de valeur et des sources de données nécessaires à l'implémentation des modèles.",
        image: "assets/images/enjeuMetier.PNG", 
        categories: ["ml"],
        tools: ["Data Strategy"],
        tags: ["Use Cases", "Data Sourcing", "Enjeux métiers"],
        github: null,
        demo: "35 cas d'usage du machine learning dans différents secteurs et identification des sources de données.pdf"
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
        id: 5,
        title: "Travaux académique de Machine learning à la fois pratique et théorique ",
        description: "Il s'agit de projets réalisés seul ou en groupe durant ce semestre, sur le fonctionnement théorique de certains modèles(forêts aléatoires, logistique, etc) et méthodes d'évaluation (rééchantillonage, cross-validation)",
        image: "assets/images/projet_licence.png",
        categories: ["ml", "stats"],
        tools: ["python"],
        tags: ["Inférence statistique", "Apprentissage supervisé", "R", "Python"],
        github: "https://github.com/SamyASM/Travaux-de-machine-learning",
        demo: null
    },
    {
        id: 10,
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
    }
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


// FONCTION CORRIGÉE POUR RECONNAITRE LES 3 BOUTONS DISTINCTEMENT
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-categories', project.categories.join(' '));
    card.setAttribute('data-tools', project.tools.join(' '));
    
    // Initialisation des boutons vides
    let codeLinkHtml = ''; 
    let demoLinkHtml = ''; 
    let pdfLinkHtml = '';  

    // 1. Bouton Code (GitHub)
    if (project.github) { 
        if (project.id === 6) {
            codeLinkHtml = `
                <a href="${project.github}" class="project-link tableau" target="_blank">
                    <i class="fas fa-chart-simple"></i> Tableau
                </a>
            `;
        } else {
            codeLinkHtml = `
                <a href="${project.github}" class="project-link github" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
            `;
        }
    }

    // 2. Bouton Démo Live (Hugging Face, Sites...)
    if (project.demo) {
        if (project.demo.includes('.pdf')) {
            // Rétrocompatibilité : si un ancien projet utilise .pdf dans demo, on l'affiche en bouton PDF
            pdfLinkHtml = `
                <a href="${project.demo}" class="project-link demo" target="_blank">
                    <i class="fas fa-file-pdf"></i> Voir PDF
                </a>
            `;
        } else {
            // Vrai lien de démo
            demoLinkHtml = `
                <a href="${project.demo}" class="project-link demo" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Démo live
                </a>
            `;
        }
    }

    // 3. Bouton PDF dédié (Pour ton projet Datack ID 2)
    if (project.pdf) {
        pdfLinkHtml = `
            <a href="${project.pdf}" class="project-link demo" target="_blank">
                <i class="fas fa-file-pdf"></i> Voir PDF
            </a>
        `;
    }
    
    // Assemblage final de la carte
    card.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${codeLinkHtml} ${demoLinkHtml} ${pdfLinkHtml} 
            </div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Handle filter button clicks
function handleFilterClick(e) {
    const button = e.target;
    const filterType = button.parentElement.getAttribute('data-filter-type');
    const filterValue = button.getAttribute('data-filter');
    
    const groupButtons = button.parentElement.querySelectorAll('.filter-btn');
    groupButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
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
                const offsetTop = target.offsetTop - 80;
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