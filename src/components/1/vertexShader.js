const vertexShader = `
uniform float u_time;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform float wave_amplitude;
uniform float wave_frequency;
uniform float wave_length;
varying float vZ;

void main() {

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float r = sqrt(modelPosition.x * modelPosition.x+modelPosition.y * modelPosition.y);
  if (step(r,wave_frequency*wave_length*u_time)>=1.0)
    modelPosition.z = sin(-1.0*r*2.0*3.14159/wave_length + 2.0*3.14159*wave_frequency* u_time + 3.14158/2.0) * wave_amplitude; 
 
  vZ = modelPosition.z;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`

export default vertexShader

//  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
//modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
//  modelPosition.y += sin(-1.0*r* 2*PI/wave_length + 2*PI*wave_frequency*u_time) * wave_amplitude;
