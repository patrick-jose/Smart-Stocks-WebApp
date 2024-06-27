import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { RouterLink } from '@angular/router';

interface Term {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-portfolio',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    RouterLink
  ],
  templateUrl: './create-portfolio.component.html',
  styleUrl: './create-portfolio.component.scss'
})
export class CreatePortfolioComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  terms: Term[] = [
    {value: 'weeks-0', viewValue: 'Semanas'},
    {value: 'years-1', viewValue: 'Anos'},
    {value: 'decades-2', viewValue: 'Décadas'},
  ];

  constructor(private _formBuilder: FormBuilder) {}
}
