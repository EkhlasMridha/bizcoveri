import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  file: File;
  fileUrl: any;
  fileName: string;
  errorMessage: string;
  formData: FormData;
  disableButton = true;
  reader: FileReader;
  isUploading = false;

  @ViewChild("docInput") docInput: ElementRef;
  @ViewChild('videoInput') videoInput: ElementRef;
  constructor () { }

  ngOnInit(): void {
  }

  async onDocumentUpload() {
    const file = this.docInput.nativeElement;

    file.onchange = () => {
      this.setFileToUpload(file, "projectDoc");
    };
    file.click();
  }

  async onVideoUpload() {
    const file = this.videoInput.nativeElement;

    file.onchange = () => {
      this.setFileToUpload(file, "projectVideo");
    };
    file.click();
  }

  // checkFileValidation(file: any): boolean {
  //   const fileExt = file.files[0].type;
  //   console.log(fileExt);
  //   if (fileExt.match(/image(\/png|\/jpeg|\/jpg)/) == null) {
  //     this.errorMessage = 'File not supported';
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  setFileToUpload(file: any, name: string) {
    // if (!this.checkFileValidation(file)) {
    //   this.imageUrl = null;
    //   this.fileName = null;
    //   this.disableButton = true;
    //   return;
    // } else {
    //   this.errorMessage = null;
    // }
    this.file = file.files[0];

    this.formData.set(name, file.files[0]);
    this.reader.readAsDataURL(file.files[0]);
    this.reader.onload = () => {
      this.fileUrl = this.reader.result;
      this.fileName = this.file.name;
    };
    if (this.file.size !== 0) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
}
