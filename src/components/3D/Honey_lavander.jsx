/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 choco2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/honey_lavander.gltf')
  const groupRef = useRef()
  props.animated(groupRef)
  let opacidad = props.opacity_3D
  materials['Chocolate Verde.002'].transparent = true; // Hacer el material transparente
  materials['Chocolate Verde.002'].opacity = opacidad; // Establecer la opacidad, puedes ajustar este valor según lo necesites
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Chocolate002.geometry} material={materials['Chocolate Verde.002']} />
    </group>
  )
}

useGLTF.preload('/honey_lavander.gltf')
