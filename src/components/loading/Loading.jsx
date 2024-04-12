import React, { useState, useEffect } from 'react';
import './loading.css';

export default function Loading({ show }) {
    const [style, setStyle] = useState(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(()=>{
        function remove(){
            setStyle({height:'0vh', display:'none'})
        }
    
        setTimeout(remove, 15000)
    },[])

    return (
        <div className="loading" style={style}>
            <div className='loading_content'>
                    <div>
                        Loading Experience...
                    </div>
            </div>
        </div>
    );
}
