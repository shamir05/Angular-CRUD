import { MenuItem } from "primeng/api";
import { iRowActions } from "../Interfaces/row-actions.interface";

export class RowActions {
    actions: iRowActions[];
  
    constructor(actions: iRowActions[]) {
      this.actions = actions;
    }
  
    getActions(rowData: any): MenuItem[] {
    debugger;
      return this.actions.map(action => ({
          label: action.label,
          command: () => action.command(rowData)
        }));
    }
}