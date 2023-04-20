import React from 'react';

export default function MyButton({text, onClick, type}) {
    return (
        <div className='Button'>
            <button
                className={`${type}`}
                onClick={onClick}
            >{text}</button>
        </div>
    );

}

MyButton.defaultProps = {
    type : "default"
}




