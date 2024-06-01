const fragmentShader = `
uniform float u_time;
uniform vec3[4] u_colors;
uniform float[4] u_amplitudes;
uniform vec2[4] u_positions;
uniform int u_nWaves;
varying float vY;
varying float[4] propotions;
varying float vSource;

vec3 scalecolor(vec3 c){
  int mxIndex = 0;
  for (int i=1;i<3;i++){
    if (c[i]>c[mxIndex]){
      mxIndex=i;
    }
  }
  if(c[mxIndex]<1.1)
    return c;

  return c/c[mxIndex];
}

void main() {
  vec3 black = vec3(0.0,0.0,0.0);
  vec3 color = vec3(0.0,0.0,0.0);
  float s=0.0;
  for (int i=0; i<u_nWaves; i++){
    s += propotions[i]*2.0*u_amplitudes[i];
  }
  for (int i=0; i<u_nWaves; i++){
    color += ((propotions[i]*2.0*u_amplitudes[i])/s)*mix(black,u_colors[i],propotions[i]);
  }
  if(vSource>0.1)
    gl_FragColor = vec4(0.0,1.0,0.0,0.3);
  else{
    gl_FragColor = vec4(color, 1.0);
  }
}

`

export default fragmentShader
//  vec3 color = mix(black, propotion[0]*u_colors[0]+propotion[1]*u_color[1], (vY+wave_amplitude)/(2.0*wave_amplitude)  ); 

//  vec3 color = mix(u_colorA, u_colorB, (wave_amplitude-vZ)/wave_amplitude+0.5); 
//  vec3 color = mix(u_colorA, u_colorB, (wave_amplitude-vZ)/wave_amplitude+0.5); 
//  vec3 color = mix(black, propotions[0]*u_colors[0]+propotions[1]*u_colors[1], (vY+u_amplitudes[0]+u_amplitudes[1])/(2.0*u_amplitudes[0]+2.0*u_amplitudes[1])  ); 
