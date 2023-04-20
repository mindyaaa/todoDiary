import React, { useReducer } from 'react';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import { useNavigate } from 'react-router';
import MyButton from '../components/MyButton';

const initialState = {
    count : 1,
    diary :[
        {
        id : Date.now(),
        author: "MINDY"
    }]
};

const reducer = (state, action) => {
    console.log('리듀서 작동', state, action);
}

export default function NewDiary() {
    const [diaryList, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    return (
        <div className='Diary basicStyle'>
            <Header text={'다이오리'} />
            <button
                onClick={() => navigate('/newDiary')}
            >새로운 일기 작성</button>
            <MyButton type={'blue'} text={'블루테스트'} />
            <MyButton type={'tomato'} text={'토마토 테스트'} />
            <MyButton text={'디폴트테스트'} />
            {diaryList.diary.map((item) => 
                <DiaryList
                author={item.author}
                id={item.id}
             />)}
        </div>
    );
}

