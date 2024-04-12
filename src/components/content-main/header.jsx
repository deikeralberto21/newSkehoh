import { useEffect, useRef } from 'react'
import icon from '../../../public/house.svg'
export default function Header({name}){
    const refButton = useRef(null);
    return(
        <div className='headerChocolate'>
            <div className='container_icon'><a href='https://www.shekoh.com/flavors'><img className='iconHeader' src={icon} alt="" /></a></div>
            <div>
            <h1 className='chocolate_name'>{name}</h1>
            </div>
            <div></div>        
        </div> 
    )
}