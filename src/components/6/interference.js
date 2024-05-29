import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Color, SphereGeometry, Vec, Vector2, Vector3} from "three";
import { CameraControls,PivotControls, Box } from "@react-three/drei";
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
const pink = new Vector3(1.0,0.0,1.0);
const blue = new Vector3(0.0,0.0,1.0);
const saberblue = new Vector3(1.0,2.0,3.0);
const saberorange= new Vector3(3.0,2.0,1.0);
const saberred= new Vector3(3.0,0.0,0.0);
const cutered = new Color("#1da2d8") 
const cuteblue = new Color("#dc143c")
const Inteference6 = ({nWaves,color1,color2,wireframe,gridSize,resolution,
  amplitude1,amplitude2,amplitude3,amplitude4,
  frequency1,frequency2,frequency3,frequency4,
  wavelength1,wavelength2,wavelength3,wavelength4,
  location1,location2,location3,location4,
  on1,on2,on3,on4}) => {
    const mesh = useRef();
    let start = 1;
    const uniforms = useMemo(
      () => ({
        u_time: { value: 0.0},
        u_colors: { value: [color1, color2]},
        u_amplitudes : {value : [amplitude1,amplitude2,amplitude3,amplitude4]},
        u_frequencies: {value: [frequency1,frequency2,frequency3,frequency4]},
        u_wavelengths: {value: [wavelength1,wavelength2,wavelength3,wavelength4]},
        u_positions: {value: [location1, location2, location3,location4]},
        u_nWaves:{value:nWaves},
        u_ons:{value:[true,false]}
      }), []
    );
  
    useEffect(() => {
     mesh.current.material.uniforms.u_amplitudes.value[0] = amplitude1;
     mesh.current.material.uniforms.u_amplitudes.value[1] = amplitude2;
     mesh.current.material.uniforms.u_amplitudes.value[2] = amplitude3;
     mesh.current.material.uniforms.u_amplitudes.value[3] = amplitude4;

     mesh.current.material.uniforms.u_frequencies.value[0] = frequency1;
     mesh.current.material.uniforms.u_frequencies.value[1] = frequency2;
     mesh.current.material.uniforms.u_frequencies.value[2] = frequency3;
     mesh.current.material.uniforms.u_frequencies.value[3] = frequency4;

     mesh.current.material.uniforms.u_wavelengths.value[0] = wavelength1;
     mesh.current.material.uniforms.u_wavelengths.value[1] = wavelength2;
     mesh.current.material.uniforms.u_wavelengths.value[2] = wavelength3;
     mesh.current.material.uniforms.u_wavelengths.value[3] = wavelength4;

     mesh.current.material.uniforms.u_colors.value[0] = color1;
     mesh.current.material.uniforms.u_colors.value[1] = color2;
     mesh.current.material.uniforms.u_positions.value[0] = location1;
     mesh.current.material.uniforms.u_positions.value[1] = location2;
     mesh.current.material.uniforms.u_positions.value[2] = location3;
     mesh.current.material.uniforms.u_positions.value[3] = location4;
     mesh.current.material.uniforms.u_ons.value[0] = on1;
     mesh.current.material.uniforms.u_ons.value[1] = on2;
     mesh.current.material.uniforms.u_ons.value[2] = on3;
     mesh.current.material.uniforms.u_ons.value[3] = on4;

     
    }, [amplitude1, amplitude2,amplitude3,amplitude4,frequency1,frequency2,frequency3,
      frequency4,wavelength1,wavelength2,wavelength3,wavelength4,
      color1,color2,location1,location2,location3,location4,
    on1,on2,on3,on4]);



    //40e0d0
    useFrame((state) => {

      const { clock } = state;
      if (start == 1){
        clock.start();
        start =0 ;
      }
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });
  
    return (
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[gridSize,gridSize,resolution,resolution]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={wireframe}
        />
      </mesh>
    );
  };

  export default Inteference6

  //        u_colors: { value: [new Color("#1da2d8"),new Color("#dc143c") ]},
//