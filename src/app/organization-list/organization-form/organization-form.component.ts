import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DropdownOption, OrganizationData, OrganizationType } from 'src/app/Interfaces/interface';
import { OrganizationService } from 'src/app/Services/organization.service';
import { actions } from 'src/app/utils/actions';
import { status_list } from 'src/app/utils/statusList';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss'],
})
export class OrganizationFormComponent implements OnInit {
  orgForm: FormGroup;
  organization_type_list: DropdownOption[] = [];
  status_list = status_list;
  actions = actions;
  action = this.config.data?.action;
  orgData = this.config.data.orgData;
  formData = {
    title: ['', Validators.required],
    organizationTypeId: [null, Validators.required],
    statusId: [null, Validators.required],
    defenceCode: ['', Validators.required],
    description: [''],
  };

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private organizationService: OrganizationService
  ) {
    this.orgForm = this.fb.group({
      ...this.formData,
    });
  }

  ngOnInit(): void {
    this.getOrganizationTypeList();
    if (this.action !== actions.add) {
      setTimeout(() => {
        this.loadOrgData();
      }, 0);
    }
  }

  loadOrgData() {
    const orgData: OrganizationData = this.config.data.orgData;
    this.orgForm.patchValue({
      organizationId: orgData.organizationId,
      title: orgData.title,
      organizationTypeId: this.getOrganizationTypeId(orgData.organizationType),
      statusId: this.getStatusId(orgData.inventoryStatus),
      defenceCode: orgData.defenceCode,
      description: orgData.description,
    });
    if (this.action === actions.view || this.action === actions.delete)
      this.orgForm.disable();
  }

  handleOrganization() {
    let payLoad = {
      data: [
        {
          ...this.orgForm.value,
        },
      ],
    };
    if (this.action === actions.edit) {
      payLoad.data[0].organizationId = this.orgData.organizationId;

      this.organizationService
        .handleOrganization(this.action, payLoad)
        .subscribe((response) => {
          if (response) {
            console.log('Organization updated successfully:', response);
            this.ref.close(true);
          }
        });
    } else if (this.action === actions.delete) {
      payLoad.data[0].organizationId = this.orgData.organizationId;
      this.organizationService
        .handleOrganization(this.action, payLoad)
        .subscribe((response) => {
          if (response) {
            console.log('Organization Deleted successfully:', response);
            this.ref.close(true);
          }
        });
    } else {
      this.organizationService
        .handleOrganization(this.action, payLoad)
        .subscribe((response) => {
          if (response) {
            console.log('Organization Added successfully:', response);
            this.ref.close(true);
          }
        });
    }
  }

  getStatusId(statusName: string) {
    const status = this.status_list.find((s) => s.name === statusName);
    return status ? status.id : 0;
  }

  
  getOrganizationTypeId(organizationName: string) {
    const organizationType = this.organization_type_list.find(
      (org) => org.label === organizationName
    );
    return organizationType ? organizationType.value : null;
  }

  getOrganizationTypeList() {
    this.organizationService.getOrganizationTypes().subscribe((response) => {
      if (
        response &&
        response.data &&
        response.data[0] &&
        response.data[0][0]
      ) {
        this.organization_type_list = response.data[0][0].map(
          (org: OrganizationType) => ({
            label: org.title,
            value: org.organizationTypeId,
          })
        );

        // Ensure dropdown matches preselected value if in edit mode
        if (this.action !== actions.add) {
          this.orgForm.patchValue({
            organizationTypeId: this.getOrganizationTypeId(
              this.config.data.orgData.organizationType
            ),
          });
        }
      }
    });
  }

  // for closeing on close button
  onClose() {
    this.ref.close();
  }

  translate(label: any) {
    // return this.multiService.verifyLabel(label) as string;
    return label;
  }
}
