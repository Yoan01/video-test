# Utilisez une image Node.js comme base
FROM node:18

# Créez un répertoire de travail
WORKDIR /usr/src/app

# Copiez le fichier package.json et le fichier package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour exécuter l'application
CMD ["npm", "run", "start:dev"]
