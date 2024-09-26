import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { CityService } from 'src/app/Services/city.service';
import { actions } from 'src/app/utils/actions';
import { country_name_list } from 'src/app/utils/countryNames';
import { status_list } from 'src/app/utils/statusList';

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
    cityId: [null],
    cityName: ['', Validators.required],
    timeZone: ['', Validators.required],
    country: ['', Validators.required],
    description: [''],
    status: ['', Validators.required],
  };
  cityData = this.config.data?.rowData;

  country_name_list = country_name_list;
  status_list = status_list;
  // for closeing on close button
  constructor(
    public dialogService: DialogService,
    public config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private fb: FormBuilder,
    private cityService: CityService,
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
      const selectedCountry = this.country_name_list.find(country => country.country === this.cityData.country);
      const selectedStatus = this.status_list.find(status => status.name === this.cityData.status);
        console.log(`Data coming in city data is: ${this.cityData.country}`)
        this.cityForm.patchValue({
          ...this.cityData,
          cityId: this.cityData.cityId,
          country: selectedCountry,
          status: selectedStatus
    })
      // this.cityForm.controls['country'].setValue(this.cityData?.country.id);
      // this.cityForm.controls['status'].setValue(this.cityData?.status.id);
    }
      if (this.action === actions.view || this.action === actions.delete) {
      this.cityForm.disable();
    }
  }

  onClose() {
    this.ref.close();
  }

  translate(label: any) {
    return label;
  }

  handleCity(){
    const payLoad = {
      ...this.cityForm.value
    }
      this.cityService.handleCity(payLoad, this.action).subscribe((res)=>{
          if(res){
            console.log(`City Added Successfully ${res}`)
            this.ref.close(true)
          }
      })
    
  }

}
