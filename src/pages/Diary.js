import React, { useContext } from 'react';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import { useNavigate } from 'react-router';
import { DiaryStateContext } from '../App';




export default function NewDiary() {
    const navigate = useNavigate();
    const diaryList = useContext(DiaryStateContext);

    return (
        <div className='Diary basicStyle'>
            <Header text={'다이오리'} />
            <button
                onClick={() => navigate('/newDiary')}
            >새로운 일기 작성</button>

            {diaryList.diary.map((item) => 
                <DiaryList
                    key={item.id}
                    author={item.author}
                    id={item.id}
             />)}
        </div>
    );
}

