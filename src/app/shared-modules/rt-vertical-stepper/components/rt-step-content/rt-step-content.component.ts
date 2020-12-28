import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rt-step-content',
  templateUrl: './rt-step-content.component.html',
  styleUrls: ['./rt-step-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RtStepContentComponent implements OnInit {
  @Input() selectedContent: any;
  constructor () { }

  ngOnInit(): void {
  }

}
