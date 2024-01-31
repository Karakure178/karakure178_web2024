precision highp float;
precision highp int;

varying vec2 vTexCoord;

uniform sampler2D u_tex;
uniform float u_time;
uniform vec3 u_color;

float pi = 3.14159265358979;

#define RATE 0.75

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453) * 2.0 - 1.0;
}

float offset(float blocks, vec2 uv) {
  float shaderTime = u_time*RATE;
  return rand(vec2(shaderTime, floor(uv.y * blocks)));
}

void main() {
  vec2 uv = vTexCoord;
  vec4 tex = texture2D(u_tex, uv);
  gl_FragColor = tex;
  // gl_FragColor.r = texture2D(u_tex, uv + vec2(offset(64.0, uv) * 0.03, 0.0)).r;
  // gl_FragColor.g = texture2D(u_tex, uv + vec2(offset(64.0, uv) * 0.001, 0.0)).g;
  // gl_FragColor.b = texture2D(u_tex, uv + vec2(offset(64.0, uv) * 0.03*0.2, 0.0)).b;
  if(gl_FragColor == vec4(u_color,1.0)){
    gl_FragColor = vec4(0.0,0.0,0.0, 0.0);
  }
  //gl_FragColor = tex;
}

