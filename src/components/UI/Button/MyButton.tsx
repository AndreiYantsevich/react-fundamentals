import React, {FC, MouseEvent} from 'react';
import styles from './MyButton.module.css'
import {PostType} from "../../PostList";

type PropsType = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    post?: PostType
    style?: {}
}

const MyButton: FC<PropsType> = ({children,...props}) => {

    return (
        <button {...props} className={styles.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;