interface IFormOption {
    abreviation: string;
    id: number;
    name: string;
}

export interface IFormOptions {
    contacts: IFormOption[];
    educations: IFormOption[];
    jobs: IFormOption[];
    marital_statuses: IFormOption[];
    months: IFormOption[];
    poutcomes: IFormOption[];
}

export interface IPredictForm {
    age: number;
    default: boolean;
    balance: number;
    housing: boolean;
    loan: boolean;
    duration: number;
    campaign: number;
    pdays: number;
    previous: number;
    job_id: number;
    marital_id: number;
    education_level_id: number;
    contact_id: number;
    contact_date: string;
    poutcome_id: number;
    month_id?: number;
    day?: number;
}
