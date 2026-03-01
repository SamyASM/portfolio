# Guide de déploiement GitHub Pages

Ce guide vous explique comment déployer votre portfolio sur GitHub Pages étape par étape.

## 📋 Prérequis

- Un compte GitHub
- Git installé sur votre ordinateur
- Les fichiers du portfolio sur votre machine

## 🚀 Déploiement étape par étape

### Étape 1 : Créer un repository GitHub

1. Connectez-vous à [GitHub](https://github.com)
2. Cliquez sur le bouton **"New"** ou **"+"** > **"New repository"**
3. Nommez votre repository (ex: `portfolio-data-science`)
4. Ajoutez une description (optionnel)
5. Laissez le repository **Public**
6. **NE PAS** cocher "Add a README file" (nous en avons déjà un)
7. Cliquez sur **"Create repository"**

### Étape 2 : Préparer les fichiers localement

1. Ouvrez un terminal/invite de commandes
2. Naviguez vers le dossier de votre portfolio :
```bash
cd chemin/vers/portfolio-site
```

3. Initialisez Git (si pas déjà fait) :
```bash
git init
```

4. Ajoutez tous les fichiers :
```bash
git add .
```

5. Créez le premier commit :
```bash
git commit -m "Initial commit: Portfolio Data Science"
```

### Étape 3 : Lier au repository GitHub

1. Copiez l'URL de votre repository GitHub (format : `https://github.com/username/repository-name.git`)

2. Ajoutez le remote origin :
```bash
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPOSITORY.git
```

3. Renommez la branche principale :
```bash
git branch -M main
```

4. Poussez le code vers GitHub :
```bash
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

1. Allez sur votre repository GitHub dans le navigateur
2. Cliquez sur l'onglet **"Settings"**
3. Faites défiler jusqu'à la section **"Pages"** dans le menu de gauche
4. Dans **"Source"**, sélectionnez **"Deploy from a branch"**
5. Dans **"Branch"**, sélectionnez **"main"**
6. Laissez **"/ (root)"** sélectionné
7. Cliquez sur **"Save"**

### Étape 5 : Accéder à votre site

1. Attendez quelques minutes (généralement 5-10 minutes)
2. Votre site sera disponible à l'adresse :
   ```
   https://VOTRE-USERNAME.github.io/VOTRE-REPOSITORY/
   ```
3. GitHub affichera l'URL dans la section Pages des Settings

## 🔄 Mettre à jour le site

Pour mettre à jour votre site après des modifications :

1. Modifiez vos fichiers localement
2. Ajoutez les changements :
```bash
git add .
```
3. Créez un nouveau commit :
```bash
git commit -m "Description des modifications"
```
4. Poussez vers GitHub :
```bash
git push
```

Le site se mettra à jour automatiquement en quelques minutes.

## 🛠 Personnalisation avant déploiement

### Informations personnelles à modifier :

1. **Dans `index.html`** :
   - Ligne ~60 : Texte de la section "À propos"
   - Ligne ~180 : Informations de contact (email, LinkedIn, GitHub)
   - Titre de la page dans le `<head>`

2. **Dans `script.js`** :
   - Array `projectsData` : Vos vrais projets
   - URLs GitHub et démos

3. **Images** :
   - Remplacez les images dans `assets/images/` par vos propres visuels
   - Ajoutez votre photo professionnelle si souhaité

### Structure des données de projets :

```javascript
{
    id: 1,
    title: "Nom du projet",
    description: "Description détaillée...",
    image: "assets/images/mon-projet.jpg",
    category: "ml", // Options: ml, ia-data, data-viz, analyse
    tools: ["python", "sql"], // Options: python, sql, r, tableau, powerbi
    tags: ["Machine Learning", "Python", "Pandas"],
    github: "https://github.com/username/projet",
    demo: "https://demo-site.com" // ou "rapport.pdf"
}
```

## 🎨 Personnalisation du design

### Couleurs principales (dans `styles.css`) :
- `#2563eb` : Couleur primaire (bleu)
- `#1e293b` : Couleur secondaire (gris foncé)
- `#667eea` : Couleur d'accent

### Polices :
- Police principale : Inter (Google Fonts)
- Modifiable dans le `<head>` de `index.html`

## 🔧 Dépannage

### Le site ne s'affiche pas :
1. Vérifiez que GitHub Pages est activé dans Settings > Pages
2. Attendez 10-15 minutes après l'activation
3. Vérifiez l'URL (doit inclure le nom du repository)

### Images ne s'affichent pas :
1. Vérifiez les chemins dans le code (relatifs, pas absolus)
2. Assurez-vous que les images sont dans le dossier `assets/images/`
3. Vérifiez les noms de fichiers (sensibles à la casse)

### Erreurs JavaScript :
1. Ouvrez la console du navigateur (F12)
2. Vérifiez les erreurs affichées
3. Assurez-vous que tous les fichiers sont présents

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez la documentation GitHub Pages
2. Consultez les issues du repository
3. Contactez le support GitHub si nécessaire

## 🎯 Conseils pour un déploiement réussi

1. **Testez localement** avant de déployer
2. **Utilisez des chemins relatifs** pour les images et fichiers
3. **Optimisez les images** pour un chargement rapide
4. **Vérifiez la responsivité** sur différents appareils
5. **Mettez à jour régulièrement** votre portfolio

---

**Votre portfolio sera en ligne et accessible au monde entier ! 🌍**

