import { Component, OnInit } from '@angular/core';
import { ServiceTypeModel } from '../../models/servicetype.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  serviceTypeList: ServiceTypeModel[] = [
    {
      localIcon: "quality-person",
      title: "Quality Partners",
      subTitle: "Provide top notch services"
    },
    {
      localIcon: "collaboration",
      title: "Collaborative workforce",
      subTitle: "Support 100% remote teamwork"
    },
    {
      localIcon: "compliance",
      title: "Speedy Execution",
      subTitle: "Through timely information flow and well defined templates"
    },
    {
      localIcon: "execution",
      title: "Compliance",
      subTitle: "Ensures fairness and full compliance       "
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
