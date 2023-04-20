import React from 'react';
import { useNavigate } from 'react-router';
import MyButton from './MyButton';

export default function DiaryList({author,id}) {

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/diary/${id}`);
    }

    return (
        <div className='DiaryList'>
            <span>{author}</span>
            <MyButton text={'수정하기'} onClick={handleEdit} />
        </div>
    );
}

