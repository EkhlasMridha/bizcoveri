import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bizcoveri',
  templateUrl: './bizcoveri.component.html',
  styleUrls: ['./bizcoveri.component.scss']
})
export class BizcoveriComponent implements OnInit {
  @Input() isWhite: boolean = false;
  constructor () { }

  ngOnInit(): void {
  }

}
