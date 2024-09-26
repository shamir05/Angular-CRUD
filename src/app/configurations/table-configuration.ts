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


  constructor(tableData:Partial<tableConfig> = {}){
        Object.assign(this, tableData)
    }
}