import React, {FC} from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

type PropsType = {
    filter: { sort: string, query: string }
    setFilter: React.Dispatch<React.SetStateAction<{ sort: string; query: string; }>>
}

const PostFilter: FC<PropsType> = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput type='text' placeholder='Search' onChange={e => setFilter({...filter, query: e.currentTarget.value})}
                     value={filter.query}/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Sort by'}
                options={[
                    {value: 'title', name: 'Sort by name'},
                    {value: 'body', name: 'Sort by description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;