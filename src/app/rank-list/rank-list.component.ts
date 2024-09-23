import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RankFormComponent } from './rank-form/rank-form.component';
import { RankService } from '../Services/rank.service';
import { getSeverity } from '../utils/Severity';
import { DialogConfig } from '../utils/dialogForm.model'
import { actions } from '../utils/actions';
import { getInventoryStatus } from '../utils/getInventoryStatus';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss'],
})

export class RankListComponent {
  dropdownmenuTable: MenuItem[] = [];
  ref?: DynamicDialogRef;
  showRanks: any[] = [];
  Eactions = actions;
  getSeverity = getSeverity;
  getInventoryStatus = getInventoryStatus
  // Define columns configuration
  tableConfig = {
    title: 'Rank',
    headers: [
        { field: 'title', header: 'Title' },
        { field: 'description', header: 'Description' },
        { field: 'rankType', header: 'Rank Type' },
        { field: 'organization', header: 'Organization' },
        { field: 'shortCode', header: 'Short Code' },
        { field: 'scale', header: 'Scale' },
    ],
    data: this.getRanks(),
    rowActions: (rowData: any): MenuItem[] => [
        { label: 'Edit', command: () => this.showRankForm({action: this.Eactions.edit, rowData}) },
        { label: 'View', command: () => this.showRankForm({action: this.Eactions.view, rowData}) },
        { label: 'Delete', command: () => this.showRankForm({action: this.Eactions.delete, rowData}) },
      ],
    tableActions: [
      { label: 'Search', styleClass: 'png-button png-button-outline' },
      { label: 'Add', styleClass: 'png-button png-button-solid', command: () => this.showRankForm({ action: actions.add }) },
    ]
  }

  constructor(
    public dialogService: DialogService,
    private rankService: RankService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getRanks();
  }

  // Show a message to the user
  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({severity, summary, detail});
  }

  // Open the rank form for adding a new rank
  showRankForm(rankData: any) {
    const dialogConfig = new DialogConfig(`${rankData.action} Rank`, rankData);
    this.ref = this.dialogService.open(RankFormComponent, {
      
      ...dialogConfig,
    });
    this.ref.onClose.subscribe((result: boolean) => {
      if (result) this.getRanks();
    });
  }

  // Fetch ranks from the service and map them to the display structure
  getRanks() {
    let payLoad = {}
    this.rankService.handleRank(payLoad).subscribe((response) => {
      if (response?.data?.[0]?.[0]) {
        const ranksArray = response.data[0][0];
        this.showRanks = ranksArray.map((rank: any) => ({
          ...rank,
          rankType: rank.rankTypeId?.title,
          organization: rank.organizationTypeId?.title,
          inventoryStatus: this.getInventoryStatus(rank.statusId)
        }));
      }
    });
  }  
}
