import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '@core/core-service';
import { DomainService } from '@core/env-domain';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  BREAD_CRUMB_NAME: string = 'breadcrumb';
  constructor (
    private coreService: CoreService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.coreService.navTracerService.setTitle(
      this.routes.root,
      DomainService.domains.AppName,
      '::'
    );
    this.coreService.navTracerService.activatedRouteBroadCaster();
  }
}
