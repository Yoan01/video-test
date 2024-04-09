
# Documentation du Projet NestJS

## Organisation du projet

Ce projet NestJS est organisé en respectant les principes de l'architecture propre (Clean Architecture), favorisant une séparation claire des responsabilités. Voici une brève description de la structure:

- `dist/`: Contient le code JavaScript transpilé généré à partir du code source TypeScript.
- `node_modules/`: Répertoire des dépendances Node.js installées.
- `src/`: Dossier source contenant le code TypeScript du projet, structuré comme suit:
  - `controllers/`: Gère les requêtes HTTP entrantes et les réponses sortantes.
  - `core/`: Contient la logique métier centrale du projet, divisée en services abstraits et services concrets.
  - `dtos/`: Contient les Data Transfer Objects qui définissent la forme des données.
  - `entities/`: Définit les modèles d'entreprise représentant les données de l'application.
  - `orm/`: Contient la configuration de l'Object-Relational Mapping avec Prisma.
  - `use-cases/`: Contient la logique métier spécifique à l'application, organisée par domaine.
  - `index.ts`: Fichier central d'exportation des entités.

## Installation et Lancement

### Avec Docker :

Pour lancer l'application avec Docker, assurez-vous d'avoir Docker installé sur votre machine. Ensuite, exécutez les commandes suivantes:

1. Faire le Docker compose up

```bash
docker-compose up --build
```

### En local : 
Pour installer les dépendances et lancer le projet:

1. Installez Node.js et npm si ce n'est pas déjà fait.
2. Clonez ce dépôt sur votre machine locale.
3. Naviguez dans le dossier du projet et exécutez la commande suivante pour installer les dépendances:

```bash
npm install
```

4. Pour lancer l'application en mode développement, exécutez:

```bash
npm run start:dev
```

L'application démarre maintenant en mode développement, en écoutant les modifications des fichiers source pour recompiler automatiquement et recharger l'application.

## Utilisation de Prisma

Prisma est utilisé comme ORM (Object-Relational Mapping) pour interagir de manière intuitive avec la base de données. Avec Prisma, vous pouvez définir votre modèle de données, effectuer des migrations de base de données et interroger vos données de manière type-safe.

### Migrations de la base de données

Pour créer ou mettre à jour la structure de votre base de données en fonction de votre schéma Prisma, exécutez:

```bash
npx prisma migrate dev
```

### Accès au Client Prisma

Le client Prisma est accessible dans les services de l'application et peut être utilisé pour effectuer des requêtes de base de données.

```typescript
import { PrismaService } from './prisma/prisma.service';

// Utilisez PrismaService dans vos services
```

## Swagger

Le projet est configuré pour générer une documentation d'API interactive via Swagger. Cette documentation est accessible à l'adresse suivante une fois l'application lancée:

```
http://localhost:3000/api
```

Visitez cette URL dans votre navigateur pour voir l'interface utilisateur de Swagger, où vous pouvez consulter et tester les différentes routes API disponibles.

---
