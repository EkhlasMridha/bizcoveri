import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'step-service',
  templateUrl: './step-service.component.html',
  styleUrls: ['./step-service.component.scss']
})
export class StepServiceComponent implements OnInit {
  serviceForm: FormGroup;
  constructor (private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.serviceForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      category: [],
      service: [],
      rating: [-1],
      industries: [],
      rating2: [-1],
      business: []
    });
  }

  onSubmit() {
    const result = Object.assign({}, this.serviceForm.value);
    result.rating += 1;
    console.log(result);
  }
}
