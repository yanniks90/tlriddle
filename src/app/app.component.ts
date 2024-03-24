import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {KeyLockComponent} from "./key-lock/key-lock.component";
import {DEV_PAGE} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormField,
    MatInput, MatLabel, MatButton,
    MatIconButton, MatIcon, MatError, RouterLink, KeyLockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!event.urlAfterRedirects.includes(DEV_PAGE))
          localStorage.setItem('lastPath', event.urlAfterRedirects);
      }
    })
  }
}
