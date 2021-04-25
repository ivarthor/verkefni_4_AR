import { DirectionalLight, AmbientLight, HemisphereLight } from '../../../vendor/three.module.js';
// bý til ljósin sem ég nota
function createLights() {
  
  const ambientLight = new AmbientLight(0xffffff, 0.6);

  const directionalLight = new DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(200, 500, 300);

  return { ambientLight, directionalLight };
}
  
  export { createLights };