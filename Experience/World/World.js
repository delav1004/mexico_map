import * as THREE from "three";
import Experience from "../Experience.js";

import Map from "./Map.js";
import Floor from "./Floor.js";
import Controls from "./Controls.js";
import Environment from "./Environment.js";

export default class World {
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.map = new Map();
            this.floor = new Floor();
            this.controls = new Controls();
        })
    }

    resize(){

    }

    update(){
        if (this.map){
            this.map.update();
        }
        if (this.controls){
            this.controls.update();
        }
    }
}