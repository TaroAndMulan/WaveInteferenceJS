'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef,useState } from "react";
import { Color, SphereGeometry, Vector2, Vector3} from "three";
import { CameraControls,PivotControls, Box, FlyControls } from "@react-three/drei";
import vertexShader from '../components/1/vertexShader';
import fragmentShader from '../components/1/fragmentShader';
import Sin1 from "@/components/1/sin1";
import Inteference2 from "@/components/2/interference";
import Inteference3 from "@/components/3/interference";
import Inteference4 from "@/components/4/interference";
import Inteference5 from "@/components/5/interference";
import Inteference6 from "@/components/6/interference";
import { PerspectiveCamera } from "@react-three/drei";
import { useControls } from 'leva'

const loc1 = new Vector2(10.0,0.0);
const loc2 = new Vector2(-10.0,0.0);
const color1 = new Vector3(0.0,0.0,0.0);
const color2 = new Vector3(0.0,0.0,1.0);
const color3 = new Vector3(1.0,0.0,0.0);
const darkblue = "#1932ff"
const lightgreensea = "#02e4f0"
const sea = "#7FCDFF"


// Helper function : change the color format from hex to normalized rgb
function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return new Vector3(r*0.0039215686,g*0.0039215686,b*0.0039215686);
}


const Scene = () => {


  const setting = useControls('Setting',{  
    crest: { value: sea },
    trough: { value: "blue"},
    wireframe: {value:false},
    gridSize : {value: 100, min:1, max:1000, step:10},
    resolution : {value:500, min:2, max:2000, step: 100}
})
const wave1 = useControls( 'wave 1', {
  frequency: { value: 3.0, min: 0, max: 10.0, step: 1.0 },
  amplitude: { value: 1.0, min: 0, max: 10.0, step: 1.0 },
  wave_length: { value: 5.0, min: 0, max: 50.0, step: 1.0 },
  location : {x:10.0,y:0.0},
  on : {value: true}
})

const wave2= useControls( 'wave 2', {
  frequency: { value: 3.0, min: 0, max: 10.0, step: 1.0 },
  amplitude: { value: 1.0, min: 0, max: 10.0, step: 1.0 },
  wave_length: { value: 5.0, min: 0, max: 50.0, step: 1.0 },
  location : {x:-10.0,y:0.0},
  on : {value:true}

})

const wave3= useControls( 'wave 3', {
  frequency: { value: 3.0, min: 0, max: 10.0, step: 1.0 },
  amplitude: { value: 1.0, min: 0, max: 10.0, step: 1.0 },
  wave_length: { value: 5.0, min: 0, max: 50.0, step: 1.0 },
  location : {x:0.0,y:10.0},
  on : {value:false}
}, {collapsed:true})

const wave4= useControls( 'wave 4', {
  frequency: { value: 3.0, min: 0, max: 10.0, step: 1.0 },
  amplitude: { value: 1.0, min: 0, max: 10.0, step: 1.0 },
  wave_length: { value: 5.0, min: 0, max: 50.0, step: 1.0 },
  location : {x:0.0,y:-10.0},
  on : {value:false}
},  {collapsed:true})


  return (<>

    <div className="h-screen">
  <Canvas  camera={{ position: [50.0, 3.0, 0], fov: 60 }}  >
  <axesHelper />
  <CameraControls/>
  <Inteference6  nWaves={4} wireframe={setting.wireframe}
  color1={hexToRgb(setting.trough)} color2={hexToRgb(setting.crest)}
  gridSize={setting.gridSize}  resolution={setting.resolution}
  amplitude1={wave1.amplitude} amplitude2={wave2.amplitude} amplitude3={wave3.amplitude}  amplitude4={wave4.amplitude} 
  frequency1={wave1.frequency}  frequency2={wave2.frequency} frequency3={wave1.frequency}  frequency4={wave2.frequency}  
  wavelength1={wave1.wave_length} wavelength2={wave2.wave_length} wavelength3={wave1.wave_length} wavelength4={wave2.wave_length} 
  location1={new Vector2(wave1.location.x,wave1.location.y)}   on1={wave1.on}
  location2={new Vector2(wave2.location.x,wave2.location.y)}  on2={wave2.on}
  location3={new Vector2(wave3.location.x,wave3.location.y)}  on3={wave3.on}
  location4={new Vector2(wave4.location.x,wave4.location.y)}  on4={wave4.on}
   />
    </Canvas>
    </div>

    </>
  );
};


export default Scene;

//      <Box args={[10, 2, 10]} material-color="#1da2d8" position={[0,-1.5,0]}/>
// 
