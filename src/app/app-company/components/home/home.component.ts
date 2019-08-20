import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userType: string;
  constructor () {
    this.userType = localStorage.getItem("userType");
  }

  ngOnInit(): void {
  }

}
