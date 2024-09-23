import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { actions } from 'src/app/utils/actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() tableConfig: any;
  @Input() paginatorOptions: number[] = [10, 20, 50];
  @Input() rowsPerPage: number = 10;

  @Output() actionTriggered = new EventEmitter<{
    action: string;
    rowData?: any;
  }>();
Eactions: any = actions;

  onActionTriggered(action: string, rowData?: any) {
    this.actionTriggered.emit({ action, rowData });
  }
  
  onClick(action: string, rowData:any){
    if(this.tableConfig.clickable){
    this.actionTriggered.emit({action, rowData})
    }
  }
}
