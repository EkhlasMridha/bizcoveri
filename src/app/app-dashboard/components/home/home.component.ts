import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TesService } from '../../services/tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private testService: TesService,
    private ref: ViewContainerRef
  ) {
    // this.testService.getData().subscribe((res) => {
    //   console.log('result');
    //   console.log(res);
    // });
  }

  ngOnInit(): void { }

  runCommand() {
    // this.confirmationService.openConfirmationModal({
    //   headerText: 'How are you guys?',
    //   description:
    //     'This is a test generic modal system for all possible cases.',
    //   primaryButtonName: 'Yes',
    //   secondaryButtonName: 'No',
    //   localIcon: 'like',
    //   type: 'success',
    //   primaryEvent: this.primaryButton,
    //   secondaryEvent: this.secondaryButton,
    // });
  }

  primaryButton() {
    console.log('Customized callback');
  }

  secondaryButton() {
    console.log('Customized callback 2');
  }

  runLoader() {
    // this.confirmationService.openConfirmationModal({
    //   isLoader: true,
    //   color: 'warn',
    // });
  }
}
