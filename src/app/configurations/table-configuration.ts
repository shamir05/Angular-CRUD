export class tableConfig {
  title:string = '';
  headers: any[] = [];
  data: any[] = [];
  rowActions:any;
  tableActions:any;

  constructor(tableData:any){
        this.title = tableData.title,
        this.headers = tableData.headers,
        this.data = tableData.data,
        this.rowActions = tableData.rowActions,
        this.tableActions = tableData.tableActions
  }
}