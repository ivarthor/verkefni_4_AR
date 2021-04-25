import { PerspectiveCamera } from '../../../vendor/three.module.js';

function createCamera() {
  const aspect = window.innerWidth / innerHeight;
  const camera = new PerspectiveCamera(
    45, // fov = Field Of View
    aspect, //aspect ratio
    1, // near clipping plane
    1000, // far clipping plane
  );
  // set myndavélina á réttann stað og segi henni að lýta á byrjunar punktunum
  camera.position.set(150, 150, 150);
  camera.lookAt(0,0,0)

  return camera;
}

export { createCamera };