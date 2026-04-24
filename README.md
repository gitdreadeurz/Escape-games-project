# 🎮 Escape Games Project

> Plateforme web de gestion d'escape games à domicile et sur site

![Status](https://img.shields.io/badge/status-en%20développement-blue)
![Node.js](https://img.shields.io/badge/node.js-20+-green)
![React](https://img.shields.io/badge/react-19-blue)
![Vite](https://img.shields.io/badge/vite-8-orange)

---

## 📋 Présentation du projet

Ce projet est une **application web complète** permettant la gestion d'escape games, que ce soit à domicile ou sur site. Elle offre une plateforme intuitive pour organiser, consulter et gérer des sessions d'escape game.

### Fonctionnalités principales

| Module | Description |
|--------|-------------|
| **Catalogue** | Fiches escape games complètes avec filtration avancée |
| **Réservation** | Processus de réservation en 3 étapes |
| **Paiement** | Intégration de paiements sécurisés |
| **Avis** | Système de notation et commentaires |
| **Planning** | Calendrier interactif des disponibilités |
| **Administration** | Gestion complète via tableau de bord admin |

### Rôles utilisateurs

- **Super Admin** : gestion des admins, configuration globale
- **Admin** : gestion du catalogue, planning, tarifs, avis
- **Utilisateur** : inscription, réservation, paiement, avis

---

## 🛠 Technologies utilisées

### Backend

| Technologie | Version | Usage |
|-------------|---------|-------|
| Node.js | 20+ | Runtime JavaScript |
| Express | 5.x | Framework API |
| MySQL | - | Base de données |
| JSON Web Token | 9.x | Authentification |
| bcryptjs | 3.x | Hashage mots de passe |
| Swagger | 5.x | Documentation API |
| cookie-parser | 1.4.x | Gestion des cookies |

### Frontend

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 19.x | Framework UI |
| Vite | 8.x | Build tool |
| JavaScript | ES6+ | Langage |

---

## 📁 Structure du projet

```
Escape-games-project/
├── Backend/                    # API Node.js/Express
│   ├── app.js                 # Point d'entrée
│   ├── config/
│   │   └── db.js              # Configuration base de données
│   ├── controllers/           # Logique métier
│   │   ├── authController.js
│   │   ├── avisController.js
│   │   ├── escapeController.js
│   │   ├── ligneOptionController.js
│   │   ├── optionController.js
│   │   ├── paiementController.js
│   │   ├── reservationController.js
│   │   └── userController.js
│   ├── middlewares/           # Middlewares Express
│   │   ├── adminMiddleware.js
│   │   ├── authMiddleware.js
│   │   └── superAdminMiddleware.js
│   ├── models/                # Modèles de données
│   │   ├── avisModel.js
│   │   ├── escapeModel.js
│   │   ├── LigneOptionModel.js
│   │   ├── optionModel.js
│   │   ├── paiementModel.js
│   │   ├── reservationModel.js
│   │   └── userModel.js
│   ├── routes/                # Routes API
│   │   ├── authRoute.js
│   │   ├── avisRoute.js
│   │   ├── escapeRoute.js
│   │   ├── ligneOptionRoute.js
│   │   ├── optionRoute.js
│   │   ├── paiementRoute.js
│   │   ├── reservationRoute.js
│   │   └── userRoute.js
│   ├── package.json
│   └── swagger.yaml           # Documentation API
│
├── Frontend/                   # Application React
│   ├── src/
│   │   ├── App.jsx            # Composant principal
│   │   ├── main.jsx           # Point d'entrée
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
└── ressources/                 # Documentation
    ├── CDC_escape_game.md      # Cahier des charges
    ├── MLD.txt                  # Modèle logique de données
    ├── ScriptMySQL.txt          # Script base de données
    ├── escapegame.sql           # Dump SQL
    └── LIST-escape-game.md      # Liste des escape games
```

---

## 🚀 Installation et lancement

### Prérequis

- [Node.js](https://nodejs.org/) 20 ou supérieur
- [MySQL](https://www.mysql.com/) 8.0 ou supérieur
- npm ou yarn
- Git

### Étape 1 : Cloner le projet

```bash
git clone https://github.com/gitdreadeurz/Escape-games-project.git
cd Escape-games-project
```

### Étape 2 : Configuration de la base de données

1. Ouvrir MySQL (via XAMPP, WAMP, ou en ligne de commande)
2. Créer une base de données :

```sql
CREATE DATABASE escapegame;
```

3. Importer le fichier SQL :

```bash
# Depuis le dossier ressources
mysql -u root -p escapegame < escapegame.sql
```

4. Configurer le fichier de connexion dans `Backend/config/db.js` :

```javascript
// Backend/config/db.js
export default {
  host: 'localhost',
  user: 'root',
  password: 'votre_mot_de_passe',
  database: 'escapegame'
};
```

### Étape 3 : Installer et lancer le Backend

```bash
# Depuis la racine du projet
cd Backend

# Installer les dépendances
npm install

# Lancer le serveur en mode développement
npm start

# Le serveur est accessible sur http://localhost:3000
```

### Étape 4 : Installer et lancer le Frontend

```bash
# Ouvrir un nouveau terminal
cd Frontend

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur : http://localhost:5173
```

### Étape 5 : Accéder à la documentation API

Une fois le backend démarré, la documentation Swagger est accessible sur :
```
http://localhost:3000/api-docs
```

---

## 🗄️ Configuration de la base de données

### Variables d'environnement (optionnel)

Créer un fichier `.env` dans le dossier `Backend/` :

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=escapegame
JWT_SECRET=votre_secret_jwt
```

### Schéma de la base de données

La base de données contient les tables suivantes :

| Table | Description |
|-------|-------------|
| `user` | Utilisateurs (clients, admins) |
| `escape` | Catalogue des escape games |
| `reservation` | Réservations des clients |
| `avis` | Avis et notes des clients |
| `option` | Options supplémentaires |
| `ligne_option` | Options associées aux réservations |
| `paiement` | Historique des paiements |

---

## 🌐 Déploiement

### Backend (Production)

```bash
cd Backend
npm install --production
NODE_ENV=production npm start
```

### Frontend (Production)

```bash
cd Frontend
npm run build
# Le build sera dans le dossier dist/
```

### Hébergement

Le projet peut être hébergé sur :
- **Backend** : Heroku, Railway, Render, VPS
- **Frontend** : Vercel, Netlify, GitHub Pages
- **Base de données** : ClearDB (MySQL sur Heroku), PlanetScale

### Nom de domaine

Le projet est configuré pour le domaine : `foreach.whf.bz`

---

## 🧪 Tester l'application

Une fois les deux serveurs lancés :

1. **Frontend** : http://localhost:5173
2. **API Backend** : http://localhost:3000
3. **Documentation Swagger** : http://localhost:3000/api-docs

---

## 🔐 API Endpoints

| Route | Méthode | Description |
|-------|---------|-------------|
| `/auth` | POST | Inscription / Connexion |
| `/user` | GET/POST/PUT/DELETE | Gestion utilisateurs |
| `/game` | GET/POST/PUT/DELETE | Catalogue escape games |
| `/reservation` | GET/POST/PUT/DELETE | Gestion réservations |
| `/paiement` | POST | Traitement paiements |
| `/avis` | GET/POST/PUT/DELETE | Système d'avis |
| `/option` | GET/POST/PUT/DELETE | Options supplémentaires |
| `/ligneoption` | GET/POST/DELETE | Lignes d'options |

---

## 👥 Équipe

Projet développé dans le cadre de la formation ForEach Academy.

---

## 📄 Licence

Ce projet est protégé. Tous droits réservés.
