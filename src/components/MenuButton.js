import React from 'react';

export default function MenuButton({buttonText, onClick}) {
    return (
        <div className='MenuButton'>
            <button 
            onClick={onClick}>
                {buttonText}</button>
        </div>
    );
}

