# Présentation de input()

## Communication Parent > Enfant avec input()

La fonction input() est utilisée pour marquer une propriété d'un composant comme recevant des données externes.

Cela permet à un composant enfant de recevoir des valeurs transmises par son parent via des liaisons de propriété.

Ainsi avec input(), vous déclarez une propriété comme "entrée" dans le composant enfant. Lorsque le composant parent transmet une valeur à cette propriété, Angular met automatiquement à jour le composant enfant à chaque modification.

## Syntaxe de input()

```
propriete = input<Type>(valeurParDefaut);
```

- Type : Spécifie le type des données attendues (ex. : string, number, object, etc.).
- valeurParDefaut (facultatif) : Permet de définir une valeur par défaut si aucune donnée n'est transmise.


## Exemple basique

Composant Parent
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  template: `
    <ul>
      <app-todo [task]="'Ranger la maison'"></app-todo>
      <app-todo></app-todo> <!-- Utilisera la valeur par défaut -->
    </ul>
  `,
})
export class TodosListComponent {}
```

Le composant parent transmet la chaîne "Ranger la maison" à la propriété task du composant enfant.

Pour le deuxième composant <app-todo>, aucune valeur n’est passée. Angular utilise donc la valeur par défaut "Tâche par défaut".

Composant enfant

```bash
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <li>
      <p>{{ task }}</p>
    </li>
  `,
})
export class TodoComponent {
  task = input<string>('Tâche par défaut');
}```

