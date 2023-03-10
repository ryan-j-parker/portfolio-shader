export default /* glsl */`varying vec2 vUv;
  uniform vec3 randomFactors;
  uniform float uTime;

  float random(vec2 st)
  {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    float strength = random(vUv * randomFactors.xy * max(1.0, uTime));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`;