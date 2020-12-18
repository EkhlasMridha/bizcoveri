import { Component, OnInit } from '@angular/core';
import { ServiceTypeModel } from '../../../contracts/servicetype.model';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {
  serviceTypeList: ServiceTypeModel[] = [
    {
      localIcon: "file",
      title: "Quality Project",
      subTitle: "Pipeline reduces marketing cost"
    },
    {
      localIcon: "collaboration",
      title: "Collaborative workforce",
      subTitle: "Support 100% remote teamwork"
    },
    {
      localIcon: "execution",
      title: "Speedy Execution",
      subTitle: "Through timely information flow and well defined templates"
    },
    {
      localIcon: "globe",
      title: "Rapid Growth",
      subTitle: "Oportunities to expand beyond geographical boundaries"
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
