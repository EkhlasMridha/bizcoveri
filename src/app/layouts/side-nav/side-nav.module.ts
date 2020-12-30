import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import * as nav from "../../root-routing/app.routes";
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { BizcoverTitleModule } from "@modules/bizcover-title/bizcover-title.module";

const routes: Routes = [
  { path: "", component: SideNavComponent, children: nav.getBusinessRoutes() }
];

@NgModule({
  declarations: [SideNavComponent, ContentComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    BizcoverTitleModule,
    RouterModule.forChild(routes)
  ]
})
export class SideNavModule { }
