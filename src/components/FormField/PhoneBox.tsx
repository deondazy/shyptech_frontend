import React, { useEffect, useState } from 'react';
import { CountrySelector } from 'components/Location/CountrySelector';
import { useSelector } from 'react-redux';
import { countryItemType, storeInterface } from 'types';
import { classnames } from 'utils';
import { FormField } from '.';
import { FormError } from './FormError';

export const FormFieldPhoneBox: React.FC<Props> = (
    {
        label,
        onChange,
        value,
        placeHolder,
        className = '',
        errorClass = "-",
        ...props
    }
) => {

    const [country, setCountry] = useState<countryItemType>();

    const { util: { countries } }: storeInterface = useSelector((store: storeInterface) => store);

    const countryList = countries.data.map(

        (item) =>

            () =>

                <CountrySelector
                    country={item}
                    onSelect={() => setCountry(item)}
                />

    );

    const errorText = () => {
        if (typeof props.error === "string") return props.error;
        return null;
    }

    const errorTextClass = () => {
        if (typeof props.error === "string") return undefined;
        return undefined;
    }

    const errorOutput = errorText();

    useEffect(() => {

        if (Array?.isArray(countries?.data) && countries?.data?.[0]) {

            setCountry(countries.data[0]);

        }

    }, [countries?.data]);

    return (
        <div className='form-field'>

            {label && <p className='form-field-title text-left'> {label} </p>}

            <div className={classnames('form-field-phone-box', className)}>

                <FormField
                    type="option"
                    label={undefined}
                    options={countryList}
                    className="mb-0"
                    placeHolder={country ? () => <CountrySelector country={country} /> : undefined}
                />

                <FormField
                    label={undefined}
                    onlyNumber={true}
                    placeHolder={placeHolder}
                    value={value}
                    onChange={(e: any) => onChange && onChange(e)}
                    className={classnames(props.phoneClassName , "mb-0")}
                    disabled={props.disabled}
                    onKeyDown={(e: React.KeyboardEvent) => props.onKeyDown && props.onKeyDown(e)}
                />

            </div>

            <FormError
                condition={errorOutput !== null}
                text={errorOutput ? errorOutput : ""}
                className={classnames(errorClass, errorTextClass() && errorTextClass())}
            />

        </div>
    )
}

interface Props {
    label?: string,
    errorClass?: string,
    onChange?(arg: any): void,
    onClick?: () => void,
    value?: string,
    placeHolder?: string,
    className?: string,
    disabled?: boolean,
    readonly?: boolean,
    error?: boolean | string,
    onKeyDown?(e: React.KeyboardEvent): void,
    phoneClassName?: string
}