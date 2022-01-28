import React, {MouseEvent, FC} from 'react';
import styles from './MyButton.module.css'

type PropsType = {
    addPost: (title: string, description: string) => void
    title: string
    description: string
}

const MyButton: FC<PropsType> = ({children, addPost, title, description}) => {
    const addNewPost = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addPost(title, description)
    }

    return (
        <button className={styles.myBtn} onClick={addNewPost}>
            {children}
        </button>
    );
};

export default MyButton;