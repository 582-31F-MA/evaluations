# Examen 1 : Classes

Pour cet examen, vous devez implémenter la logique métier nécessaire
pour créer des produits (_products_, en anglais), et ajouter ceux-ci à
une commande (_order_, en anglais). Vous trouverez ci-dessous les
consignes.

## Consignes

- Votre programme doit contenir dans un fichier nommé `Order.js` les
  classes `Order` et `Product`.

- Un objet de type `Product` a un `name` (nom), un `price` (prix) et une
  `quantity` (quantité). Les trois valeurs sont nécessaires pour appeler
  le constructeur de la classe.

- Si la quantité d'un produit est présentement égale à zéro, alors
  celui-ci est en rupture de stock. Un objet `Product` a une méthode
  nommée `isOutOfStock` qui retourne `true` si le produit est en rupture
  de stock.

- Un objet de type `Order` a une propriété nommée `products` qui
  représente les produits présentement dans la commande, et dont la
  valeur est un tableau d'objets `Product`. Ce tableau doit être donné
  comme argument au moment d'instancier un nouvel objet `Order`.

- On peut ajouter un produit à une commande. L'interface de `Order`
  inclut une méthode nommée `add` qui, étant donné un objet de type
  `Product`, ajoute celui-ci à la commande. Si on tente d'ajouter un
  produit en rupture de stock, la méthode `add` lève une exception de
  type `OutOfStockError`.

- Toutes les classes doivent être exportées.

Il est important de respecter _à la lettre_ le nommage prescrit
ci-dessus. Autrement, les tests automatisés vont échouer, et vous serez
pénalisé·e, même si l'implémentation est bonne.

N'oubliez pas d'exécuter les commandes `deno lint`, `deno test`, et
`deno fmt` avant de remettre votre examen. Vous perdrez des points si
ces commandes produisent des erreurs.

## Remise

Votre examen doit être remis dans un dépôt créé à cet effet. Pour créer
le dépôt, veuillez cliquer [ici][Classroom].

[Classroom]: https://classroom.github.com/a/v2Di3nDt
