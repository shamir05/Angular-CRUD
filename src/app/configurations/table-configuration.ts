export class tableConfig {
  title:string = '';
  headers: any[] = [];
  data: any[] = [];
  rowActions:any;
  tableActions:any;
  rowClickAction:boolean = false;
  showCheckbox:boolean = false;
  showRadioButton:boolean = false;
  isCellEditable:boolean = false;


  constructor(tableData:any){
        this.title = tableData.title,
        this.headers = tableData.headers,
        this.data = tableData.data,
        this.rowActions = tableData.rowActions,
        this.tableActions = tableData.tableActions,
        this.rowClickAction = tableData.rowClickAction,
        this.showCheckbox = tableData.showCheckbox,
        this.showRadioButton = tableData.showRadioButton,
        this.isCellEditable = tableData.isCellEditable
    }
}