import { Canvas, useLoader } from '@react-three/fiber';
export default function Scene({ children }) {
  
  return (
    <>
      <Canvas camera={{zoom:1, position:[1, 1, 2]}}>
        {children}
      </Canvas>
    </>
  );
}
