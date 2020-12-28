import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  isLinear = true;
  clientFinal: number = 4;
  constructor (private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
}
