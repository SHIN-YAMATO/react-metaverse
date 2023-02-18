import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import sky from "./star.jpg"
import mountain from "./models/mountain.glb";
import rocketModel from "./models/yamato.glb";

const App = () => {
  const loader = new GLTFLoader();
  loader.load(mountain, (d) => {
    const entity = document.getElementById("mountain");
    entity.object3D.add(d.scene);
  });
  loader.load(rocketModel, (d) => {
    const entity = document.getElementById('yamato');
    entity.object3D.add(d.scene);
  });

  return (
    <a-scene id="scene" light="defaultLightsEnabled: false">
      <a-assets>
        <img id="sky" src={sky} alt="sky" />
      </a-assets>

      <a-sky color="#fff" material="src: #sky" rotation="0 0 0"></a-sky>

      <a-entity id="mountain" position="0 -20 0" scale="15 15 15"></a-entity>
      <a-entity id="yamato" position="0 10 -20" scale="1 1 1" rotation="20 -50 -40">
        <a-entity light="type: directional; color: #ff8888; intensity: 30" position="0.5 2 60"></a-entity>
      </a-entity>
      <a-text value="Battleship Yamato" position="2 2 -3" color="white" rotation="0 0 -40"></a-text>

      <a-entity light="type: ambient; color: #fff; intensity: 1"></a-entity>
      <a-camera position="0 3 0" ></a-camera>
    </a-scene>

  );
}

export default App;
