import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Map {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.map = this.resources.items.map;
        this.actualMap = this.map.scene;
        // console.log(this.actualMap);

        this.lerp = {
            current: 0,
            target: 0, 
            ease: 0.1,
        };

        this.setModel();
        this.setAnimation();
        this.onMouseMove();
    }

    setModel() {
        this.actualMap.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }
        });

        this.scene.add(this.actualMap);
        this.actualMap.scale.set(0.05, 0.05, 0.05);
    }

    setAnimation(){
        this.mixer = new THREE.AnimationMixer(this.actualMap);
        console.log(this.room);
    }

    onMouseMove(){
        window.addEventListener("mousemove", (e) => {
            this.rotation = ((e.clientX-window.innerWidth / 2) * 2) /window.innerWidth;
            this.lerp.target = this.rotation*0.04;
           // console.log(e.clientX, this.rotation);
        });
    }

    resize() {

    }

    update() {
        this.lerp.current = GSAP.utils.interpolate (
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.mixer.update(this.time.delta);

        this.actualMap.rotation.y = this.lerp.current;
    }
}