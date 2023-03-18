import * as THREE from "three";
import Experience from "../Experience.js";

export default class Map {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.map = this.resources.items.map;
        this.actualMap = this.map.scene;
        console.log(this.actualMap);

        this.setModel();
    }

    setModel(){
        this.scene.add(this.actualMap);
    }

    resize() {

    }

    update() {

    }
}