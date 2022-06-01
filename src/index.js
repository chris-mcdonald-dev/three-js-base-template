// Styles
import './scss/styles.scss'

// Three.js and related tools
import { WebGLRenderer } from 'three'
import TWEEN from '@tweenjs/tween.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scene and it's related components
import MainScene from './MainScene/MainScene'
import cameraController from './MainScene/cameras/cameras'
const CurrentCamera = cameraController.getCamera() 

// Canvas that Three.js will render to
import Canvas from './Canvas/Canvas'

// Renderer
const renderer = new WebGLRenderer({canvas: Canvas.canvas});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight );
const controls = new OrbitControls(CurrentCamera, renderer.domElement)

// Handle window resizes
window.addEventListener('resize', () => {
  CurrentCamera.aspect = window.innerWidth / window.innerHeight;
  CurrentCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Actual 3D render loop
function init() {
	requestAnimationFrame(init);
	renderer.render(MainScene, CurrentCamera);
  controls.update()
  TWEEN.update()
}

init();