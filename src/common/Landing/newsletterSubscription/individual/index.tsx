import { Button, Modal } from "components";
import React, { useState } from "react";
import { IndividualSubscriptionForm } from "./IndividualSubscriptionForm";

export const IndividualSubscription = () => {

    const [visibility, setVisibility] = useState(false);

    return (
        <>

            <Button
                label={"Business/Individual"}
                onClick={() => setVisibility(true)}
            />

            <Modal
                visibility={visibility}
                toggleOut={() => setVisibility(false)}
                toggleVisibility={() => setVisibility(prevState => (!prevState))}
                holderClass={""}
            >

                <IndividualSubscriptionForm onClose={()=> setVisibility(false)} />

            </Modal>

        </>
    )

}
