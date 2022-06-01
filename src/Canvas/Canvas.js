import { Vector2, Raycaster } from "three";
import cameraController from "../MainScene/cameras/cameras";

class CanvasElement {
  constructor(canvasSelector) {
    this.canvas = document.querySelector(canvasSelector)
    this.pointerPosition = new Vector2();
    this.raycaster = new Raycaster();

    this.addEventListener('pointermove', this.onPointerMove);
  }

  /** Just a wrapper for addEventListener with some additional properties
   * @param {string} eventType Event type as a string
   * @param {(event: UIEvent) => any} callback The function that is run when the event is triggered
   */ 
  addEventListener(eventType, callback) {
    this.canvas.addEventListener(eventType, (event) => {
      callback(event, { 
        pointerPosition: this.pointerPosition, 
        raycaster: this.raycaster
      })
    })
  }

  /** Keeps track of pointer movements on the canvas
   * @param {UIEvent} event 
   * @param {{Vector2, Raycaster}} param1 
   */
  onPointerMove(event, {pointerPosition, raycaster}) {
    pointerPosition.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointerPosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointerPosition, cameraController.getCamera());
  }
}

const Canvas = new CanvasElement('canvas')

export default Canvas