# CAHIER DES CHARGES
**Plateforme de Gestion d’Escape Games à Domicile et sur Site**  
**Date :** 10/04/2026 
**Version :** 2.0  

---

## SOMMAIRE
1. Introduction & Contexte  
2. Objectifs du Projet  
3. Périmètre Fonctionnel  
4. Description Détaillée des Fonctionnalités  
5. Spécifications Techniques  
6. Charte Graphique Complète  
7. Ergonomie & UX Guidelines  
8. Planning & Déploiement  
9. Maintenance & Support  
10. Évolutions Futures  
11. Annexes (Glossaire + Tableau des fonctionnalités)  

---

## 1. INTRODUCTION & CONTEXTE
Le projet consiste à développer une **plateforme web responsive** permettant la **gestion complète d’escape games** organisés à domicile ou sur site. Elle doit offrir une **expérience immersive**, une **interface intuitive**, et des **outils puissants pour l’administration**.

---

## 2. OBJECTIFS DU PROJET
- **Centralisation** : gestion des escape games, plannings, tarifs, avis.  
- **Automatisation** : génération des plages horaires, notifications, factures.  
- **Personnalisation** : filtres avancés, options de réservation, thèmes graphiques immersifs.  
- **Sécurité & RGPD** : protection des données, conformité légale.  
- **Scalabilité** : architecture évolutive pour accueillir des milliers d’utilisateurs.  

---

## 3. PÉRIMÈTRE FONCTIONNEL

### 3.1 Rôles et Droits
- **Super Admin** : gestion des admins, configuration globale, reporting.  
- **Admin** : gestion catalogue, planning, tarifs, avis.  
- **Utilisateur** : inscription, réservation, paiement, avis.  

---

## 4. DESCRIPTION DÉTAILLÉE DES FONCTIONNALITÉS

### 4.1 Catalogue Escape Games
- Fiche complète : titre, description, durée, difficulté, nombre de joueurs, prix, localisation, photos HD, vidéos teaser.  
- Tags : horreur, enquête, aventure, famille, etc.  
- Filtrage avancé : thème, durée, difficulté, prix, localisation, disponibilité.  
- **Fonctionnalité avancée** :  
  - Suggestion intelligente (IA) selon préférences utilisateur.  
  - Indicateur de popularité (basé sur réservations + avis).  

---

### 4.2 Réservation & Paiement
- Processus en **3 étapes** : choix escape game → créneau → paiement.  
- Paiement sécurisé : Stripe, PayPal, Apple Pay, Google Pay.  
- Coupons & codes promo.  
- Facture PDF automatique.  
- Politique d’annulation configurable.  

---

### 4.3 Planning Interactif
- Vue calendrier (jour/semaine/mois).  
- Plages horaires automatiques selon durée + temps de préparation.  
- Gestion des indisponibilités (maintenance, jours fériés).  
- Synchronisation Google Calendar / Outlook.  
- Notifications email + SMS + push.  

---

### 4.4 Système d’Avis
- Note sur 5 étoiles + commentaire.  
- Photos des joueurs (optionnel).  
- Modération par admin (signalement, suppression).  

---

### 4.5 Tableau de Bord
- Statistiques : réservations, revenus, avis, taux d’occupation.  
- Export CSV / Excel.  
- Graphiques interactifs (barres, courbes).  

---

### 4.6 Fonctionnalités Avancées
- **Multi-langue** (FR, EN, ES).  
- **Multi-devise** (€ / $ / £).  
- **Programme de fidélité** (points, réductions).  
- **Chat en ligne** pour support client.  
- **API REST** pour intégration CRM ou ERP.  

---

## 5. SPÉCIFICATIONS TECHNIQUES
- **Frontend** : React.js (SPA).  
- **Backend** : Node.js (Express) .  
- **Base de données** : MySQL.  
- **Sécurité** : HTTPS, JWT, OAuth2, RGPD.  
- **Performance** : temps de chargement < 3 sec, CDN pour médias.  
- **Compatibilité** : Chrome, Firefox, Safari, Edge, mobile iOS/Android.  

---

## 6. CHARTE GRAPHIQUE COMPLÈTE

### Palette de Couleurs
- **Fond principal** : #1E1E2F (bleu nuit, mystère).  
- **Fond secondaire** : #2C2C3A (gris anthracite).  
- **Texte principal** : #FFFFFF (blanc).  
- **Texte secondaire** : #EAEAEA (gris clair).  
- **Boutons primaires** : #F5A623 (orange dynamique).  
- **Boutons secondaires** : #4A90E2 (bleu clair).  
- **Hover bouton primaire** : #D98C1F (orange foncé).  
- **Hover bouton secondaire** : #357ABD (bleu foncé).  
- **Liens actifs** : #F5A623.  
- **Liens inactifs** : #CCCCCC.  
- **Alertes** : #D0021B (rouge).  
- **Succès** : #7ED321 (vert).  

### Typographies
- **Titres H1** : Montserrat Bold, 36px, couleur #FFFFFF.  
- **Titres H2** : Montserrat Semi-Bold, 28px, couleur #F5A623.  
- **Texte courant** : Open Sans Regular, 16px, couleur #EAEAEA.  
- **Boutons** : Roboto Bold, 18px, couleur #FFFFFF.  

### Style des Boutons
- **Bouton primaire** :  
  - Fond : #F5A623  
  - Texte : #FFFFFF  
  - Bordure : none  
  - Hover : fond #D98C1F, transition 0.3s  
- **Bouton secondaire** :  
  - Fond : #4A90E2  
  - Texte : #FFFFFF  
  - Hover : fond #357ABD  

### Formulaires
- Champs : fond #2C2C3A, texte #FFFFFF, bordure #F5A623.  
- Placeholder : #CCCCCC.  
- Focus : bordure #F5A623 + glow.  

### Icônes
- Style minimaliste, SVG, couleur #F5A623 pour actifs, #EAEAEA pour inactifs.  

---

## 7. ERGONOMIE & UX GUIDELINES
- **Navigation** : menu fixe en haut, CTA visibles.  
- **Processus de réservation** : 3 étapes max, indicateur de progression.  
- **Responsive design** : mobile-first, grille 12 colonnes.  
- **Accessibilité** : contraste AA, textes lisibles, aria-labels.  

---

## 8. PLANNING & DÉPLOIEMENT
- Phase 1 : Conception & Maquettes.  
- Phase 2 : Développement.  
- Phase 3 : Tests & Recette.  
- Phase 4 : Mise en production.  

---

## 9. MAINTENANCE & SUPPORT
- Maintenance corrective et évolutive.  
- SLA : 99,9% uptime.  
- Support client : chat, email, FAQ.  

---

## 10. ÉVOLUTIONS FUTURES
- Application mobile native (iOS/Android).  
- Réalité augmentée pour escape games.  
- Intégration IA pour recommandations personnalisées.  

---

## 11. ANNEXES
### Tableau des fonctionnalités (MVP vs Évolutions)

| Fonctionnalité                | MVP | Évolution |
|-------------------------------|-----|-----------|
| Catalogue escape games        | ✅  |           |
| Réservation & paiement        | ✅  |           |
| Planning interactif           | ✅  |           |
| Système d’avis                | ✅  |           |
| Notifications push            |     | ✅        |
| Multi-langue                  |     | ✅        |
| Programme fidélité            |     | ✅        |
| API REST                      |     | ✅        |

---