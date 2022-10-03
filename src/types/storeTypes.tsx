export type authType = {
    accesstoken?: string,
    refreshtoken?: string,
    expiresAt?: string
}

export type routeType = {
    currentPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    previousPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    tempPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    navigating: boolean,
    visitationTrack: string[]
}

export type toastType = {
    timer: number,
    nature?: string,
    manualDismiss?: boolean,
    toDismiss?: string,
    toast?: { id: string, text: string },
    toasts: { id: string, text: string, new: boolean }[]
}

export type workerType = {
    activity: string[],
    refreshing: boolean
}

export type countryItemType = {
    countryCode: string,
    countryFlag: string,
    countryIsoCode: string,
    countryName: string,
    id: string,
    status: number
};

export type citiesBlock = {
    loader: boolean,
    error: boolean,
    data: {
        [key: string]: { name: string, id: string }[]
    }
};

export type statesBlock = {
    loader: boolean,
    error: boolean,
    data: {
        name: string,
        id: string,
        localities: {

            id: number,
            name: string,

        }[]

    }[]
};

export type utilType = {
    cities: citiesBlock,
    states: statesBlock,
    countries: {
        data: countryItemType[],
        loader: false,
        error: false
    }
}

export type shipmentProviderType = {
    providerId: number,
    providerName: string
}

export type shipmentServiceType = {
    id: number,
    name: string,
    providers: shipmentProviderType[]
};

export type shipmentType = {
    services: shipmentServiceType[]
};

type providerFieldType = {
    key: string,
    label: string,
    placeholder: string,
    required: boolean,
    minLength?: number,
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
};

type providerFormItemType = { fields: providerFieldType[], title: string };

export type providerFormBlock = {
    "senderInfo": providerFormItemType,
    "receiverInfo": providerFormItemType,
    "itemInfo": providerFormItemType,
};

export type providerFormType = {
    
    provider: {

        providerId: string,

        itemTypes: { [key: string]: any }[],

        shipmentTypes: { [key: string]: any }[],

        vehicleTypes: { [key: string]: any }[]

    },

    form: providerFormBlock

};

export interface storeInterface {
    auth: authType,
    route: routeType
    shipment: shipmentType,
    toast: toastType,
    util: utilType,
    worker: workerType
}
