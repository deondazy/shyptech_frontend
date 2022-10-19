import React, { useEffect } from "react";
import { AssignedIcon, DeliveredIcon, EnRouteIcon, PendingIcon, ProgressTab, ViewFormatter } from "components";
import { numberFormat } from "utils";

export const DeliveryTrackDisplay: React.FC<Props> = ({ trackingId, track , beep }) => {

    const id = document?.getElementById("shypdeck-tracking-id");

    const currentProgress = Array.isArray(track?.data?.shipmentHistories) ? track?.data?.shipmentHistories : [];

    const data = [

        { title: "Sender's Address", value: track?.data?.senderAddress },

        { title: "Sender's Name", value: track?.data?.senderName },

        { title: "Receiver's Address", value: track?.data?.receieverAddress },

        { title: "Receiver's Name", value: track?.data?.receieverName },

        { title: "Tracking ID", value: trackingId || "------" },

    ];

    const progressData = [
        {

            label: "Pending",

            svgString: PendingIcon,

        },

        {

            label: "Assigned",

            svgString: AssignedIcon,

        },

        {

            label: "Enroute",

            svgString: EnRouteIcon,

        },

        {

            label: "Delivered",

            svgString: DeliveredIcon,

        }

    ];

    useEffect(() => {

        if (typeof window !== "undefined" && id) {

            window?.scrollTo({ behavior: "smooth", top: id.scrollHeight });

        }

        // eslint-disable-next-line
    }, [id , beep]);

    return (

        <div id={"shypdeck-tracking-id"}>

            <ViewFormatter

                wrapperClass="track-delivery-summary-amount"

                className="reverse"

                value={trackingId || "-----"}

                title={"Tracking ID"}

            />

            <ProgressTab

                className={"mt-5"}

                activeIndex={currentProgress?.[0]?.shippingStatus - 1}

                tabs={progressData}

                withSvg={true}

            />

            <div className="form-field-group track-delivery-summary">

                <h2 className="text-center color-primary mb-5"> Delivery Details </h2>

                {data.map((item, index) =>

                    <ViewFormatter {...item} key={`track-detail-${index}`} />

                )}

                <ViewFormatter

                    wrapperClass="track-delivery-summary-amount"

                    title="Amount Paid"

                    value={numberFormat((track?.data?.deliveryAmount || 0.0) / 100 )}

                />

            </div>

        </div>

    )

}

interface Props {

    trackingId?: string,

    track?: any,

    beep?: number

}