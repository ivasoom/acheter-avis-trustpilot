# acheter-avis-trustpilot.fr

## Installation
npm install

## Développement
npm run dev

## Variables d'environnement
Copier .env.example en .env.local et remplir les clés.

## Déploiement Vercel
1. Push sur GitHub
2. Importer le repo sur vercel.com
3. Ajouter les variables d'environnement
4. Déployer

## Déploiement LWS / hébergeur classique
Ce site nécessite Node.js 18+.
Sur LWS Business ou supérieur:
1. npm run build
2. npm start (port 3000)
3. Configurer un reverse proxy Nginx vers le port 3000

## Duplication pour nouveau site
1. Copier ce dossier
2. Modifier src/config/site.ts (nom, domaine, email)
3. Modifier src/config/products.ts (prix, Stripe IDs)
4. Modifier les textes dans chaque composant
5. Changer les couleurs dans tailwind.config.ts
6. Nouveau repo GitHub → nouveau projet Vercel
