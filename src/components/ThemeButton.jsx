import React from 'react'

const ThemeButton = ({ onTap, children}) => {
    return (
        <button onClick={onTap} className=' bg-soft-blue text-white px-4 py-1 rounded-md'> {children} </button>
    );
}

export default ThemeButton;