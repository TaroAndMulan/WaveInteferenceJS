import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, SphereGeometry} from "three";
import { CameraControls,PivotControls, Box } from "@react-three/drei";
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const Inteference3 = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
  
    const uniforms = useMemo(
      () => ({
        u_time: { value: 0.0,},
        u_colorA: { value: new Color("#000000") },
        u_colorB: { value: new Color("#1da2d8") },
        u_colorC: {value: new Color("#dc143c")},
        wave_amplitude : {value :1},
        wave_frequency: {value: 2},
        wave_length: {value: 1.0},
      }), []
    );
  
    //40e0d0
    useFrame((state) => {
      const { clock } = state;
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });
  
    return (
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[50, 50, 1000,1000]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    );
  };

  export default Inteference3