export interface iRowActions {
    label: string;
    command: (rowData: any) => void;
    isVisible?: (rowData: any) => boolean;
}