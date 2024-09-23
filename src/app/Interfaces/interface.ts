export interface OrganizationData {
        organizationId?: number;
        title: string;
        organizationType: string;
        inventoryStatus: string;
        status: string;
        defenceCode: string;
        description?: string;
      }
      
//       export interface AddEditOrganization {
//         data: {
//         organizationId?: number;
//         defenceCode: string;
//         title: string;
//         statusId: string,
//         organizationTypeId: string;
//         description?: string;
//         }[]
//       }

      export interface deleteOrganization {
        data: {
            organizationId?: number;
        }[]
      }

      export interface OrganizationType {
        organizationTypeId: number;
        title: string;
      }
      

      export interface DropdownOption {
        label: string;
        value: number;
      }

