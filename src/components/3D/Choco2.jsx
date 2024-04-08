/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 choco2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/choco2.gltf')
  const groupRef = useRef()
  props.animated(groupRef)
  let opacidad = props.opacity_3D
  materials['Chocolate Verde.001'].transparent = true; // Hacer el material transparente
  materials['Chocolate Verde.001'].opacity = opacidad; // Establecer la opacidad, puedes ajustar este valor según lo necesites
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Chocolate.geometry} material={materials['Chocolate Verde.001']} />
    </group>
  )
}

useGLTF.preload('/choco2.gltf')
