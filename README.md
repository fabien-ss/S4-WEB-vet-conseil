<div align="center">
<h1> Mon vet-conseil </h1>
<img src="https://badgen.net/badge/Angular/16.0.3/blue?icon=typescript" alt="Angular">
<img src="https://badgen.net/badge/status/development/red?icon=github" alt="Python">
<br> <br>
Mini-projet universitaire 🎓 de création d'un site web pour la gestion d'une clinique vétérinaire et services aux animaux domestiques.
</div>

>Lisez attentivement ce document avant de commencer à travailler sur le projet. SVP 😀!


## Prise en main

### Pour les chefs de sous groupes uniquement !

`Forker` le projet dans votre répertoire et créer autant de branche
que vous voulez dans cette `fork` pour que chaque personne puisse
travailler sur une branche différente.

### Pour tout le monde
`Cloner` la branche principale du chef de sous groupe.
```
git clone https://github.com/<demander a votre chef de sous groupe>.git
```


## Mise en marche
> Soyez sûr d'être dans votre branche de travail avant toute modification
``` git checkout <nom de la branche> ```, pour vérifier la branche sur laquelle vous êtes, utiliser la commande ``` git branch ```

### Prérequis
- NODE.JS ^16.14.0 || ^18.10.0

### Installation des dépendances
Toutes les dépendances de notre projet sont dans le fichier ``` package.json ```, pour les installer, il suffit de taper la commande suivante :
```
npm install
```

### Commencer à travailler
Désormais, vous pouvez commencer à travailler sur le projet
<br>Créer un `module`, et commencer à travailler dessus.
```
ng generate module <nom du module>
```
> Ne pas travailler directement dans le module app, relier si besoin votre module au module app

## Règles de gestion de version

### Commit et push

#### Pour tout le monde
- Vérifier que vous êtes bien sur votre branche de travail
- Vérifier que vous avez bien `pull` la dernière version de la branche principale (afin d'éviter les conflits,
  cela permet de mettre à jour votre branche avec la dernière version de la branche principale et voir si votre code est
  compatible)
```
git pull origin <nom de la branche principale>
```
- Ajouter les fichiers modifiés
```
git add *
```
- Commiter les fichiers modifiés
```
git commit -m "message du commit"
```
- Pusher les fichiers modifiés
```
git push origin <nom de votre branche>
```
- Créer une `pull request` sur github pour que le chef de sous groupe puisse valider votre code et le merger avec la branche principale,
  | Bien donner un titre et une description à votre `pull request` pour que le chef de sous groupe puisse comprendre ce que vous avez fait

#### Pour le chef de sous groupe
Voici les étapes pour merger votre branche avec la branche principale du projet principale
- Vérifier que vous êtes bien sur la branche principale
- Vérifier que vous avez bien `pull` la dernière version de la branche principale du projet principale
```
git pull origin <nom de la branche principale>
```
- Merger votre branche en créant un `pull request` sur github <br>
  | Bien donner un titre et une description à votre `pull request` pour que le chef de sous groupe puisse comprendre ce que vous avez fait

### Gitignore
Pour éviter de pusher des fichiers sensibles et inutiles, il faut ajouter les fichiers à ignorer dans le fichier `.gitignore` comme `nodes_modules`
> Tenez à vérifier cela avant de pusher votre code

### Messages de commit
Pour les messages de commit, il faut commencer par le type de commit, suivi d'une description du commit :
- `feat`: pour les nouvelles fonctionnalités
- `fix`: pour les corrections
- `refactor`: pour les modifications de code qui n'ajoutent pas de fonctionnalités ou ne corrigent pas de bug
- `style`: pour les modifications qui n'apportent aucune altération de sens (indentation, mise en forme, ajout d'espace, renommage de variable, etc.)
- `test`: pour les ajouts de tests
- `perf`: pour les améliorations de performances
> exemple : `feat: add login feature`

### Ajout de dépendances (packages)
Pour des éventuels ajouts de dépendances, il faut les ajouter dans le fichier `package.json` et après les avoir installées avec la commande `npm install <nom du package>`
> Consulter la documentation de la dépendance pour plus d'information

### Signalement de problèmes
Tout problème rencontré doit être renseigné afin de pouvoir le corriger. <br>
Pour signaler un problème, il faut créer une `issue` sur github en donnant un titre et une description du problème rencontré.
> N'oublier pas de mettre des labels sur votre `issue`

###### Workflow
