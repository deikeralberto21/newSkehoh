import React from 'react'
// Objetos
import ChocoBergamot from '../3D/Bergamot.jsx'
import ChocoMezcal from '../3D/Mezcal.jsx'
import ChocoCoconut from '../3D/Coconut.jsx'
import ChocoEspresso from '../3D/Espresso.jsx'
import ChocoBlackCurrant from '../3D/Blackcurrant.jsx'
import ChocoHazelnut from '../3D/Hazelnut_cream.jsx'
import ChocoHoney from '../3D/Honey_lavander.jsx'
import ChocoIrish from '../3D/Irish_cream.jsx'
import ChocoLemon from '../3D/Lemon_verbena.jsx'
import ChocoMeyer from '../3D/Meyer_lemon.jsx'
import ChocoMilk from '../3D/Milk_cookies.jsx'
import ChocoOrange from '../3D/Orange_blossom.jsx'
import ChocoPassion from '../3D/Passion_fruit.jsx'
import ChocoRose from '../3D/Raspberry_rose.jsx'
import ChocoBourbon from '../3D/Bourbon_pecan_praline.jsx'
import ChocoSafron from '../3D/Saffron.jsx'
import ChocoYuzu from '../3D/Yuzu.jsx'
import { useFrame } from '@react-three/fiber'
import {useState} from 'react'

export default function Objects({selected}){
    // Recibir el chocolate elegio
    const viewModel = selected == null ? 'bergamot' : selected
    
    // OPACIDAD FUNCION
    function searchModel(a){
        if(viewModel==a){
            return 1
        }
    }

    function animate(ref) {
        useFrame(()=>{
            if(ref.current){
              ref.current.rotation.y+=0.003
            }
        })
    }
    const position_obj = [0,-0.1,0]
    const scale_act = [0.8,0.8,0.8]
    return(
        <>
            <ChocoBergamot animated={animate} opacity_3D={searchModel('bergamot')} position={position_obj} scale={scale_act} />
            {/* <ChocoMezcal animated={animate} opacity_3D={searchModel('mezcal')} position={position_obj} scale={scale_act} />
            <ChocoCoconut animated={animate} opacity_3D={searchModel('coconut')} position={position_obj} scale={scale_act} />
            <ChocoEspresso animated={animate} opacity_3D={searchModel('espresso')} position={position_obj} scale={scale_act} />
            <ChocoBlackCurrant animated={animate} opacity_3D={searchModel('blackcurrant')} position={position_obj} scale={scale_act} />
            <ChocoHazelnut animated={animate} opacity_3D={searchModel('hazelnutcream')} position={position_obj} scale={scale_act} />
            <ChocoHoney animated={animate} opacity_3D={searchModel('honeyLavender')} position={position_obj} scale={scale_act} />
            <ChocoIrish animated={animate} opacity_3D={searchModel('irishCream')} position={position_obj} scale={scale_act} />
            <ChocoLemon animated={animate} opacity_3D={searchModel('lemonVerbena')} position={position_obj} scale={scale_act} />
            <ChocoMeyer animated={animate} opacity_3D={searchModel('meyerLemon')} position={position_obj} scale={scale_act} />
            <ChocoMilk animated={animate} opacity_3D={searchModel('milkCookies')} position={position_obj} scale={scale_act} />
            <ChocoOrange animated={animate} opacity_3D={searchModel('orangeBlossom')} position={position_obj} scale={scale_act} />
            <ChocoPassion animated={animate} opacity_3D={searchModel('passionFruit')} position={position_obj} scale={scale_act} />
            <ChocoRose animated={animate} opacity_3D={searchModel('raspebbryRose')} position={position_obj} scale={scale_act} />
            <ChocoBourbon animated={animate} opacity_3D={searchModel('pecanPraline')} position={position_obj} scale={scale_act} />
            <ChocoSafron animated={animate} opacity_3D={searchModel('saffron')} position={position_obj} scale={scale_act} />
            <ChocoYuzu animated={animate} opacity_3D={searchModel('yuzu')} position={position_obj} scale={scale_act} />
             */}
        </>
    )
}