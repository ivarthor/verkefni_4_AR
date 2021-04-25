import { createCamera } from './components/camera.js';
import { createCar, createAWheels, createBWheels, createCWheels, createDWheels } from './components/car.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    let controller;

    function onSelect(){
      scene.add(car,wheelA,wheelB,wheelC,wheelD)
    }

    controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect );

    container.appendChild(ARButton.createButton(renderer))

    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, directionalLight } = createLights();

    
    const car = createCar();
    const wheelA = createAWheels();
    const wheelB = createBWheels();
    const wheelC = createCWheels();
    const wheelD = createDWheels();

    loop.updatables.push(controls, wheelA, wheelB, wheelC, wheelD);
    // adda ljósin og bíla hlutina í senuna
    scene.add(ambientLight, directionalLight, car, wheelA, wheelB, wheelC, wheelD, controller);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };

  }  
  // Render-a senuna
  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

  
export { World };