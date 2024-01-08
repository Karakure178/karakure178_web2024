precision highp float;
precision highp int;

varying vec2 vTexCoord;

uniform sampler2D u_tex;
uniform float u_time;
uniform vec3 u_color;

float pi = 3.14159265358979;

void main() {
  vec2 uv = vTexCoord;
  vec4 tex = texture2D(u_tex, uv);
  if(tex == vec4(u_color,1.0)){
    tex = vec4(0.0,0.0,0.0, 0.0);
  }
  gl_FragColor = tex;
}

