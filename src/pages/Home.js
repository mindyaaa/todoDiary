import React from 'react';
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className='Home basicStyle'>
         <Header text={'호므페이지'} />
         <main className='menuWrapper'>
            <section className='goTodo'>
                <MenuButton 
                buttonText={'투두'}
                onClick={() => navigate('/todo')}
                />
            </section>
            <section className='goDiary'>
                <MenuButton 
                buttonText={'다요리'}
                onClick={() => navigate('/diary')}
                 />
            </section>
         </main>
        </div>
    );
}

