import { Component, OnInit } from '@angular/core';
import { DropDownComponent } from "../drop-down/drop-down.component";
import { InputsComponent } from "../inputs/inputs.component";

@Component({
    selector: 'app-dialog',
    standalone: true,
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css',
    imports: [DropDownComponent, InputsComponent]
})
export class DialogComponent implements OnInit {

    ngOnInit(): void {
        
    }
    

}
