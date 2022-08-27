import { Button, Modal } from "components";
import React, { useState } from "react";
import { AgentSubscriptionForm } from "./AgentSubscriptionForm";

export const AgentSubscription = () => {

    const [visibility, setVisibility] = useState(false);

    return (
        <>

            <Button
                label={"Delivery Company/Agents"}
                onClick={() => setVisibility(true)}
            />

            <Modal
                visibility={visibility}
                toggleOut={() => setVisibility(false)}
                toggleVisibility={() => setVisibility(prevState => (!prevState))}
                holderClass={""}
            >

                <AgentSubscriptionForm onClose={()=> setVisibility(false)} />

            </Modal>

        </>
    )

}