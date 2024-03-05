import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputServiesService {

  @Input() requiredFileType: string | undefined;
  
  private _fileListSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  public fileList$: Observable<any | null> = this._fileListSubject.asObservable();

  fileName = '';
  uploadProgress?: number | null;
  uploadSub?: Subscription | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(() => {this._fileListSubject.next('Test')}, 1000)
  }

  onFileSelected(event: any) {

    const file: File = event.target!.files[0];

    if (file) {
      this.uploadFile(file)
    }
  }

  private async uploadFile(file: File) {
    console.log('i file method', file);
    setTimeout(() => {this._fileListSubject.next('file')}, 1000);
  }

  // cancelUpload() {
  //   this.uploadSub!.unsubscribe();
  //   this.reset();
  // }

  // reset() {
  //   this.uploadProgress = null;
  //   this.uploadSub = null;
  // }
}
