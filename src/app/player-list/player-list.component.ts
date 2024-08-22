import {Component} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

export const PLAYERS: Person[] = [
  {
    id: 1,
    number: '7',
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    photoUrl: 'https://via.placeholder.com/50?text=CR7'
  },
  {
    id: 2,
    number: '10',
    firstName: 'Lionel',
    lastName: 'Messi',
    photoUrl: 'https://via.placeholder.com/50?text=Messi'
  },
  {
    id: 3,
    number: '11',
    firstName: 'Neymar',
    lastName: 'Jr',
    photoUrl: 'https://via.placeholder.com/50?text=Neymar'
  },
  {
    id: 4,
    number: '9',
    firstName: 'Robert',
    lastName: 'Lewandowski',
    photoUrl: 'https://via.placeholder.com/50?text=Lewandowski'
  },
  {
    id: 5,
    number: '8',
    firstName: 'Kaka',
    lastName: '',
    photoUrl: 'https://via.placeholder.com/50?text=Kaka'
  },
  {
    id: 6,
    number: '6',
    firstName: 'Luka',
    lastName: 'Modric',
    photoUrl: 'https://via.placeholder.com/50?text=Modric'
  },
  {
    id: 7,
    number: '4',
    firstName: 'Sergio',
    lastName: 'Ramos',
    photoUrl: 'https://via.placeholder.com/50?text=Ramos'
  },
  {
    id: 8,
    number: '5',
    firstName: 'Zinedine',
    lastName: 'Zidane',
    photoUrl: 'https://via.placeholder.com/50?text=Zidane'
  },
  {
    id: 9,
    number: '3',
    firstName: 'Paolo',
    lastName: 'Maldini',
    photoUrl: 'https://via.placeholder.com/50?text=Maldini'
  },
  {
    id: 10,
    number: '2',
    firstName: 'Gary',
    lastName: 'Neville',
    photoUrl: 'https://via.placeholder.com/50?text=Neville'
  },
  {
    id: 11,
    number: '1',
    firstName: 'Iker',
    lastName: 'Casillas',
    photoUrl: 'https://via.placeholder.com/50?text=Casillas'
  }
];

interface Person {
  id: number;
  number: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
}

@Component({
  selector: 'app-player-list',
  templateUrl: 'player-list.component.html',
  styleUrl: 'player-list.component.css',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CommonModule],
})


export class PlayerListComponent {
  grid: Person[][] = [];
  done: Person[] = PLAYERS;

  constructor() {
    this.grid = new Array(25).fill(null).map(() => []);
  }

  drop(event: CdkDragDrop<Person[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}