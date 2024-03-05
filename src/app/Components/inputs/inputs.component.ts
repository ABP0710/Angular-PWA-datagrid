import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';


import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatDivider, MatIcon, MatButton, ReactiveFormsModule, MatProgressBarModule, NgIf],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent implements OnInit {
  @Input() requiredFileType: string | undefined;
  
  private _fileListSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  public fileList$: Observable<any | null> = this._fileListSubject.asObservable();

  fileName = '';
  uploadProgress?: number | null;
  uploadSub?: Subscription | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  onFileSelected(event: any) {

    const file: File = event.target!.files[0];

    if (file) {
      this.uploadFile(file)
    }
  }

  private async uploadFile(file: File) {
    //console.log('i file method', file);
    this._fileListSubject.next('file');
  }

  cancelUpload() {
    this.uploadSub!.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}
