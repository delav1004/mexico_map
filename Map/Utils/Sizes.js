export default class Sizes{
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(widow.devicePixelRatio, 2)

        widow.addEventListener("resize", ()=>{
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width/this.height;
            this.pixelRatio = Math.min(widow.devicePixelRatio, 2)
        })
    }
}