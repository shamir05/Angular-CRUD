import { IMappingConfig } from '../Interfaces/map-function.interface'

//Generic function to map the data
export const mapData = (data: any[], config: IMappingConfig)=> 
    data.map(item => ({
      label: item[config.labelKey] || '',
      value: item[config.valueKey] || ''
    }));