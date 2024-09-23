export interface IDialogConfig{
    header: string;
    width: string;
    contentStyle: { overflow: string };
    styleClass: string;
    baseZIndex: number;
    maximizable: boolean;
    closable: boolean;
    data: any;
}