import { Component, Input, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';


@Component({
  selector: 'chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})
export class ChipListComponent implements OnInit {
  @Input() chipList: ChipModel[] = [];
  constructor () { }

  ngOnInit(): void {
  }

}
