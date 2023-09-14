'use client';
import React from 'react';

export default function InteractCard({children, contentName}: { children: React.ReactNode, contentName: string }) {

    function OnSelected() {
        alert('You selected ' + contentName);
    }

    function OnHover(event: React.SyntheticEvent) {
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('bg-neutral-200');
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('bg-white');
        }
    }

    return (
        <div className='w-1/4 h-[300px] rounded-lg shadow-lg bg-white'
            onClick={() => OnSelected()}         
            onMouseOver={(event) => OnHover(event)}
            onMouseOut={(event) => OnHover(event)}
        >
            {children}
        </div>
    );
}