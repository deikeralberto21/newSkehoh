/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 choco2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/bourbon_pecan_praline.gltf')
  const groupRef = useRef()
  props.animated(groupRef)
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Chocolate002.geometry} material={materials['Chocolate Verde.002']} />
    </group>
  )
}

useGLTF.preload('/bourbon_pecan_praline.gltf')
