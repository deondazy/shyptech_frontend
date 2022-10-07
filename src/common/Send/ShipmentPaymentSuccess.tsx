import React from "react";
import SuccessImage from "assets/svg/payment-success.svg";
import { Button, ComponentHolder } from "components";

export const ShipmentPaymentSuccess: React.FC<Props> = ({ reference, visibility }) => {

    return (

        <ComponentHolder

            bodyClass="shipment-processing-payment-success strickFadeIn"

            visibility={visibility}

        >

            <img src={SuccessImage} className="m-auto mt-1" alt={"error-payment"} />

            <p> Your delivery request was successful </p>

            <Button

                label="Track Order"

            />

        </ComponentHolder>

    );

}

interface Props {
    reference: string,
    visibility: boolean
}
