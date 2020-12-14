import { Component, Input, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/layouts/side-nav/config/navigation.model';
import { coerceBooleanProperty } from "@angular/cdk/coercion/";
import { Router } from '@angular/router';

@Component({
  selector: 'biz-toolbar',
  templateUrl: './biz-toolbar.component.html',
  styleUrls: ['./biz-toolbar.component.scss']
})
export class BizToolbarComponent implements OnInit {
  @Input() firstNavigation: NavigationModel[] = [];
  @Input() navigationList: NavigationModel[] = [];
  @Input()
  get hasBackground() {
    return this._hasBackground;
  }
  set hasBackground(value) {
    this._hasBackground = coerceBooleanProperty(value);
  }
  @Input()
  get hasLogo() {
    return this._hasLogo;
  }
  set hasLogo(value) {
    this._hasLogo = coerceBooleanProperty(value);
  }
  private _hasLogo: boolean = false;
  private _hasBackground: boolean = false;

  constructor (private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
