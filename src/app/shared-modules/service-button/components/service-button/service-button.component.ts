import { Component, Input, OnInit } from '@angular/core';
import { ServiceTypeModel } from '@contracts/servicetype.model';

@Component({
  selector: 'service-button',
  templateUrl: './service-button.component.html',
  styleUrls: ['./service-button.component.scss']
})
export class ServiceButtonComponent implements OnInit {
  @Input() service: Partial<ServiceTypeModel>;
  constructor () { }

  ngOnInit(): void {
  }

}
