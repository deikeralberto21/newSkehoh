import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from '../components/content-main/Content.jsx'
import '../index.css'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Sphere} from '@react-three/drei';
import Choco from '../components/3DPage/Lemon_verbena.jsx'
import HDR from '../../assets/hdri2.hdr'
import Scene from '../components/3D/scene.jsx'
export default function Home(){
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
      <main className='container_page'>
      <div className='contentMain'>
        <div style={{ height: '100vh', width: '100vw', position: 'absolute', margin: 'auto', zIndex: -999 }}>
          <Scene>
            <color attach="background" args={['#f2f2f2']}></color>
            <OrbitControls enablePan={false} enableZoom={false} />
            <Environment files={HDR}/>
            {/* <Choco animated={animate} position={position_obj} scale={scale_act}></Choco> */}
            <Choco animated={animate} position={position_obj} scale={scale_act}></Choco>
          </Scene>
        </div>
        <div className='headerChocolate'>
          <div>
            <h1 className='chocolate_name'>CHOCOLATE LEMON VERBANA</h1>
          </div>        
        </div>
      </div>
    </main>
    )
}   