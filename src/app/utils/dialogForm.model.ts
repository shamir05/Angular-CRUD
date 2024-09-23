import { IDialogConfig } from '../Interfaces/dialog-config.interface';

export class DialogConfig implements IDialogConfig {
  header: string = '';
  width: string = '70%';
  contentStyle: { overflow: string } = { overflow: 'auto' };
  styleClass: string = 'png-dialogbox';
  baseZIndex: number = 10000;
  maximizable: boolean = true;
  closable: boolean = true;
  data: any = null;

  constructor(header: string, data: any = null) {
    this.header = header;
    this.data = data;
  }
}