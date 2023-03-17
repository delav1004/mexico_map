import Map from "./Map.js"

export default class Camera {
    constructor(){
        this.map = new Map();
        this.sizes = this.map.sizes;
        this.scene = this.map.scene;
        this.canvas = this.map.canvas;
    }
}