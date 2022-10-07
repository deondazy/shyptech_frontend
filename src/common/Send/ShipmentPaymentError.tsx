import React, { useEffect, useState } from "react";
import { Button, Modal } from "components";
import ErrorImage from "assets/svg/payment-error.svg";
import { useRouter } from "next/router";

export const ShipmentPaymentError: React.FC<Props> = ({ trigger }) => {

    const router = useRouter();

    const [state, setState] = useState({

        visibility: false,

        loading: false

    });

    const toggleOut = () => {

        if (state.loading) return;

        setState((prevState) => ({ ...prevState, visibility: false }));

        router.push("/send");

    };

    useEffect(() => {

        if (typeof trigger === "number" && trigger > 0) {

            setState((prevState) => ({ ...prevState, visibility: true }));

        }

    }, [trigger]);

    return (

        <>

            <Modal

                class="modal-small confirm-shipment-box"

                title="Payment Error"

                legendClass="modal-title-big color-red"

                outsideEscape={!state.loading}

                toggleOut={() => toggleOut()} 

                visibility={state.visibility}

            >

                <div className="d-flex pricing-img-box shipment-processing-payment-error-img-box">

                    <img src={ErrorImage} className="m-auto mt-1" alt={"error-payment"} />

                </div>

                <div className='landing-page-section-newsletter-buttons'>

                    <Button label="Done" onClick={() => toggleOut()} />

                </div>

            </Modal>

        </>

    );

}

interface Props {
    trigger: number,
}
