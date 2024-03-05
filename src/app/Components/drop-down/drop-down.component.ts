import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FileType } from '../../Interfaces/file-type';
import { Sizes } from '../../Interfaces/sizes';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})

export class DropDownComponent {
  FileTypes: FileType[] = [
    {value: 0, viewValue: 'JPG'},
    {value: 1, viewValue: 'PNG'},
    {value: 2, viewValue: 'SVG'},
    {value: 3, viewValue: 'GIF'},
  ];

  imgSizes: Sizes[] = [
    {value: 0, viewValue: '13x18'},
    {value: 1, viewValue: '10x15'},
    {value: 2, viewValue: '16 9'},
    {value: 3, viewValue: '4 3'},
  ];
}
