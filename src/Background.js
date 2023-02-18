import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import mountain from "./models/mountain.glb";

const Background = () => {
    const loader = new GLTFLoader();
    loader.load(mountain, (d) => {
        const entity = document.getElementById("mountain");
        entity.object3D.add(d.scene);
    });

    return (
        <a-entity id="mountain" position="0 0 0" scale="15 15 15"></a-entity>
    );
}

export default Background;