import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {RouterLink, RouterOutlet} from "@angular/router";
import {QuestionPageComponent} from "../question-page/question-page.component";

@Component({
  selector: 'app-teil-eins',
  standalone: true,
  imports: [RouterOutlet, MatFormField,
    MatInput, MatLabel, MatButton,
    MatIconButton, MatIcon, MatError, RouterLink, QuestionPageComponent],
  templateUrl: './teil-eins.component.html',
  styleUrl: './teil-eins.component.css'
})
export class TeilEinsComponent {

}
