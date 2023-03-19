import * as THREE from "three";
import Experience from "../Experience.js";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.setSunlight();
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 2.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(19, 27, 5);
        this.scene.add(this.sunLight);
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        this.ambientlight = new THREE.AmbientLight("B8B8B8", .35);
        this.scene.add(this.ambientlight);

    }

    resize() {

    }

    update() {

    }
}