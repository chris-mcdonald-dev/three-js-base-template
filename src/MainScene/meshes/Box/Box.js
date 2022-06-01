import {BoxGeometry, MeshStandardMaterial, Mesh} from 'three'
import {Tween, Easing} from '@tweenjs/tween.js'

// Canvas with pointer position and Raycaster for pointer events
import Canvas from '/src/Canvas/Canvas';

const geometry = new BoxGeometry( 10, 10, 10 );
const material = new MeshStandardMaterial( { color: '#a3a38b', roughness: .3 } );
const Box = new Mesh( geometry, material );
Box.rotation.x = -1
Box.rotation.y = .1
Box.rotation.z = 1

// Object Animations
Canvas.addEventListener('pointermove', (e) => {
  {
    const objectsMousedOver = Canvas.raycaster.intersectObject(Box);
    if (objectsMousedOver.length) {
      // Set the object's original position so we can return to it.
      Box.originalPosition ||= {...Box.position}
      // Cancel last animation if the user triggered the same object mid-animation
      Box.tween?.stop()
      
      // Create our object's new animation
      Box.tween = new Tween(Box.position)
      Box.tween
        .to({y: 4}, 350)
        .easing(Easing.Quadratic.InOut)
        .start()
    } else {
      if (Box.originalPosition) {
        Box.tween = new Tween(Box.position)
        .to(Box.originalPosition, 350)
        .easing(Easing.Quadratic.InOut)
        .start()
      }
    }
  }
});

export default Box