import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DropdownOption } from 'src/app/Interfaces/interface';
import { OrganizationService } from 'src/app/Services/organization.service';
import { RankService } from 'src/app/Services/rank.service';
import { actions } from 'src/app/utils/actions';
import { status_list } from 'src/app/utils/statusList';
import { mapData } from 'src/app/utils/mapFunction';

@Component({
  selector: 'app-rank-form',
  templateUrl: './rank-form.component.html',
  styleUrls: ['./rank-form.component.scss']
})
export class RankFormComponent implements OnInit {
  rankForm: FormGroup;
  organizationList: DropdownOption[] = [];
  statusList = status_list
  rankTypeList: DropdownOption[] = [];
  actions=actions
  action= this.config.data?.action || '';
  rankData = this.config.data?.rankData ||  {};
  formData = {
    title: ['', Validators.required],
    description: [''],
    rankTypeId: [null, Validators.required],
    organizationTypeId: [null, Validators.required],
    shortCode: ['', Validators.required],
    scale: [null, Validators.required],
    statusId: [null, Validators.required],
  }

  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig, 
    private ref: DynamicDialogRef, 
    private rankService: RankService, 
    private organizationService: OrganizationService,
  ) {
    this.rankForm = this.fb.group({
     ...this.formData
    });
  }

  ngOnInit(): void {
    this.getRanksTypeList();
    this.getOrganizationTypeList();
    if (this.action !== actions.add ) {
      setTimeout(() => {
        this.loadRankData();
      }, 0);
    }
  }

  loadRankData() {
    if(this.rankData){
    this.rankForm.patchValue(this.rankData);  
    this.rankForm.controls['statusId'].setValue(this.rankData?.inventoryStatus?.id)
    this.rankForm.controls['rankTypeId'].setValue(this.rankData?.rankType?.id)
    this.rankForm.controls['organizationTypeId'].setValue(this.rankData?.organization?.id)
    }
    // Disable form fields if in view or delete mode
    if (this.action === actions.view || this.action === actions.delete) {
      this.rankForm.disable();
    }
  }

  handleRank() {
  let payload:any = {
          ...this.rankForm.value
      }
    this.rankService.handleRank(payload, this.action).subscribe(
      (response) => {
        if (response) {
          this.ref.close(true);
        }
      }
    );
}

  getRanksTypeList() {
    this.rankService.getRanksType().subscribe((response) => {
      if (response?.data?.[0][0]) {
        this.rankTypeList = mapData(response.data[0][0], { labelKey: 'title', valueKey: 'rankTypeId' })
    }});
  }

  getOrganizationTypeList() {
    this.organizationService.getOrganizationTypes().subscribe((response) => {
      if (response?.data?.[0][0]) {
        this.organizationList = mapData(response.data[0][0], { labelKey: 'title', valueKey: 'organizationTypeId' })
  }});
  }

  // Close dialog
  onClose() {
    this.ref.close();
  }
  
  translate(label: any) {
    return label;
  }
}
