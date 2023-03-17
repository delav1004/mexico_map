import * as THREE from "three";

export default class Map {
    static instance
    constructor(canvas) {
        if(Map.instance){
            return Map.instance
        }
        Map.instance = this;
        this.canvas = canvas;
    }
}