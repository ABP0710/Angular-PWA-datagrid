import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { InputsComponent } from '../inputs/inputs.component';
import { InputServiesService } from '../../Services/input-servies.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, InputsComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: []
})
export class TableComponent implements OnInit {
  dataSource!: File[];

  constructor(private fileUpload: InputServiesService) {}

  ngOnInit(): void {
    this.fileUpload.fileList$.subscribe(
      (list => {console.log(list);
    }))
  }
  
}
