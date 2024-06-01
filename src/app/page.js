"use client";
import { Canvas } from "@react-three/fiber";
import { Vector2, Vector3 } from "three";
import { CameraControls } from "@react-three/drei";
import Waves from "@/components/waves";
import { useControls} from "leva";
import { useRef} from "react";
import setWave from "@/components/preset";

const default_crest_color = "#7FCDFF";
const default_trough_color = "#0000FF";
const default_crest_color_2 = "#07DAE2";

// Helper function : change the color format from hex to normalized rgb
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return new Vector3(r * 0.0039215686, g * 0.0039215686, b * 0.0039215686);
}

// Helper function : change degree to radian
function degreesToRadians(degrees) {
  if (typeof degrees == "string")
    degrees = degrees.slice(0,-1)
  return degrees * (Math.PI / 180);
}





const Scene = () => {

  
  const cameraControlsRef = useRef()


  // reset value to choosen example
  function setpreset(example) {
    if (wave1 && wave2 && wave3 && wave4 && cameraControlsRef.current){
      let waves = setWave(setting,wave1,wave2,wave3,wave4,example)
      set0(waves.setting)
      set1(waves.wave1)
      set2(waves.wave2)
      set3(waves.wave3)
      set4(waves.wave4)
      if(cameraControlsRef.current){
        cameraControlsRef.current.setTarget(waves.cam.target[0],waves.cam.target[1],waves.cam.target[2])
        cameraControlsRef.current.setPosition(waves.cam.position[0],waves.cam.position[1],waves.cam.position[2])
      }
    }
  }


  // "label" : "value(string)"
  const [preset,setPreset] = useControls( ()=>({
    preset : {options : {
      "2 waves" : "2wave",
      "1 wave (wireframe)" : "1wave",
      "The storm": "storm",
      "blue_whirl" : "bwhirl",
      "rose" : "rose",
      "vanishing wave": "beat",
      "Empty Plane" : "empty"
      },
       onChange: (example)=>{setpreset(example)}
    }
}));

  const [setting,set0] = useControls("Setting", ()=>({
    crest: { value: default_crest_color_2 },
    trough: { value: default_trough_color },
    wireframe: { value: false },
    marker : {value:true},
    gridSize: { value: 100, min: 1, max: 1000, step: 10 },
    resolution: { value: 500, min: 4, max: 2000, step: 100 },
  }),{collapsed: true }
);

  const [wave1, set1] = useControls("wave 1", () => ({
    frequency: { value: 3.0, min: 0.0, max: 20.0, step: 0.01 },
    amplitude: { value: 1.0, min: 0.0, max: 20.0, step: 0.01 },
    wave_length: { value: 5.0, min: 0, max: 50.0, step: 0.01, label: "λ" },
    phase: { value: 0.0, suffix: "°" },
    location: { x: 10.0, y: 0.0 },
    on: { value: true },
  }),{collapsed: true }
);
  
  const [wave2, set2] = useControls("wave 2", () => ({
    frequency: { value: 3.0, min: 0, max: 20.0, step: 0.01},
    amplitude: { value: 1.0, min: 0, max: 20.0, step: 0.01 },
    wave_length: { value: 5.0, min: 0, max: 50.0, step: 0.01, label: "λ" },
    phase: { value: 0.0, suffix: "°" },
    location: { x: -10.0, y: 0.0 },
    on: { value: true },
  }),{collapsed: true }
);

  const [wave3, set3] = useControls("wave 3", () => ({
      frequency: { value: 3.0, min: 0, max: 20.0, step: 0.01 },
      amplitude: { value: 1.0, min: 0, max: 20.0, step: 0.01 },
      wave_length: { value: 5.0, min: 0, max: 50.0, step: 0.01, label: "λ" },
      phase: { value: 0.0, suffix: "°" },
      location: { x: 0.0, y: 10.0 },
      on: { value: false },
    }),{collapsed: true }
  );
  const [wave4, set4] = useControls("wave 4",() => ({
      frequency: { value: 3.0, min: 0, max: 20.0, step: 0.01 },
      amplitude: { value: 1.0, min: 0, max: 20.0, step: 0.01 },
      wave_length: { value: 5.0, min: 0, max: 50.0, step: 0.01, label: "λ"},
      phase: { value: 0.0, suffix: "°" },
      location: { x: 0.0, y: -10.0 },
      on: { value: false },
    }),{collapsed: true }
  );

  

  return (
    <>
      <div className="h-screen">

        <Canvas camera={{ position: [0,100,0], fov: 60, far: 6000 }}>
          <CameraControls ref={cameraControlsRef}/>
          <Waves
            nWaves={4}
            wireframe={setting.wireframe}
            color1={hexToRgb(setting.trough)}
            color2={hexToRgb(setting.crest)}
            marker = {setting.marker}
            gridSize={setting.gridSize}
            resolution={setting.resolution}
            amplitude1={wave1.amplitude}
            amplitude2={wave2.amplitude}
            amplitude3={wave3.amplitude}
            amplitude4={wave4.amplitude}
            frequency1={wave1.frequency}
            frequency2={wave2.frequency}
            frequency3={wave3.frequency}
            frequency4={wave4.frequency}
            wavelength1={wave1.wave_length}
            wavelength2={wave2.wave_length}
            wavelength3={wave3.wave_length}
            wavelength4={wave4.wave_length}
            phase1={degreesToRadians(wave1.phase)}
            phase2={degreesToRadians(wave2.phase)}
            phase3={degreesToRadians(wave3.phase)}
            phase4={degreesToRadians(wave4.phase)}
            location1={new Vector2(wave1.location.x, wave1.location.y)}
            on1={wave1.on}
            location2={new Vector2(wave2.location.x, wave2.location.y)}
            on2={wave2.on}
            location3={new Vector2(wave3.location.x, wave3.location.y)}
            on3={wave3.on}
            location4={new Vector2(wave4.location.x, wave4.location.y)}
            on4={wave4.on}
          />
        </Canvas>
      </div>
    </>
  );
};

export default Scene;

/*      <Box args={[10, 2, 10]} material-color="#1da2d8" position={[0,-1.5,0]}/>

const loc1 = new Vector2(10.0, 0.0);
const loc2 = new Vector2(-10.0, 0.0);
const color1 = new Vector3(0.0, 0.0, 0.0);
const color2 = new Vector3(0.0, 0.0, 1.0);
const color3 = new Vector3(1.0, 0.0, 0.0);
const darkblue = "#1932ff";
const lightgreensea = "#02e4f0"; 
cam = [0, 100.0, 50.0]
 phase: 2.0,
    " ": buttonGroup({
      "0": () => set({ phase: 0.25 }),
      "π/6": () => set({ phase: 0.25 }),
      "π/4": () => set({ phase: 0.25 }),
      "π/3   ": () => set({ phase: 0.25 }),
      "π/2": () => set({ phase: 0.25 }),
      "2π/3": () => set({ phase: 0.25 }),
      "3π/4": () => set({ phase: 0.25 }),
      "3π/4": () => set({ phase: 0.25 }),
    }),
    
    
    const wave3 = useControls(
    "wave 3",
    {
      frequency: { value: 3.0, min: 0, max: 10.0, step: 1.0 },
      amplitude: { value: 1.0, min: 0, max: 10.0, step: 1.0 },
      wave_length: { value: 5.0, min: 0, max: 50.0, step: 1.0 },
      location: { x: 0.0, y: 10.0 },
      on: { value: false },
    },
    { collapsed: true }
  );
  
        <button onClick={()=>{getcam(cameraControlsRef.current)}}>xxx</button>

  function getcam(c){
  if (c)
  console.log(c)
}
  */
