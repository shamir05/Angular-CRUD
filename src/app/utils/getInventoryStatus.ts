export const getInventoryStatus = (statusId: number): string => {
        switch (statusId) {
          case 1014:
            return 'Active';
          case 1015:
            return 'Inactive';
          case 1016:
            return 'Suspended';
          default:
            return 'Draft';
        }
      }