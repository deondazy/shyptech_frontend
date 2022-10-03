import React, { useEffect, useState } from "react";
import { Button, Modal, ViewFormatter } from "components";
import PricingImage from "assets/svg/pricing.svg";
import { numberFormat } from "utils";
import { shipmentProcess } from "redux/actions/ShipmentAction";
import { useDispatch } from "react-redux";

export const ConfirmShipmentPrice: React.FC<Props> = ({ shipmentInfo, trigger, onDismiss, priceInfo }) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({

        visibility: false,

        loading: false

    });

    const createOrder = async () => {

        setState((prevState) => ({ ...prevState, loading: true }));

        const details = {

            ...shipmentInfo.details,

            senderDetails: shipmentInfo?.details?.senderDetails,

            receiverDetails: shipmentInfo?.details?.receiverDetails,

            shypdeckShippingPrice: priceInfo.shypdeckShippingPrice,

        };

        const createOrder = await dispatch(shipmentProcess(

            "create-order",

            {

                details,

                PaymentProvider: 1,

                service: shipmentInfo.courierProviderServices,

                courier: shipmentInfo.courier



            } as any, true));

        if ( typeof createOrder?.authorizationUrl === "string" ) {

            window.location = createOrder?.authorizationUrl;

        }

        setState((prevState) => ({ ...prevState, loading: false }));

    }

    const toggleOut = () => {

        if (state.loading) return;

        onDismiss();

        setState((prevState) => ({ ...prevState, visibility: false }))

    };

    useEffect(() => {

        if (typeof trigger === "number" && trigger > 0) {

            setState((prevState) => ({ ...prevState, visibility: true }));

        }

    }, [trigger]);

    return (

        <>

            <Modal

                class="modal-medium confirm-shipment-box"

                title="Delivery Amount"

                legendClass="modal-title-big"

                outsideEscape={!state.loading}

                toggleOut={() => toggleOut()} 

                visibility={state.visibility}

            >

                <div className="d-flex pricing-img-box">

                    <img src={PricingImage} className="m-auto mt-1" alt={"confirm-price"} />

                </div>

                <ViewFormatter
                    wrapperClass="pricing-box-amount"
                    title="Total delivery amount"
                    titleClass="color-primary"
                    valueClass="color-darker"
                    value={numberFormat((priceInfo?.shypdeckShippingPrice || 0.0) / 100)}
                />

                <div className='landing-page-section-newsletter-buttons'>

                    <Button label="Cancel" onClick={() => toggleOut()} />

                    <Button

                        label={state.loading ? "Please wait..." : "Pay"}

                        onClick={() => createOrder()}

                    />

                </div>


            </Modal>

        </>

    );

}

interface Props {
    shipmentInfo: { [key: string]: any },
    trigger: number,
    priceInfo: { shypdeckShippingPrice?: number },
    onDismiss(): void
}
