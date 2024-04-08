/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Blackcurr.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const groupRef = useRef()
  props.animated(groupRef)
  const { nodes, materials } = useGLTF('/blackcurrant.gltf')
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Chocolate.geometry} material={materials['Chocolate Verde.001']} />
    </group>
  )
}

useGLTF.preload('/blackcurrant.gltf')
