import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationService } from '../Services/organization.service';
import { OrganizationData } from '../Interfaces/interface';
import { getSeverity } from '../utils/Severity';
import { actions } from '../utils/actions';
import { DialogConfig } from '../utils/dialogForm.model'
import { getInventoryStatus } from '../utils/getInventoryStatus';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
})
export class OrganizationListComponent {
  dropdownmenuTable: MenuItem[] = [];
  ref?: DynamicDialogRef;
  showOrganization: OrganizationData[] = [];
  getSeverity = getSeverity;
  getInventoryStatus = getInventoryStatus
  Eactions = actions;

  // Define columns configuration
  cols = [
    { field: 'defenceCode', header: 'Defence Code' },
    { field: 'title', header: 'Title' },
    { field: 'organizationType', header: 'Organization Type' },
    { field: 'description', header: 'Description' },
  ];

  constructor(
    public dialogService: DialogService,
    private organizationService: OrganizationService
  ) {}

  ngOnInit() {
    this.getOrganizations();
  }

  // Generate menu items for the dropdown
  getMenuItems(rowData: OrganizationData): MenuItem[] {
    return [
      {
        label: 'Edit',
        command: () => this.showOrganizationForm(this.Eactions.edit, rowData),
      },
      {
        label: 'View',
        command: () => this.showOrganizationForm(this.Eactions.view, rowData),
      },
      {
        label: 'Delete',
        command: () => this.showOrganizationForm(this.Eactions.delete, rowData),
      },
    ];
  }

  // Open the rank form for adding a new rank
  showOrganizationForm(action: any, orgData?: OrganizationData) {
    let data = {
      action: action,
      orgData: orgData,
    };
    
    const dialogConfig = new DialogConfig(`${action} Organization`, data)

    this.ref = this.dialogService.open(OrganizationFormComponent, {
      ...dialogConfig
    });
    this.ref.onClose.subscribe((status: boolean) => {
      status && this.getOrganizations();
    });
  }

  // Method to show all organizations in the table
  getOrganizations() {
    let payLoad = {
      username: 'sikandar.waheed',
      data: [{}],
    } 
    this.organizationService.getOrganizations().subscribe((response) => {
      if (
        response &&
        response.data &&
        response.data[0] &&
        response.data[0][0]
      ) {
        console.log(response);
        const organizationArray = response.data[0][0];
        this.showOrganization = organizationArray.map((organization: any) => ({
          organizationId: organization.organizationId,
          defenceCode: organization.defenceCode,
          title: organization.title,
          organizationType: organization.organizationTypeId?.title,
          description: organization.description,
          inventoryStatus: this.getInventoryStatus(organization.statusId),
        }));
      }
    });
  }
}