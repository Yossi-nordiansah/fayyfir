import React from 'react';
import bgImage from '../../Assets/images/bg2.png';

export default function Layout({ children }) {
    return (
        <div 
            className="relative w-full bg-fixed bg-[length:500px_500px] bg-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {children}
        </div>
    );
}
