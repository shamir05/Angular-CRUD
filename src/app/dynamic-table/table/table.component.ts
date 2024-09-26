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
  visible: boolean = false;


  ngOnInit(): void {}

  @Input() tableConfig: any;
  @Input() paginatorOptions: number[] = [10, 20, 50];
  @Input() rowsPerPage: number = 10;

  @Output() actionTriggered = new EventEmitter<{action: string; rowData?: any}>();

  onActionTriggered(action: string, rowData?: any) {
    this.actionTriggered.emit({ action, rowData });
  }
  
  onClick(action: any, rowData: any, header: string){
    if(this.tableConfig?.rowClickAction){
    this.actionTriggered.emit({action, rowData})
    }
    else if(this.tableConfig?.columnClickAction)
    {
      console.log('Column Header:', header);
      console.log('Row Data:', rowData);
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
        rowData[field] = file.name;  // Update the image with the new one
      };
      reader.readAsDataURL(file);
    }
  }
  
  getFileName(fileUrl: string): string {
    // Assuming the URL has the file name at the end after the last "/"
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  }

  removeImage(rowData: any, field: string) {
    // Reset the field to allow a new image to be selected
    rowData[field] = null;
  }

  stopEvent(event: Event): void {
    event.stopPropagation();
  } 

  showDialog(){
    this.visible = true;
  }

}
