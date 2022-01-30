import React, {ChangeEvent, FC} from 'react';

export type OptionType = {
    value: string | number
    name: string
}

type PropsType = {
    options: Array<OptionType>
    defaultValue: string
    value: string | number
    onChange: (value: any) => void
}

const MySelect: FC<PropsType> = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.currentTarget.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;