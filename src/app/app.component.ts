import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TableComponent } from './Components/table/table.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { DropDownComponent } from "./Components/drop-down/drop-down.component";
import { ButtonComponent } from "./Components/button/button.component";
import { InputsComponent } from './Components/inputs/inputs.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent, DialogComponent, DropDownComponent, ButtonComponent, InputsComponent]
})
export class AppComponent {
  

  title = 'Angular-PWA-datagrid';

  
}
