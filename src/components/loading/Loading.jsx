import React, { useState, useEffect } from 'react';
import './loading.css';

export default function Loading({ show }) {
    const [style, setStyle] = useState(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        'Opening store...',
        'Preparing flavors...',
        'Sourcing cocoa beans...',
        'Checking inventory...',
        'Ordering chocolates...',
        'Shipping Boxes...',
        'Designing chocolate packaging...',
        'Preparing for a chocolate tasting event...',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Cambia el texto cada 2 segundos

        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        function remove(){
            setStyle({height:'0vh', display:'none'})
        }
    
        setTimeout(remove, 15000)
    },[])

    return (
        <div className="loading" style={style}>
            <div className='loading_content'>
                {texts.map((text, index) => (
                    <div key={index} style={{ opacity: currentTextIndex === index ? 1 : 0 }}>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
}
