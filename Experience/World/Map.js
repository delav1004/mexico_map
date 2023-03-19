import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

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

    setModel() {
        this.actualMap.children.forEach(child => {
            child.castShadow = true;
            child.recieveShadow = true;
            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.recieveShadow = true;
                });
            }
        });

        this.scene.add(this.actualMap);
        this.actualMap.scale.set(0.05, 0.05, 0.05);
    }

    resize() {

    }

    update() {

    }
}