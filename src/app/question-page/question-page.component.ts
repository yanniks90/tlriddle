import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {KeyLockService} from "../services/key-lock.service";
import {NgIf} from "@angular/common";
import {RiddleStateService} from "../services/riddle-state.service";

@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatButton,
    RouterLink,
    FormsModule,
    MatInput,
    MatIconButton,
    MatIcon,
    MatCheckbox,
    NgIf
  ],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent implements OnInit {


  @ViewChild('answer')
  answerInput!: ElementRef;

  errorTexts = [
    'Guter Versuch, aber leider nein.',
    'Nope...',
    'Hm... vllt nah dran, aber ich bin ein dummes Programm, also vllt auch nicht :P',
    'Das ist nicht richtig.'
  ];

  errorText: string | undefined;
  successText: string | undefined;
  @Input({required: true})
  correctAnswers!: string[];
  @Input()
  followUpText!: string;
  @Input({required: false})
  nextPageLink: string | undefined;
  @Input({required: true})
  question!: string;
  @Input()
  code!: string;
  @Input()
  helpText!: string;

  showHelp: boolean = false;

  localStorageAnsweredKey: string = '';

  constructor(private router: Router, private keyLockService: KeyLockService, private riddleState: RiddleStateService) {

  }

  ngOnInit() {
    this.localStorageAnsweredKey = 'answered-'+ this.question
    if (localStorage.getItem(this.localStorageAnsweredKey)) {
      this.showCorrectAnswered();
    }
  }

  evaluateAnswer() {
    if (this.correctAnswers
      .some((a) => this.answerInput.nativeElement.value?.toLowerCase().trim().includes(a)
      || this.answerInput.nativeElement.value?.toLowerCase().trim().match(a))) {
      this.showCorrectAnswered();
      this.keyLockService.pushNumber(this.code)
    } else {
      this.errorText = this.errorTexts[Math.floor(Math.random() * this.errorTexts.length)];
      console.log(this.errorText);
    }
  }

  showCorrectAnswered(): void {
    this.riddleState.storeNewRiddleState();
    if(!this.followUpText && this.nextPageLink){
      this.router.navigateByUrl(this.nextPageLink);
    }
    this.errorText = undefined;
    this.successText = this.followUpText;
    this.answerInput.nativeElement.disabled = true;
    if (this.nextPageLink)
      localStorage.setItem(this.localStorageAnsweredKey, 'true');
  }

  onChange($event: any) {
    this.errorText = undefined;
  }

  onNext() {
    if (this.nextPageLink) {
      this.router.navigateByUrl(this.nextPageLink);
    }

  }

  onHelpClicked() {
    this.showHelp = true;
  }
}
