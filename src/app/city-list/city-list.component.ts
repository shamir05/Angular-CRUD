import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CityFormComponent } from './city-form/city-form.component';
import { DialogConfig } from '../utils/dialogForm.model';
import { actions } from '../utils/actions';
import { CityService } from '../Services/city.service';
import { tableConfig } from '../configurations/table-configuration';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  cityData: any = this.cityService.getCityWithSeverity();

  constructor(
    public dialogService: DialogService,
    private ref: DynamicDialogRef,
    private cityService: CityService
  ) {}

  ngOnInit() {}

  rowActions = (rowData: any): MenuItem[] => {
    
    let baseActions: MenuItem[] = [
      {
        label: 'Edit',
        command: () => this.showCityForm({ action: actions.edit, rowData }),
      },
      {
        label: 'View',
        command: () => this.showCityForm({ action: actions.view, rowData }),
      }
    ];

    // Add "Delete" action only if the status is not "Active"
    if (rowData.inventoryStatus !== 'Active') {
      baseActions.push({
        label: 'Delete',
        command: () => this.showCityForm({ action: actions.delete, rowData }),
      });
    }

    return baseActions;
  };

  tableConfig = new tableConfig({
    title: 'City',
    headers: [
      { field: 'cityName', header: 'City Name' },
      { field: 'timeZone', header: 'Time Zone' },
      { field: 'countryName', header: 'Country Name' },
      { field: 'description', header: 'Description' },
      { field: 'inventoryStatus', header: 'Status', action:true},
      { field: 'actions', header: 'Action', action:true}
    ],
      data: this.cityData,
      rowActions: this.rowActions,
      tableActions: [
        { label: 'Search', styleClass: 'png-button png-button-outline' },
        {
          label: 'Add',
          styleClass: 'png-button png-button-solid',
          command: () => this.showCityForm({ action: actions.add }),
        },
      ],
      rowClickAction: false,
      showCheckbox: false,
      showRadioButton: true,
      isCellEditable: true,
  })

  showCityForm(rowData: any) {
    const dialogConfig = new DialogConfig(`${rowData.action} City`, rowData);
    this.ref = this.dialogService.open(CityFormComponent, {
      ...dialogConfig,
    });
  }
}