import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CityFormComponent } from './city-form/city-form.component';
import { DialogConfig } from '../utils/dialogForm.model';
import { actions } from '../utils/actions';
import { CityService } from '../Services/city.service';
import { tableConfig } from '../configurations/table-configuration';
import { CityResponse } from '../Interfaces/city.interface';
import { map } from 'rxjs';
import { country_name_list } from '../utils/countryNames';
import { status_list } from '../utils/statusList';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  cityData: any = [];

  constructor(
    public dialogService: DialogService,
    private ref: DynamicDialogRef,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.getCity();

  }

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
    if (rowData.status !== 'Active') {
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
      { field: 'country', header: 'Country Name' },
      { field: 'description', header: 'Description' },
      { field: 'image', header: 'City Image', isImageUpload: true },
      { field: 'status', header: 'Status', action:true},
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
      showCheckbox: true,
      isCellEditable: true,
      showRadioButton: false,
  })

  showCityForm(rowData: any) {
    const dialogConfig = new DialogConfig(`${rowData.action} City`, rowData);
    this.ref = this.dialogService.open(CityFormComponent, {
      ...dialogConfig,
    });
    this.ref.onClose.subscribe((result: boolean) => {
      if (result) this.getCity();
    });
  }

  getCity() {
    let payLoad = {}
    this.cityService.handleCity(payLoad).subscribe((response: CityResponse) => {
      console.log(response.cities);  // Check how the data is structured

      if (response && response.cities) {
        this.cityData = response.cities.map(city => ({
          ...city,
          country: this.country(city.country),
          status: this.status(city.status).name,
          severity: this.status(city.status).severity
        }))
        this.tableConfig.data = this.cityData;
      }
    });
  }  
  // Helper function to get the country name by ID
    country = (countryId: string): string => {
    const countryName = country_name_list.find(item => item.id === countryId);
    return countryName ? countryName.country : 'Unknown';
  }

  // Helper function to get the status name by ID
  status = (statusId: number): { name: string, severity: string } => {
    const status = status_list.find(item => item.id === statusId);
    return status ? { name: status.name, severity: status.severity } : { name: 'Unknown', severity: 'info' };
  }
}