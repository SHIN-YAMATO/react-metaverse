import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import rocketModel from "./models/yamato.glb";
import Prototypes from "prop-types";
import { useEffect } from "react";

const Yamato = (x, y, z) => {
    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(rocketModel, (d) => {
            const entity = document.getElementById('yamato');
            console.log(d);
            entity.object3D.add(d.scene);
        });
    }, []);


    return (
        <a-entity id="yamato" position={`${x} ${y} ${z}`} scale="30 30 30" rotation="0 0 40"></a-entity>
    );
}

Yamato.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Yamato;