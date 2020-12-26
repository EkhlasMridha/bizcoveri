import { Component, OnInit } from '@angular/core';
import { ServiceTypeModel } from '@contracts/servicetype.model';
import { title } from 'process';

@Component({
  selector: 'project-logistics',
  templateUrl: './project-logistics.component.html',
  styleUrls: ['./project-logistics.component.scss']
})
export class ProjectLogisticsComponent implements OnInit {
  manageProject: Partial<ServiceTypeModel>[] = [
    {
      matIcon: "person_pin",
      title: "Self Managed",
    },
    {
      matIcon: "supervised_user_circle",
      title: "Semi Managed",
      subTitle: "We help you post the project, find a suitable vendor"
    },
    {
      matIcon: "trip_origin",
      title: "Fully Managed",
      subTitle: "We help get your project executed end to end"
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
