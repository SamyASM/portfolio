# Portfolio Data Science & IA

Un site portfolio moderne et responsive pour présenter des projets en Data Science, Intelligence Artificielle et analyse de données.

## 🚀 Fonctionnalités

- **Design moderne et responsive** : Compatible desktop et mobile
- **Section À propos** : Présentation professionnelle avec compétences clés
- **Portfolio de projets** : Cartes visuelles avec filtrage dynamique
- **Filtrage avancé** : Par type de projet (IA/Data, BDD, Analyse, ML) et outils (Python, SQL, sklearn, API)
- **Navigation fluide** : Scroll smooth et animations
- **Liens externes** : GitHub et démos/PDF s'ouvrent dans de nouveaux onglets

## 📁 Structure du projet

```
portfolio-site/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Fonctionnalités JavaScript
├── assets/
│   └── images/         # Images du site
├── README.md           # Ce fichier
└── .gitignore          # Fichiers à ignorer par Git
```

## 🛠 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec Flexbox/Grid, animations
- **JavaScript ES6+** : Interactivité et filtrage dynamique
- **Font Awesome** : Icônes
- **Google Fonts** : Typographie (Inter)

## 📦 Installation et utilisation locale

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/portfolio-site.git
cd portfolio-site
```

2. Ouvrez le fichier `index.html` dans votre navigateur ou utilisez un serveur local :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (si vous avez http-server installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

3. Accédez à `http://localhost:8000` dans votre navigateur

## 🌐 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. **Créer un nouveau repository** sur GitHub
2. **Uploader les fichiers** du projet
3. Aller dans **Settings** > **Pages**
4. Sélectionner **Deploy from a branch**
5. Choisir **main** branch et **/ (root)**
6. Cliquer sur **Save**

### Méthode 2 : Via Git en ligne de commande

1. **Initialiser Git** dans le dossier du projet :
```bash
git init
git add .
git commit -m "Initial commit: Portfolio site"
```

2. **Créer un repository** sur GitHub et le lier :
```bash
git remote add origin https://github.com/votre-username/portfolio-site.git
git branch -M main
git push -u origin main
```

3. **Activer GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main / (root)

4. **Accéder au site** : `https://votre-username.github.io/portfolio-site/`

## ✏️ Personnalisation

### Modifier les informations personnelles

1. **Section À propos** (`index.html` ligne ~60) :
   - Modifier le texte de présentation
   - Ajouter une photo en remplaçant la div `.image-placeholder`

2. **Informations de contact** (`index.html` ligne ~180) :
   - Mettre à jour email, LinkedIn, GitHub

### Ajouter/modifier des projets

Éditer le fichier `script.js` et modifier l'array `projectsData` :

```javascript
const projectsData = [
    {
        id: 1,
        title: "Titre du projet",
        description: "Description du projet...",
        image: "assets/images/projet.jpg",
        category: "ml", // ml, ia-data, data-viz, analyse
        tools: ["python", "sql"], // python, sql, r, tableau, powerbi
        tags: ["Machine Learning", "Python"],
        github: "https://github.com/username/projet",
        demo: "https://demo.com" // ou "fichier.pdf"
    }
    // ... autres projets
];
```

### Personnaliser le design

- **Couleurs** : Modifier les variables CSS dans `styles.css`
- **Typographie** : Changer la police dans le `<head>` de `index.html`
- **Images** : Remplacer les images dans `assets/images/`

## 📱 Responsive Design

Le site est optimisé pour :
- **Desktop** : 1200px et plus
- **Tablet** : 768px - 1199px
- **Mobile** : 320px - 767px

## 🎨 Palette de couleurs

- **Primaire** : #2563eb (Bleu)
- **Secondaire** : #1e293b (Gris foncé)
- **Accent** : #667eea (Bleu clair)
- **Texte** : #333333
- **Texte secondaire** : #64748b
- **Arrière-plan** : #f8fafc

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Créé avec ❤️ pour présenter vos projets Data Science & IA**

