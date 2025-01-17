# Examen 2

> Pondération : 10 %\
> Remise : avant la fin du cours

Pour cet examen, vous devez concevoir le modèle de données d'un réacteur
nucléaire, et implémenter l'interface procédurale de son système de
contrôle.

> [!NOTE]\
> Les instructions ci-dessous utilise le terme « propriété » pour se
> référer autant à une propriété d'instance, une propriété de classe, un
> accesseur, ou un mutateur. C'est à vous de déterminer le bon type de
> propritété selon l'énoncé. Pour faire le bon choix, vous pouvez
> également vous référez aux tests.

## Instructions

D'abord, créez une classe nommée `Reactor`. Un réacteur a une
température courante (`temperature`), et il produit une quantité de
neutrons par seconde (`neutrons`). Ces deux valeurs sont nécessaires
pour instancier un nouveau réacteur, et elles peuvent changer dans le
temps.

Pour qu'un réacteur nucléaire produise de l'énergie, il doit être dans
un état de criticité. Ajoutez à la classe `Reactor` une propriété nommée
`critical` dont la valeur est `true` si le réacteur est présentement
dans un état de criticité, et `false` sinon. Un réacteur est dit
critique s'il satisfait les conditions suivantes :

- la température est de moins de 700 degrés Kelvin ;
- la quantité de neutrons émis par seconde est plus grande que 500 ; et
- le produit de la température et des neutrons émis par seconde est
  inférieur à 50,000.

Un réacteur a aussi un seuil de criticité idéal représenté par une
quantité de mégawatts, et dont la valeur est la même pour tous les
réacteurs. Ajoutez à la classe `Reactor` une propriété nommé `threshold`
qui représente cette information.

Enfin, ajoutez une propriété nommée `status` dont la valeur est une
énumération de type `Code`. Les énumérateurs de `Code` sont `Low`,
`Normal` et `Danger`. La valeur de `status` est déterminée selon les
plages suivantes :

- Si le produit de la température et du nombre de neutrons par seconde
  est inférieur à 90 % du seuil idéal, la code d'état est `Low`.

- Si le produit se situe soit entre 0 et 10 % en dessous du seuil,
  exactement sur le seuil, ou entre 0 et 10 % au dessus du seuil, le
  code d'état est `Normal`.

- Si le produit ne se trouve pas dans les plages ci-dessus, le réacteur
  est en train de fondre et le code d'état est `Danger`.

## Remise

Votre examen doit être remis dans un dépôt créé à cet effet. Pour créer
le dépôt, veuillez cliquer [ici][Classroom].

Placez votre code dans un fichier nommé `Reactor.js`, et veuillez
exporter toutes les classes de votre programme. Il vous est interdit de
modifier les autre fichiers du dépôt.

[Classroom]: TODO
