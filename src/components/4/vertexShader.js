const vertexShader = `
uniform float u_time;
uniform float[4] u_amplitudes;
uniform float[4] u_frequencies;
uniform float[4] u_wavelengths;
uniform vec2[4] u_positions;
uniform int u_nWaves;
varying float vY;
varying float[4] propotions;
varying float vSource;

void main() {

  vSource= 0.0;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec2 vPosition = vec2(modelPosition.x, modelPosition.z);
  for (int i=0;i<u_nWaves;i++){
    float frequency =  u_frequencies[i];
    float wavelength = u_wavelengths[i];
    float amplitude = u_amplitudes[i];
    vec2 wPosition = u_positions[i];
    if(length(wPosition-vPosition)<1.0)
      vSource += 1.1;
    if (step(length(vPosition-wPosition),frequency*wavelength*u_time)>=1.0){
      propotions[i] = sin(-1.0*length(vPosition-wPosition)*2.0*3.14159/wavelength + 2.0*3.14159*frequency* u_time + 3.14158/2.0) * amplitude; 
      modelPosition.y += propotions[i];
      propotions[i] =  (propotions[i]+amplitude)/(2.0*amplitude);
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
