import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'rootline-progressbar',
  templateUrl: './rootline-progressbar.component.html',
  styleUrls: ['./rootline-progressbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RootlineProgressbarComponent implements OnInit {
  isLoading: boolean = false;
  constructor (private rootlineLoader: CoreService) { }

  ngOnInit(): void {
    this.rootlineLoader.rootlineProgressListener().subscribe(status => {
      this.isLoading = status;
    });
  }
}
