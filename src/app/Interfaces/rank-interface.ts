
export interface addEditRank{
    data: {
        rankId?: number,
        title: string,
        description: string,
        statusId: number,
        shortCode: string,
        scale: number,
        rankTypeId: number;
        organizationTypeId:number;
    }[]
}

export interface rank {
    rankId: number;
    title: string;
    description: string;
    statusId: number;
    shortCode: string;
    scale: number;
    rankTypeId?: { title: string }; 
    organizationTypeId?: { title: string };
  }


    export interface deleteRank{
        data: 
            {
                rankId: number;
            }[]
    }

    export interface rankType{
        data: [
            {
            rankTypeId: number,
            title: string
            }
        ]
    }
