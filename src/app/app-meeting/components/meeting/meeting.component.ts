import { Component, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(['meeting']);
  }

  ngOnInit(): void {
  }

}
