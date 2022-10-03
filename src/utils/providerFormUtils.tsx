import { citiesBlock, providerFormType, statesBlock, utilType } from "types";
import { isObj } from "./objectUtils";

export const reformRequest = (obj: { [key: string]: { value?: string, label?: string, base64?: string, file?: any } | string | number }) => {

    const reformedItem: { [key: string]: number | string | { "files": any } } = {};

    Object.entries(obj).forEach(([key, value]) => {

        if (isObj(value) && key === "error") return;

        if (typeof value === "string" || typeof value === "number") {

            reformedItem[key] = value;

            return;

        }

        if (isObj(value) && key === "deliveryImage" && typeof value !== "string" && value?.base64) {

            reformedItem[key] = { "files": [{ "base64Image": value?.base64, filename: value?.file?.name }] };

            return;

        }

        if (isObj(value) && value?.value && value?.label) {

            reformedItem[key] = value?.value;

        }

    })

    return reformedItem;

};

export const dropDownItemGenerator = (data: providerFormType, cities: citiesBlock, states: statesBlock) => {

    const itemTypes = Array.isArray(data?.provider?.itemTypes) ? data?.provider.itemTypes : [];

    const shipmentTypes = Array.isArray(data?.provider?.shipmentTypes) ? data?.provider.shipmentTypes : [];

    const vehicleTypes = Array.isArray(data?.provider?.shipmentTypes) ? data?.provider.shipmentTypes : [];

    const localities = Array.isArray(cities?.data?.[0]) ? cities?.data?.[0] : [];

    const locations = Array.isArray(states.data) ? states.data : [];

    const dropDownCollection = {

        itemType: itemTypes?.map((item) => ({ label: item.name, value: item.courierCode, key: "courierCode" })),

        shipmentType: shipmentTypes?.map((item) => ({ label: item.name, value: item.courierCode, key: "courierCode" })),

        vehicleType: vehicleTypes?.map((item) => ({ label: item.name, value: item.courierCode, key: "courierCode" })),

        senderLocality: localities?.map((item) => ({ label: item.name, value: String(item.id) })),

        receiversLocality: localities?.map((item) => ({ label: item.name, value: String(item.id) })),

        senderState: locations?.map(item => ({ label: item.name, value: item.id })),

        receiverState: locations?.map(item => ({ label: item.name, value: item.id }))

    };

    return dropDownCollection;

}
