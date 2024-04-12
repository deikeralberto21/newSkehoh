import { useEffect, useRef } from 'react'
import icon from '../../../public/house.svg'
export default function Header({name}){
    const refButton = useRef(null);
    useEffect(() => {
        if (refButton.current) {
            refButton.current.addEventListener('click', () => {
                window.history.back();
            });
        }

        return () => {
            if (refButton.current) {
                refButton.current.removeEventListener('click', () => {
                    window.history.back();
                });
            }
        };
    }, []);
    return(
        <div className='headerChocolate'>
            <div ref={refButton} className='container_icon'><img className='iconHeader' src={icon} alt="" /></div>
            <div>
            <h1 className='chocolate_name'>{name}</h1>
            </div>
            <div></div>        
        </div> 
    )
}