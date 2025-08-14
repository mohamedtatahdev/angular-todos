# Présentation de output()


## Communication Enfant > Parent avec output()

La fonction output() d'Angular est utilisée pour marquer une propriété comme un événement émis par un composant.

Cela permet à un composant enfant de notifier son parent qu’une action a eu lieu, en émettant des données ou des événements à travers un mécanisme réactif.

La fonction output() s’appuie sur les signaux.

## Syntaxe et fonctionnement de output()

Syntaxe
```
propriete = output<Type>();
```

- Type : définit le type des données émises par l'événement
- Contrairement à input(), il n'y a pas de valeur par défaut à définir. La propriété émet un signal réactif uniquement lorsque vous le déclenchez explicitement.


## Fonctionnement

***Création de l’événement :*** avec output(), vous déclarez une propriété réactive qui agit comme un canal pour émettre des événements.

***Émission de l’événement :*** l’événement est émis avec la méthode emit().

***Liaison dans le parent :*** le parent peut écouter cet événement avec (nomDeLEvenement)="action()".

## Exemple simple
Composant enfant

```
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="notifyParent()">Cliquez ici</button>
  `,
})
export class ButtonComponent {
  buttonClicked = output<string>();

  notifyParent() {
    this.buttonClicked.emit('Le bouton a été cliqué !');
  }
}
```
*buttonClicked* : une propriété marquée avec *output()* pour signaler un événement.

La méthode *notifyParent()* met à jour la valeur du signal, émettant ainsi l'événement *"Le bouton a été cliqué !"*.

Composant parent

```import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-button (buttonClicked)="handleEvent($event)"></app-button>
  `,
})
export class AppComponent {
  handleEvent(message: string) {
    console.log('Événement reçu :', message);
  }
}```

Le parent écoute l’événement *buttonClicked* avec *(buttonClicked)="handleEvent($event)"*.

La méthode *handleEvent()* traite la valeur transmise par l'enfant.
