import { Component, Input, OnInit } from '@angular/core';
import { BizCardModel } from '@modules/biz-card/model/biz-card.model';

@Component({
  selector: 'biz-card',
  templateUrl: './biz-card.component.html',
  styleUrls: ['./biz-card.component.scss']
})
export class BizCardComponent implements OnInit {
  @Input() cardData: BizCardModel;
  constructor () { }

  ngOnInit(): void {
  }
  openUrl(url: string) {
    console.log(url);
    window.open(`http://${url}`, '_blank');
  }
}
