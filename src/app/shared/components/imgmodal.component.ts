import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ImgModal {
  title: string;
  src: string;
}

@Component({
  selector: 'app-img-dialog',
  template: `
  <h1 mat-dialog-title>Hi {{data.title}}</h1>
  <div mat-dialog-content>
    <img [src]='data.src'>
  </div>`
})

export class ImgModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ImgModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImgModal) {}

  @HostListener('click') onClick(e): void {
    this.dialogRef.close();
  }
}
