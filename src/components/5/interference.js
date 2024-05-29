import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Color, SphereGeometry, Vec, Vector2, Vector3} from "three";
import { CameraControls,PivotControls, Box } from "@react-three/drei";
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
const pink = new Vector3(1.0,0.0,1.0);
const blue = new Vector3(0.0,0.0,1.0);
const saberblue = new Vector3(1.0,2.0,3.0);
const saberbluescale = new Vector3(0.33,0.66,1.0);
const saberorange= new Vector3(3.0,2.0,1.0);
const saberred= new Vector3(3.0,0.0,0.0);
const cuteblue = new Color("#1da2d8") 
const cutered = new Color("#dc143c")
const Inteference5 = ({n,wireframe,amplitude1}) => {
  console.log("LOADING")
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    const hover = useRef(false);
    const shade = useRef();
    let start = 1;
    const uniforms = useMemo(
      () => ({
        u_time: { value: 0.0},
        u_colors: { value: [saberblue, saberblue,saberblue,saberblue,saberblue]},
        u_amplitudes : {value : [3.0,3.0,3.0,1.0,1.0]},
        u_frequencies: {value: [3.0,3.0,1.0,1.0,1.0]},
        u_wavelengths: {value: [10.0,10.0,2.0,2.0]},
        u_positions: {value: [new Vector2(-20.0,0.0), new Vector2(20.0,0.0), new Vector2(0.0,40.),new Vector2(-40.0,-40.0),new Vector2(30.0,30.0)]},
        u_nWaves:{value:n}
      }), []
    );
  
    useEffect(() => {
      console.log("in use effect")
      console.log(wireframe)
        shade.current.wireframe = wireframe;
        shade.current.uniforms.u_nWaves.value = n ;
     
    }, [n,wireframe,amplitude1]);



    //40e0d0
    useFrame((state) => {

      const { clock } = state;
      if (start == 1){
        console.log(clock.getElapsedTime());
        clock.start();
        start =0 ;
      }
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });
  
    return (
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[300,300,2000,2000]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={true}
          ref={shade}
        />
      </mesh>
    );
  };

  export default Inteference5

  //        u_colors: { value: [new Color("#1da2d8"),new Color("#dc143c") ]},
//