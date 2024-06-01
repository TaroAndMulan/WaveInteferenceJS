const vertexShader = `
uniform float u_time;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform float wave_amplitude;
uniform float wave_frequency;
uniform float wave_length;
varying float vY;
varying float height1;
varying float height2;

void main() {
  height1 = 0.0;
  height2  = 0.0;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec2 r = vec2(modelPosition.x, modelPosition.z);
  vec2 start = vec2(2.0,4.0);

  if (step(length(r),wave_frequency*wave_length*u_time)>=1.0){
    modelPosition.y += sin(-1.0*length(r)*2.0*3.14159/wave_length + 2.0*3.14159*wave_frequency* u_time + 3.14158/2.0) * wave_amplitude; 
    height1 = sin(-1.0*length(r)*2.0*3.14159/wave_length + 2.0*3.14159*wave_frequency* u_time + 3.14158/2.0) * wave_amplitude; 
    height1 =  (height1+wave_amplitude)/(2.0*wave_amplitude);
  }


  if (step(length(r-start),wave_frequency*wave_length*u_time)>=1.0){
    modelPosition.y += sin(-1.0*length(r-start)*2.0*3.14159/wave_length + 2.0*3.14159*wave_frequency* u_time + 3.14158/2.0) * wave_amplitude; 
    height2 = sin(-1.0*length(r-start)*2.0*3.14159/wave_length + 2.0*3.14159*wave_frequency* u_time + 3.14158/2.0) * wave_amplitude;
    height2 =  (height2+wave_amplitude)/(2.0*wave_amplitude);
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
