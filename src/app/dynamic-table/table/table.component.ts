import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { actions } from 'src/app/utils/actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  Eactions: any = actions;
  selectedRows: any[] = [];
  @Input() tableConfig: any;
  @Input() paginatorOptions: number[] = [10, 20, 50];
  @Input() rowsPerPage: number = 10;

  @Output() actionTriggered = new EventEmitter<{
    action: string;
    rowData?: any;
  }>();

  onActionTriggered(action: string, rowData?: any) {
    this.actionTriggered.emit({ action, rowData });
  }
  
  onClick(action: string, rowData:any){
    debugger;
    if(this.tableConfig?.rowClickAction){
    this.actionTriggered.emit({action, rowData})
    }
  }
  onSelectionChange(event: any) {
    console.log('Selected rows:', this.selectedRows);
  }
}
