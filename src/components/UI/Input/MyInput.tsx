import React, {ChangeEvent, FC} from 'react';
import styles from './MyInput.module.css'

type PropsType = {
    type?: string
    placeholder?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string
}

const MyInput: FC<PropsType> = ({...props}) => {

    return (
        <input className={styles.myInput} {...props}/>
    );
};

export default MyInput;