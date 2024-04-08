import React, { useEffect, useState, useRef } from 'react';
import { Howl, Howler } from 'howler'; // Importa Howler para tener acceso a las funciones de fade
import * as THREE from 'three';
import Scene from '../3D/scene.jsx';
import './content.css';
import bgMusic from '../../../assets/mp3/background-sound2.mp3';
import Btn from '../Btn/Btn.jsx';
import { OrbitControls, Environment} from '@react-three/drei';
import Objects from '../ObjectCollection/Objects.jsx';
import HDR from '../../../assets/hdri2.hdr';
import Carousel from '../Carousel/Carousel.jsx';

// CONTENT
export default function Content() {
  const [content, setContent] = useState(null);
  const [choco, setChoco] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef(null); // Crear la referencia
  musicRef.current = new Howl({
    src: [bgMusic],
    loop: true,
    volume: 0.2, // Ajusta el volumen según sea necesario
  });

  function toggleMusic(){
    if (!musicRef.current.playing()) {
        musicRef.current.fade(0, 0.2, 1000); // Fade in cuando se reproduce
        musicRef.current.play();
    } else {
        musicRef.current.fade(0.2, 0, 1000); // Fade out cuando se pausa
        musicRef.current.once('fade', () => {
            musicRef.current.pause(); // Pausar la música después del fade out
        });
    }
}
  const selectChoco = (element) => {
    setChoco(element);
  };


  return (
    <main className='container_page'>

      <div className='contentMain'>
        <Btn toggleContent={toggleMusic} />
        <div style={{ height: '100vh', width: '100vw', position: 'absolute', margin: 'auto', zIndex: -999 }}>
          <Scene>
            <color attach="background" args={['#f2f2f2']}></color>
            <OrbitControls enablePan={false} enableZoom={false} />
            <Environment files={HDR}/>
            <Objects selected={choco} />
          </Scene>
        </div>
        <div className='headerChocolate'>
          <div>
            <h1 className='chocolate_name'>CHOCOLATE {choco ? choco.toUpperCase() : 'BERGAMOT'}</h1>
          </div>        
        </div>
        <Carousel handleEvent={selectChoco} />
      </div>
    </main>
  );
}
