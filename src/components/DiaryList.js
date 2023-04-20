import React from 'react';
import { useNavigate } from 'react-router';

export default function DiaryList({author,id}) {

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/diary/${id}`);
    }

    return (
        <div className='DiaryList'>
            <span>{author}</span>
            <button onClick={handleEdit}>수정하기</button>           
        </div>
    );
}

