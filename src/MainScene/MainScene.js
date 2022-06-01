import { Scene, Color } from "three";
import meshes from './meshes/meshes'
import lights from "./lights/lights";

const MainScene = new Scene()

// Set background color
const backgroundColor = '#e1e1d6'
MainScene.background = new Color(backgroundColor)

// Add the scene's meshes
meshes.forEach(mesh => MainScene.add(mesh))

// Add the scene's lights
lights.forEach(light => MainScene.add(light))

// Optionally use a UI debugger/controller for properties while developing
// This can be used anywhere
import dat from 'dat.gui'
const guiParams = {backgroundColor}
const gui = new dat.GUI()
gui.addColor(guiParams, 'backgroundColor').onChange(newColor => {
  // Set what you want the changes to do in here
  MainScene.background.set(newColor) 
})

export default MainScene