import { Component, Input, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { coerceBooleanProperty } from "@angular/cdk/coercion/";
import { Router } from '@angular/router';
import { CoreService } from '@core/core-service';

@Component({
  selector: 'biz-toolbar',
  templateUrl: './biz-toolbar.component.html',
  styleUrls: ['./biz-toolbar.component.scss']
})
export class BizToolbarComponent implements OnInit {
  @Input() firstNavigation: NavigationModel[] = [];
  @Input() navigationList: NavigationModel[] = [];
  @Input() barColor: string = null;
  @Input()
  get hasShadow() {
    return this._hasShadow;
  }
  set hasShadow(value) {
    this._hasShadow = coerceBooleanProperty(value);
  }
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
  private _hasShadow: boolean = false;

  selectedNav: string = null;
  isLoggedIn: boolean;

  constructor (private router: Router, private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.navTracerService.routeReceiver.subscribe(res => {
      this.selectedNav = res[0].path;
    });
    this.isLoggedIn = this.coreService.tokenService.hasToken();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  getBackground() {
    if (this.barColor == null) {
      return 'transperant';
    } else {
      return this.barColor;
    }
  }
}
