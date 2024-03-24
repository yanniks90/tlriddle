import {Component, Input, OnInit} from '@angular/core';
import {KeyLockService} from "../services/key-lock.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-key-lock',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './key-lock.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), // Initial state
        animate('3000ms', style({ opacity: 1 })) // Final state
      ])
    ])
  ],
  styleUrl: './key-lock.component.css'
})
export class KeyLockComponent implements OnInit{

  numbers: string[]= [];

  constructor(private keyLockService: KeyLockService) {
  }

  ngOnInit() {
    this.keyLockService.numbers.subscribe(newNumbers => {
      this.numbers = newNumbers;
    });

  }

}
