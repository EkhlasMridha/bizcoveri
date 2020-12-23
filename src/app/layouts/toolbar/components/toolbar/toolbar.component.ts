import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '@core/core-service';;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuButton: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();
  constructor (
    private coreService: CoreService,
    private router: Router,
  ) {
    this.coreService.iconService.loadIcons(['signout']);
  }

  ngOnInit(): void { }

  signoutUser() {
    // this.userManagerService.signout().subscribe((res) => {
    //   this.router.navigate(['signin']);
    // });

    this.coreService.tokenService.removeToken();
    this.router.navigate(['landing']);
  }

  openDrawer(event) {
    this.menuButton.emit(event);
  }

}
