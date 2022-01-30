import React, {FC} from 'react';
import {getPagesArray} from "../../../utils/pages";

type PropsType = {
    totalPages: string | number
    changePage: (page: number) => void
    page: number
}

const Pagination: FC<PropsType> = ({totalPages, changePage, page}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                    onClick={() => changePage(p)}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;