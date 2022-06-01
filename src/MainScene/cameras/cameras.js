// Here is where you can add additional cameras.
// This class also allows you to easily control which camera
// is currently being used as needed from anywhere in the app.

import MainCamera from './MainCamera/MainCamera'
import SecondaryCamera from './MainCamera/SecondaryCamera'


class CameraController {
  // Any additional cameras can be added here.
  availableCameras = {
    'MainCamera': MainCamera,
    'SecondaryCamera': SecondaryCamera
  }
  
  /**
   * @param {string} initialCameraName The name of the camera we want to use as a string
   */
  constructor(initialCameraName) {
    this.currentCameraName = initialCameraName
  }

  
  /** Can be called to switch between one of our Three.js cameras
   * @param {string} newCameraName The name of the camera we want to use as a string
   */
  setCamera(newCameraName) {
    this.currentCameraName = newCameraName
  }
  
  /** This can be called whenever we need to use a Three.js camera.
   * @returns the current Three.js camera object
   */
  getCamera() {
    return this.availableCameras[this.currentCameraName]
  }
}

const cameraController = new CameraController('MainCamera')

export default cameraController
