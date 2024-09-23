import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { actions } from 'src/app/utils/actions';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss'],
})
export class CityFormComponent implements OnInit {
  actions = actions;
  action = this.config.data?.action || '';
  cityForm: FormGroup;
  formData = {
    cityName: ['', Validators.required],
    timeZone: ['', Validators.required],
    countryName: ['', Validators.required],
    description: [''],
    inventoryStatus: ['', Validators.required],
  };
  cityData = this.config.data?.rowData;

  country_name_list = [{ name: 'Pakistan' }, { name: 'Pakistan 2' }];
  status_list = [
    { name: 'Draft' },
    { name: 'Suspended' },
    { name: 'Inactive' },
    { name: 'Active' },
  ];

  // for closeing on close button
  constructor(
    public dialogService: DialogService,
    public config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private fb: FormBuilder
  ) {
    this.cityForm = this.fb.group({
      ...this.formData,
    });
  }

  ngOnInit(): void {
    if (this.action !== actions.add) {
        this.loadData();
    }
  }
  
  loadData() {
    if (this.cityData) {
      this.cityForm.patchValue({
        ...this.cityData,
        countryName: this.country_name_list.find(country => country.name === this.cityData.countryName) || null,
        inventoryStatus: this.status_list.find(status => status.name === this.cityData.inventoryStatus) || null
      });
    }
  }

  onClose() {
    this.ref.close();
  }

  translate(label: any) {
    return label;
  }
}
