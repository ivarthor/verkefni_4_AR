import {
    Group,
    Mesh,
    BoxBufferGeometry,
    MathUtils,
    MeshLambertMaterial
} from '../../../vendor/three.module.js';

const radiansPerSecond = MathUtils.degToRad(1000);

// þurfti að búa til sér dekk fyrir hverja hlið því ég fann enga leið til að animate-a dekkin ef ég group-a þau

// vinstra framdekkið
function createAWheels() {
  // bý til dekkið
  const wheelGeometry = new BoxBufferGeometry(12, 12, 5);
  const wheelMaterial = new MeshLambertMaterial({ color: 0x333333 });
  const frontLefttWheel = new Mesh(wheelGeometry, wheelMaterial);
  
  // færi það á réttann stað
  frontLefttWheel.position.y = 6;  
  frontLefttWheel.position.x = 18;
  frontLefttWheel.position.z = 15;

  // animate-a það
  frontLefttWheel.tick = (delta) => {
    frontLefttWheel.rotation.z += radiansPerSecond * delta;
  };

    return frontLefttWheel;
}

// vinstra bakdekkið
function createBWheels() {
  // bý til dekkið
  const wheelGeometry = new BoxBufferGeometry(12, 12, 5);
  const wheelMaterial = new MeshLambertMaterial({ color: 0x333333 });
  const backLeftWheel = new Mesh(wheelGeometry, wheelMaterial);

  // færi það á réttann stað
  backLeftWheel.position.y = 6;
  backLeftWheel.position.x = -18;
  backLeftWheel.position.z = 15;
    
  // animate-a það
  backLeftWheel.tick = (delta) => {
    backLeftWheel.rotation.z += radiansPerSecond * delta;
  };

  return backLeftWheel;
}

// Hægri framdekkið
function createCWheels() {

  // bý til dekkið
  const wheelGeometry = new BoxBufferGeometry(12, 12, 5);
  const wheelMaterial = new MeshLambertMaterial({ color: 0x333333 });
  const frontRightWheel = new Mesh(wheelGeometry, wheelMaterial);
  
  // færi það á réttann stað
  frontRightWheel.position.y = 6;
  frontRightWheel.position.x = 18;
  frontRightWheel.position.z = -15;
  
  // animate-a það
  frontRightWheel.tick = (delta) => {
    frontRightWheel.rotation.z += radiansPerSecond * delta;
  };

  return frontRightWheel;
}

// Hægri bakdekkið
function createDWheels() {

  // bý til dekkið
  const wheelGeometry = new BoxBufferGeometry(12, 12, 5);
  const wheelMaterial = new MeshLambertMaterial({ color: 0x333333 });
  const backRightWheel = new Mesh(wheelGeometry, wheelMaterial);
  
  // færi það á réttann stað 
  backRightWheel.position.y = 6;
  backRightWheel.position.x = -18;
  backRightWheel.position.z = -15;
    
  // animate-a það
  backRightWheel.tick = (delta) => {
    backRightWheel.rotation.z += radiansPerSecond * delta;
  };

  return backRightWheel;
}

// bý til bílin sjálfan
function createCar() {
  // group til að geyma hluta bílsins
    const car = new Group();

    // Líkami bílsins
    const body = new Mesh(
      new BoxBufferGeometry(60, 15, 30),
      new MeshLambertMaterial({ color: "#cce60e" })
    );
    body.position.y = 12;
    car.add(body);
  
    // Rúðurnar
    const glass = new Mesh(
      new BoxBufferGeometry(33, 12, 24),
      new MeshLambertMaterial({ color: 0xffffff })
    );
    glass.position.x = -6;
    glass.position.y = 25.5;
    car.add(glass);
    
  
    return car;
}

export { createCar, createAWheels, createBWheels, createCWheels, createDWheels };