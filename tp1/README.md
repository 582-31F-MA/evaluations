# TP1 : Sokoban

> Pondération : 20%\
> Remise : 20 février\
> Modalité : seul·e ou en équipe de deux

![Sokoban](https://upload.wikimedia.org/wikipedia/commons/4/4b/Sokoban_ani.gif)

Sokoban est un jeu vidéo de réflexion inventé par Hiroyuki Imabayashi
en 1982. Le jeu met le ou la joueuse à la place d'un gardien d'entrepôt
dont le but est de ranger des caisses sur des cases cibles. Le gardien
peut se déplacer dans les quatre directions, et pousser (mais pas tirer)
une seule caisse à la fois. Une fois toutes les caisses rangées au bon
endroit, le ou la joueuse passe au niveau suivant.

Votre tâche pour ce travail pratique est d'implémenter une version web
de Sokoban. Vous trouverez dans votre dépôt les ressources nécessaires,
incluant les plans de niveau ainsi que les images à utiliser pour le
jeu.

On vous suggère de placer la logique métier dans un fichier nommé
`Game.js`, et le code qui manipule le DOM dans un fichier nommé
`main.js`.

## Étapes de conception

On vous suggère d'aborder la conception du projet en quatre étapes :
analyse des plans, affichage des niveaux en HTML, implémentation de la
logique de jeu, et conception de l'interface utilisateur·rice. Ces
tâches peuvent également être divisées entre les membres de l'équipe.

### Analyse des plans

Les plan des niveaux sont fournis dans un fichier nommé `blueprints.js`,
lequel exporte par défaut un tableau de chaînes de caractères. Chaque
chaîne est un plan. Un plan représente l'état initial du jeu.

Outre les espaces qui sont des cases vide, les plans utilisent les
caractères spéciaux suivants pour représenter les différents types de
cases :

- `#` : mur
- `$` : caisse
- `@` : gardien
- `.` : cible
- `*` : caisse sur cible
- `+` : gardien sur cible

Votre tâche pour cette étape est de concevoir un modèle de données
orienté object pour représenter les niveau, et d'implémenter un
algorithme qui, étant donnée un plan, produit une représentation du
niveau en JavaScript.

### Affichage des niveaux en HTML

Une fois que votre programme peut traduire un plan en un modèle de
données JavaScript, vous devez traduire se modèle de données en HTML
afin de pouvoir l'afficher dans le navigateur.

Les images à utiliser pour chaque type de case sont incluses dans votre
dépôt.

On vous rappelle que l'apparence d'une page web devrait être prise en
charge par une feuille de style, et que l'implémentation d'un objet ne
doit pas dépendre de la structure du DOM. Le mieux serait donc de
concevoir une fonction qui retourne un nœud, lequel pourra
éventuellement être ajouté au DOM à partir du fichier `main.js`.

On vous suggère d'utiliser un tableau HTML pour représenter un niveau.

### Implémentation de la logique de jeu

Dans Sokoban, la seule action que le ou la joueuse peut prendre est de
déplacer le gardien à l'aide des flèches du clavier. Le logique de jeu
tournera donc autour de cet événement.

Pour faire bouger le gardien, il faut connaître la case où il se trouve,
ainsi que la direction dans laquelle le ou la joueuse veut le déplacer.
Le gardien ne peut pas traverser les murs, il faudra donc vérifier quel
est le type de la case où on veut bouger le gardien. Si la case où se
destine le gardien contient une caisse, alors on devra faire bouger la
caisse en plus du gardien. Les caisses ne peuvent pas traverser les
murs, et le gardien est incapable de pousser plus d'une caisse à la
fois.

Le niveau est réussi une fois que toutes les caisses se trouvent sur les
cibles. Cette vérification doit être faite après chaque mouvement.

### Conception de l'interface utilisateur·rice

La dernière étape consiste à concevoir l'interface web. Les joueurs et
les joueuses doivent pouvoir réinitialiser un niveau, passer au niveau
suivant ou précédent, et choisir un niveau parmi tout ceux qui sont
offerts.

La structure de cette interface devrait être implémentée majoritairement
en HTML. Seuls les éléments dynamiques nécessitent JavaScript.

## Remise

Votre travail doit être remis dans un dépôt GitHub Classroom créé à cet
effet. Pour créer le dépôt, cliquez [ici][GitHub Classroom].

[GitHub Classroom]: https://classroom.github.com/a/9GNgJ8s8

> [!IMPORTANT]\
> Il est interdit de modifier les fichiers et les répertoires (incluant
> ceux qui sont cachés) se trouvant par défaut dans votre dépôt. Ceux-ci
> doivent se retrouver tel quel dans votre remise.

## Entretien

Enfin, une fois le programme soumis, vous devrez expliquer son
fonctionnement et justifier vos choix lors d'un entretien individuel.
L'entretien aura lieu le jour de la remise.
