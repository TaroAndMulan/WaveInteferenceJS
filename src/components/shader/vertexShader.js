const vertexShader = `
uniform float u_time;
uniform float[4] u_amplitudes;
uniform float[4] u_frequencies;
uniform float[4] u_wavelengths;
uniform float[4] u_phases;
uniform vec2[4] u_positions;
uniform bool[4] u_ons;
uniform int u_nWaves;
uniform bool u_marker;
varying float vY;
varying float[4] propotions;
varying float[4] heights;
varying float vSource;

void main() {

  vSource= 0.0;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec2 vPosition = vec2(modelPosition.x, modelPosition.z);
  for (int i=0;i<u_nWaves;i++){
    if(u_ons[i]){
      float frequency =  u_frequencies[i];
      float wavelength = u_wavelengths[i];
      float amplitude = u_amplitudes[i];
      vec2 wPosition = u_positions[i];
      if(length(wPosition-vPosition)<0.2){
        if(u_marker){
          vSource += 1.1;}
      }
      if (step(length(vPosition-wPosition),frequency*wavelength*u_time)>=1.0){
        heights[i] = sin(-1.0*length(vPosition-wPosition)*2.0*3.14159/wavelength + 2.0*3.14159*frequency* u_time + u_phases[i]) * amplitude; 
        modelPosition.y += heights[i];
        propotions[i] =  (heights[i]+amplitude)/(2.0*amplitude);
      }
    }

  }
 
  vY = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`

export default vertexShader

//  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
//modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
//  modelPosition.y += sin(-1.0*r* 2*PI/wave_length + 2*PI*wave_frequency*u_time) * wave_amplitude;
//varying float[2] propotion;
//uniform vec3[2] u_colors;
