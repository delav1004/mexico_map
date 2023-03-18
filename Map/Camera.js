import * as THREE from "three";
import Map from "./Map.js";

export default class Camera {
    constructor(){
        this.map = new Map();
        this.sizes = this.map.sizes;
        this.scene = this.map.scene;
        this.canvas = this.map.canvas;
        
        this.createPerspectiveCamera();
        this.createOrthographicCamera();
    }

    createOrthographicCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35, 
            this.sizes.aspect, 
            0.1, 
            1000
        );
        this.scene.add(this.perspectiveCamera)
    }

    createPerspectiveCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum)/2,
            (this.sizes.aspect * this.sizes.frustrum)/2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera)
    }
    resize(){
        //Updating perspective camera on rezise 
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        //Updating orthographic camera on rezise 
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.top = this.sizes.frustrum/2;
        this.orthographicCamera.bottom = -this.sizes.frustrum/2;

        this.orthographicCamera.updateProjectionMatrix();
    }

    update(){
        
    }
}