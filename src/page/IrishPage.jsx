import {useMemo} from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Sphere} from '@react-three/drei';
import Choco from '../components/3DPage/Irish_cream.jsx'
import HDR from '../../assets/hdri5.hdr'
import Scene from '../components/3D/scene.jsx'
import Header from '../components/content-main/header.jsx';
import Loading from '../components/loading/Loading.jsx';
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
    const cachedHDR = useMemo(() => {
      return HDR; // Suponiendo que HDR es una referencia estática al archivo HDR
    }, []);
    return(
      <main className='container_page'>
      <div className='contentMain'>
      <Loading></Loading>
        <div style={{ height: '100vh', width: '100vw', position: 'absolute', margin: 'auto', zIndex: -999 }}>
          <Scene>
            <color attach="background" args={['#f2f2f2']}></color>
            <OrbitControls enablePan={false} enableZoom={false}  maxPolarAngle={Math.PI / 2 - 0.1}/>
            <Environment files={cachedHDR} background={true}/>
            {/* <Choco animated={animate} position={position_obj} scale={scale_act}></Choco> */}
            <Choco animated={animate} position={position_obj} scale={scale_act}></Choco>
          </Scene>
        </div>
        <Header name={'IRISH CREAM'}></Header>
      </div>
    </main>
    )
}   