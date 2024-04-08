import React, { useEffect, useState } from 'react';
import {Howl, Howler} from 'howler'
import clickSound from '../../../assets/mp3/click.mp3';
import './Cursor.css'; // Asegúrate de tener un archivo CSS para estilos

const Cursor = () => {

  useEffect(() => {
    //Movimiento del cursor
    const cursorDot = document.querySelector('#cursor-dot');
    const cursorCircle = document.querySelector('#cursor-circle');

    const clickSnd = new Howl({
      src: [clickSound],
  })

    function mouseClick(e) {
      clickSnd.play();
    }
    
    function mouseDown(){
      cursorCircle.style.width = '70px'; // Establecer el ancho a 200px
      cursorCircle.style.height = '70px'; // Establecer el alto a 150px  
    }
    
    function mouseUp(){
      cursorCircle.style.width = '50px'; // Establecer el ancho a 200px
      cursorCircle.style.height = '50px'; // Establecer el alto a 150px  
    }
  
    function mouseTrack(e) {
  
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      //Animacion
      cursorCircle.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {duration: 500, fill: "forwards"});
    }

    window.document.addEventListener("mousemove", mouseTrack);
    window.document.addEventListener("click", mouseClick);
    window.document.addEventListener("mousedown", mouseDown);
    window.document.addEventListener("mouseup", mouseUp);
  });

  return (
    <>
      <div className="cursor-dot" id='cursor-dot'></div>
      <div className="cursor-circle" id='cursor-circle'></div>
    </>
  );
};

export default Cursor;
