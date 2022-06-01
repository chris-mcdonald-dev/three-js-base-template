import { PerspectiveCamera } from "three";

const MainCamera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Set the camera position
MainCamera.position.x = 17;
MainCamera.position.y = 12;
MainCamera.position.z = 34;

// Optionally use a UI debugger/controller for properties while developing
// This can be used anywhere
import dat from 'dat.gui'
const gui = new dat.GUI()
Object.keys(MainCamera.position).forEach(position => {
  gui.add(MainCamera.position, position, 0, 100, 0.01)
})


export default MainCamera