import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  navList: NavigationModel[] = [
    {
      name: "Sign Up",
      route: "signup",
      type: "secondary"
    },
    {
      name: "Login",
      route: "signin",
      type: "secondary"
    }
  ];
  navigations: NavigationModel[] = [
    {
      name: "Solution",
      route: "#",
      type: "secondary"
    },
    {
      name: "Why Bizcoveri",
      route: "#",
      type: "secondary"
    },
    {
      name: "About",
      route: "#",
      type: "secondary"
    },
    {
      name: "Contact us",
      route: "#",
      type: "secondary"
    },
    {
      name: "Create Project",
      route: "#",
      type: "primary"
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
