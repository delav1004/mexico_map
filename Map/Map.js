import * as THREE from "three";
import Sizes from "./Utils/Sizes.js"

export default class Map {
    static instance
    constructor(canvas) {
        if(Map.instance){
            return Map.instance
        }
        Map.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
    }
}