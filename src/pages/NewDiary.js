import React from 'react';
import Header from '../components/Header';

export default function NewDiary() {
    return (
        <div className='NewDiary basicStyle'>
            <Header text={'새로운 다이오리'} />

            <div className='diaryContents'>
                <section>
                    <span>날짜</span>
                    <input
                    type='date'
                    />
                </section>

                <section>
                    <span>작성자</span>
                    <input />
                </section>

                <section>
                    <span>컨텐츠</span>
                    <textarea />
                </section>
            
            </div>
    </div>
    );
}

