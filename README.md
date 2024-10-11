## Getting Started

Ce projet est un formulaire Next.js qui effectue une vérification des données saisies par l'utilisateur avant soumission. Il s'agit d'un projet web avec des fonctionnalités de validation côté client et, si nécessaire, des appels à des APIs pour la validation côté serveur.
## Documentation

La documentation du code est générée avec [TypeDoc](https://typedoc.org/). Vous pouvez la consulter le lien suivant : [Documentation](https://timothee-picard.github.io/front-back-next/documentation/)
## Installation

### Prérequis
- Node.js (version 20 ou supérieure)
- npm ou yarn

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone git@github.com:Timothee-Picard/front-back-next.git
```

2. Clonez ce dépôt sur votre machine locale :

```bash
cd nom-du-projet
```

3. Installez les dépendances :

```bash
npm install
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) 

## Scripts

Voici quelques scripts utiles pour gérer le projet :


- **`npm run dev`** : Démarre le serveur de développement.
  <br /><br />
- **`npm run build`** : Compile l'application pour un déploiement en production.
  <br /><br />
- **`npm run start`** : Démarre l'application compilée.
  <br /><br />
- **`npm run lint`** : Vérifie que le code respecte les conventions et bonnes pratiques.
  <br /><br />
- **`npm run test`** : Exécute les tests unitaires.
  <br /><br />
- **`npm run test:watch`** : Exécute les tests unitaires en mode watch.
  <br /><br />
- **`npm run tsdoc`** : Génère la documentation du code.
    <br /><br />
## Deploy on GitPages

Pour déployer le projet sur GitPages il vas falloir créer un tag sur la branche main et le pousser sur le dépôt distant.

1. Créez un tag sur la branche main :

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
```

2. Poussez le tag sur le dépôt distant :

```bash
git push origin v1.0.0
```

3. Vérifiez que le tag a bien été poussé :

```bash
git tag
```

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [TypeDoc](https://typedoc.org/)
- [GitPages](https://pages.github.com/)




