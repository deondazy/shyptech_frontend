import React from "react";
import { BackIcon } from "./Assets";

export const PopButton: React.FC<Props> = ({ onClick }) => {

    return (

        <div

            className="pop-button"

            role={"button"}

            onClick={() => onClick && onClick()}

        >

            <span dangerouslySetInnerHTML={{ __html: BackIcon }} />

            <small> back </small>

        </div>
    )

}

interface Props {
    onClick: () => void
}
