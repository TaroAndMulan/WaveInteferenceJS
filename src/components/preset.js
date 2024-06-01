function setWave(setting,wave1,wave2,wave3,wave4,options) {

   let cam=[0,100,50];

  if (options=="2wave") {
    wave1.frequency = 3;
    wave1.amplitude = 1;
    wave1.wave_length = 5;
    wave1.phase = 0;
    wave1.location.x = 10;
    wave1.location.y = 0;
    wave1.on = true;
    wave2.frequency = 3;
    wave2.amplitude = 1;
    wave2.wave_length = 5;
    wave2.phase = 0;
    wave2.location.x = -10;
    wave2.location.y = 0;
    wave2.on = true;
    wave3.on = false;
    wave4.on = false;
    setting.crest = "#07DAE2"
    setting.trough =  "#0000FF"
    setting.gridSize = 100
    setting.resolution = 500
    setting.wireframe = false
    setting.marker = true
    cam = {position: [6.5,105,5.14], target:[6.5,-0.7,5.14]}
    return {setting,wave1,wave2,wave3,wave4,cam};
  }

  if (options=="1wave") {
        wave1.frequency = 2;
        wave1.amplitude = 2;
        wave1.wave_length = 10;
        wave1.phase = 0;
        wave1.location.x = 0;
        wave1.location.y = 0;
        wave1.on = true;
        wave2.on = false;
        wave3.on = false;
        wave4.on = false;
        setting.crest = "#1932ff"
        setting.trough =  "#02e4f0"
        setting.gridSize = 100
        setting.resolution = 200
        setting.wireframe=true
        setting.marker = false
        cam = {position: [-18.4,62.9,76.7], target:[-0.45,-20,13.5]}
        return {setting,wave1,wave2,wave3,wave4,cam};
      }


      
  if(options=="bwhirl"){
        wave1.frequency = 3;
        wave1.amplitude = 2;
        wave1.wave_length = 2.2;
        wave1.phase = 0;
        wave1.location.x = 0;
        wave1.location.y = 2;
        wave1.on = true;
        wave2.frequency = 3;
        wave2.amplitude = 2;
        wave2.wave_length = 5.4;
        wave2.phase = 0;
        wave2.location.x = -0;
        wave2.location.y = -2;
        wave2.on = true;
        wave3.on = false;
        wave4.on = false
        setting.crest = "#7fcdff"
        setting.trough = "#0000ff"
        setting.gridSize = 100
        setting.resolution = 500
        setting.wireframe= false
        setting.marker = false
        cam = {position: [1.53,105,2.6], target:[1.5,-20,2.6]}
        return {setting,wave1,wave2,wave3,wave4,cam};
  }

  if(options=="rose"){
        console.log("rose")
        wave1.frequency = 3;
        wave1.amplitude = 10;
        wave1.wave_length = 4;
        wave1.phase = 0;
        wave1.location.x = 0;
        wave1.location.y = 0;
        wave1.on = true;
        wave2.frequency = 3;
        wave2.amplitude = 2;
        wave2.wave_length = 5;
        wave2.phase = 0;
        wave2.location.x = -10;
        wave2.location.y = 0;
        wave2.on = true;
        wave3.on = false;
        wave4.on = false
        setting.crest = "#ffffff"
        setting.trough = "#ce0303"
        setting.gridSize = 100
        setting.resolution = 500
        setting.wireframe = false
        setting.marker = false
        cam = {position: [1.53,105,2.6], target:[1.5,-20,2.6]}
        return {setting,wave1,wave2,wave3,wave4,cam};
  }

  if (options=="beat") {
      wave1.frequency = 3;
      wave1.amplitude = 1;
      wave1.wave_length = 5;
      wave1.phase = 0;
      wave1.location.x = 0;
      wave1.location.y = 0;
      wave1.on = true;
      wave2.frequency = 3.2;
      wave2.amplitude = 1;
      wave2.wave_length = 5;
      wave2.phase = 0;
      wave2.location.x = 0;
      wave2.location.y = 0;
      wave2.on = true;
      wave3.on = false;
      wave4.on = false;
      setting.crest = "#07DAE2"
      setting.trough =  "#0000FF"
      setting.gridSize = 100
      setting.resolution = 500
      setting.wireframe = false
      setting.marker = true
      cam = {position: [6.5,105,5.14], target:[6.5,-0.7,5.14]}
      return {setting,wave1,wave2,wave3,wave4,cam};
    }

  if(options=="storm"){
        console.log("rose")
        wave1.frequency = 1;
        wave1.amplitude = 5;
        wave1.wave_length = 31;
        wave1.phase = 0;
        wave1.location.x = 0;
        wave1.location.y = 0;
        wave1.on = true;
        wave2.frequency = 3;
        wave2.amplitude = 1;
        wave2.wave_length = 5;
        wave2.phase = 0;
        wave2.location.x = -10;
        wave2.location.y = 0;
        wave2.on = true;
        wave3.on = false;
        wave4.on = false
        setting.crest = "#0c96eb"
        setting.trough = "#000000"
        setting.gridSize = 280
        setting.resolution = 500
        setting.wireframe = false
        setting.marker = false
        cam = {position: [12.94,27.36,-123.77], target:[32.6,-69.5,21.36]}
        return {setting,wave1,wave2,wave3,wave4,cam};
  }

  
 
  if (options=="empty") {
        wave1.frequency = 1;
        wave1.amplitude = 1;
        wave1.wave_length = 1;
        wave1.phase = 0;
        wave1.location.x = 0;
        wave1.location.y = 0;
        wave1.on = false;
        wave2.frequency = 1;
        wave2.amplitude = 1;
        wave2.wave_length = 1;
        wave2.phase = 0;
        wave2.location.x = 0;
        wave2.location.y = 0;
        wave2.on = false;
        wave3.frequency = 1;
        wave3.amplitude = 1;
        wave3.wave_length = 1;
        wave3.phase = 0;
        wave3.location.x = 0;
        wave3.location.y = 0;
        wave3.on = false;
        wave4.frequency = 1;
        wave4.amplitude = 1;
        wave4.wave_length = 1;
        wave4.phase = 0;
        wave4.location.x = 0;
        wave4.location.y = 0;
        wave4.on = false;
        setting.crest = "#ffffff"
        setting.trough =  "#000000"
        setting.gridSize = 100
        setting.resolution = 500
        setting.wireframe = false
        setting.marker=true
        cam = {position: [6.5,105,5.14], target:[6.5,-0.7,5.14]}
        return {setting,wave1,wave2,wave3,wave4,cam};
      }
    
  return {setting,wave1,wave2,wave3,wave4,cam};
}

export default setWave;

/*
storm sea pallet #0c96eb

storm storm pallet #
#7fcdff
#000000


demo2wave
07dae2
141163
*/