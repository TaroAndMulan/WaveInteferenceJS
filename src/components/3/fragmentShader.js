const fragmentShader = `
uniform float u_time;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_colorC;
uniform float wave_amplitude;
uniform float wave_frequency;
uniform float wave_length;
varying float vY;
varying float height1;
varying float height2;

void main() {
  vec3 color = mix(u_colorA, height1*u_colorB+height2*u_colorC, (vY+wave_amplitude)/(2.0*wave_amplitude)  ); 
  gl_FragColor = vec4(color, 1.0);
}

`

export default fragmentShader

//  vec3 color = mix(u_colorA, u_colorB, (wave_amplitude-vZ)/wave_amplitude+0.5); 
//  vec3 color = mix(u_colorA, u_colorB, (wave_amplitude-vZ)/wave_amplitude+0.5); 
