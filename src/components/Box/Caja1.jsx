import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const { nodes, materials } = useGLTF('/caja1.gltf');

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Plastic} position={[-0.071, 0.15, 0]} rotation={[-0.13, 0, 0]} scale={[2.433, 0.64, 0.55]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Transparent plastic']} position={[-0.092, 0.183, 0.371]} rotation={[1.433, 0, 0]} scale={[3.335, 2.956, 3.367]} />
      <group position={[-0.071, 0.839, 0.473]} rotation={[-0.13, 0, 0]} scale={[2.433, 0.64, 0.55]}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Transparent Glass']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.Plastic} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Black} position={[-0.071, 0.15, 0.024]} rotation={[-0.13, 0, 0]} scale={[2.415, 0.619, 0.549]} />
    </group>
  );
}

useGLTF.preload('/caja1.gltf');
