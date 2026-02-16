# WordCamp Nice - Atelier Bloc WordPress

Plugin WordPress développé pour l'atelier **"Créer un bloc dynamique avec l'API GitHub"** au WordCamp Nice 2026.

## 📖 À propos

Ce plugin démontre comment créer un bloc Gutenberg personnalisé qui :

- Récupère dynamiquement les données depuis l'API GitHub
- Affiche une liste de dépôts avec leurs métadonnées
- Gère les erreurs et les limites de l'API
- Utilise un rendu côté serveur (PHP) pour le front-end
- Propose des options de configuration (tri, pagination, authentification)

## 🌿 Branches

### `main`

Branche complète avec l'implémentation finale du bloc. Utilisez cette branche pour :

- Voir le code complet et fonctionnel
- Comprendre la structure finale du projet
- Avoir une référence pour l'atelier

### `workshop`

Branche de démarrage pour l'atelier. Contient uniquement :

- La structure de base du plugin
- Les fichiers de configuration nécessaires
- Le squelette du bloc à compléter

## 🚀 Installation

### Prérequis

- WordPress 6.8 ou supérieur
- PHP 7.4 ou supérieur
- Node.js et npm

### Installation du plugin

1/ Clonez le dépôt dans votre dossier `wp-content/plugins/` :

```bash
cd wp-content/plugins/
git clone [URL_DU_DEPOT] wordcamp-nice
cd wordcamp-nice
```

2/ Pour l'atelier, basculez sur la branche `workshop` :

```bash
git checkout workshop
```

3/ Installez les dépendances :

```bash
npm install
composer install
```

4/ Compilez les assets :

```bash
npm run build
```

5/ Activez le plugin dans l'administration WordPress

## 📦 Structure du bloc

```plain
src/wordcamp-nice/
├── block.json          # Configuration du bloc
├── edit.js            # Interface de l'éditeur
├── save.js            # Fonction de sauvegarde (rendu dynamique)
├── render.php         # Rendu côté serveur (front-end)
├── view.js            # JavaScript front-end (optionnel)
├── editor.scss        # Styles pour l'éditeur
└── style.scss         # Styles front-end
```

## 🎯 Fonctionnalités du bloc

### Paramètres configurables

- **Nom d'utilisateur GitHub** : L'utilisateur dont on veut afficher les dépôts
- **Tri** : Par date de mise à jour, nom, ou date de dernier push
- **Nombre de dépôts** : De 1 à 100 dépôts à afficher
- **Token GitHub** (optionnel) : Pour augmenter la limite de l'API de 60 à 5000 requêtes/heure

### Informations affichées

Pour chaque dépôt :

- Nom avec lien vers GitHub
- Description
- Date de dernière mise à jour

### Gestion des erreurs

- Utilisateur introuvable
- Limite de l'API atteinte
- Erreurs réseau
- Aucun dépôt trouvé

## 🔑 Utilisation de l'API GitHub

### Sans authentification

- Limite : 60 requêtes par heure
- Suffisant pour les tests et démonstrations

### Avec token GitHub

1. Créez un token sur [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Sélectionnez le scope `public_repo`
3. Copiez le token généré
4. Ajoutez-le dans les paramètres du bloc
5. Limite : 5000 requêtes par heure

## 📚 Ressources

### Documentation WordPress

- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Block API Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/)
- [Dynamic Blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)

### API GitHub

- [Documentation GitHub REST API](https://docs.github.com/en/rest)
- [Rate Limiting](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)

## 🤝 Contribution

Ce projet est conçu à des fins éducatives pour le WordCamp Nice 2026. Les contributions sont les bienvenues pour améliorer l'atelier.

## 📝 Licence

GPL-2.0-or-later

## 👤 Auteur

- **[Valentin Grenier](https://www.linkedin.com/in/valentin-grenier)**
- **[Studio Val](https://studio-val.fr)**

---

Développé avec passion depuis la ville rose 🩷

(chocolatine !)
