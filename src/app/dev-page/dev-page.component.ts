import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dev-page',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    RouterLink
  ],
  templateUrl: './dev-page.component.html',
  styleUrl: './dev-page.component.css'
})
export class DevPageComponent implements OnInit{

  storageItems: StorageItem[] = [];

  constructor() {

  }

  ngOnInit() {
    this.storageItems = this.fromStorage();
  }

  fromStorage(): StorageItem[] {
    return Object.keys(localStorage)
      .map(key => {
        return {
          key: key,
          value: localStorage.getItem(key)
        }
      })

  }


  clearStorage() {
    Object.keys(localStorage).forEach(key =>  localStorage.removeItem(key));
    this.storageItems = this.fromStorage();
  }
}

export interface StorageItem {
  key: string;
  value: string | null;
}
