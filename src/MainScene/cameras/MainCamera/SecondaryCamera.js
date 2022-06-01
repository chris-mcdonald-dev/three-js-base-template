import { PerspectiveCamera } from "three";

const SecondaryCamera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Set the camera position
SecondaryCamera.position.x = -17;
SecondaryCamera.position.y = 12;
SecondaryCamera.position.z = 34;

// Optionally use a UI debugger/controller for properties while developing
// This can be used anywhere
import dat from 'dat.gui'
const gui = new dat.GUI()
Object.keys(SecondaryCamera.position).forEach(position => {
  gui.add(SecondaryCamera.position, position, 0, 100, 0.01)
})


export default SecondaryCamera