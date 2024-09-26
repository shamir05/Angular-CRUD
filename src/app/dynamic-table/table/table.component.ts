import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { actions } from 'src/app/utils/actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  Eactions: any = actions;
  selectedRows: any[] = [];

  ngOnInit(): void {}

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
    if(this.tableConfig?.rowClickAction){
    this.actionTriggered.emit({action, rowData})
    }
  }

  onSelectionChange(event: any) {
    console.log('Selected rows:', this.selectedRows);
  }

  onFileSelect(event: any, rowData: any, field: string) {
    const file = event.files && event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        rowData[field] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  stopEvent(event: Event): void {
    event.stopPropagation();
  } 

}
