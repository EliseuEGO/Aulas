import React from 'react';
export default function Button(){
    return (
        <button
        onClick={()=> alert ('clicked')}
        >Click me</button>
    );
}