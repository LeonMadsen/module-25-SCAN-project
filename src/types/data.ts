export type ITarifs = {
    id: number;
    description: string;
    description_installment: string;
    img: any;
    tarif_name: string;
    tarif_option1: string;
    tarif_option2: string;
    tarif_option3: string;
    current: boolean;
    price: string;
    old_price: string;  
    button: string;
    colors: {
    card: { bg: string, color: string, border: string },
    button: {bg: string, color: string},
    }
}

export type IUserData = {
    login: string;
    password: string;
}

export type IAccessToken = {
    accessToken: string;
    expire: string;
}

export type ISearchParams = {
    inn: string;
    tonality: any;
    limit: string;
    startDate: string;
    endDate: string;
    maxFullness: boolean;
    inBusinessNews: boolean;
    onlyMainRole: boolean;
    onlyWithRiskFactors: boolean;
    includeTechNews: boolean;
    includeAnnouncements: boolean;
    includeDigests: boolean;
}


export type IObjectSearch = {
    items: [];
}