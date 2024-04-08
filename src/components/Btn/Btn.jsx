import {useTransition, animated} from 'react-spring';
import ParticlesBackground from '../particles/ParticlesBackground';
import './Btn.css';
import {useEffect, useState} from 'react'

function LoadingLogoShekoh(){
    return(
        <div className='logo'>    
            <p>Shekoh Confections</p>
        </div>    
    )
}

export default function ButtonInitMusic({toggleContent}){
    const [isVisible, setIsVisible] = useState(true);

    const initMusic = () => {
        setIsVisible(false);
        toggleContent();
    }
    return(
        <div className="containerBtn">
            <div className='button_initPage' onClick={initMusic}>
                <div className='content_button'></div>
            </div>
        </div>
    )
}

// export default function Preload({toggleContent}){

//     const [isVisible, setIsVisible] = useState(true);
//     const transition = useTransition(isVisible, {
//         config: {friction:90},
//         from: { opacity: 1 },
//         leave: { opacity: 0 }
//     })

    

//     const initMusic = () => {
//         setIsVisible(false);
//         toggleContent();
//     }

//     return(
//         <>
//             {transition ((style, item) => 
//                 item ? 
//                 <animated.div 
//                 style={style}
//                 className="container_preload">
//                     <ParticlesBackground />
//                     <div className="content_preload">
//                         <div>
//                             <ButtonInitMusic btnClick={initMusic}/>
//                         </div>
//                         <div>
//                             <LoadingLogoShekoh/>
//                         </div>
//                     </div>
//                 </animated.div> : '')} 
//         </>
//     )
// }