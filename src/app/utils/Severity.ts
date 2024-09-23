export const getSeverity = (status: string): string => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'warning';
      case 'Suspended':
        return 'info';
      case 'Draft':
        return 'info';
      default:
        return '';
    }
  }