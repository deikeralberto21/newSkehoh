/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 choco2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/orange_blossom.gltf')
  const groupRef = useRef()
  props.animated(groupRef)
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Chocolate.geometry} material={materials['Chocolate Verde.001']} />
    </group>
  )
}

useGLTF.preload('/orange_blossom.gltf')
