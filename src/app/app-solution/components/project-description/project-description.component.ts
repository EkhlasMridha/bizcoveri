import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationModel } from '@contracts/navigation.model';

@Component({
  selector: 'project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDescriptionComponent implements OnInit {
  constructor () { }

  ngOnInit(): void {
  }

}
