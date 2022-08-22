import React from "react"
import { ViewFormatter } from "components/ViewFormatter"
import { countryItemType } from "types"

export const CountrySelector: React.FC<Props> = ({ country, onSelect }) => {

    return (

        <ViewFormatter

            wrapperClass='pt-0 pb-0 pr-0 pl-0 country-item'

            leftLinkIcon={country?.countryFlag || ""}

            value={country?.countryCode || ""}

            valueClass={"color-dark"}

            onClick={() => onSelect && onSelect()}

        />
    )

}

interface Props {
    country?: countryItemType,
    onSelect?: () => void
}
