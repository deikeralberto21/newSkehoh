import {useEffect, useState, useRef} from 'react';
import {Howl, Howler} from 'howler'
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Environment } from '@react-three/drei';
import Box from '../components/Box/Caja1.jsx'
import HDR from '../../assets/hdri1.hdr'
// CONTENT

export default function Content(){

    return(
        <div style={{height: '100vh', width:'100vw',margin:'auto',zIndex:-999}}>
            <Canvas>
            <color attach="background" args={['#f2f2f2']}></color>
                <Environment files={HDR}/> 
                <Box></Box>  
            </Canvas>
        </div>
                    
    )
}