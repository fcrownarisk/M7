import Cone,{} from "../cone.ts";
import {LightCone} from "./chen";
export class Cone {
    radius: number;
    height: number;
    constructor(radius: number, height: number) {
        this.radius = radius;
        this.height = height;
    }
    getVolume(): number {
        return (1/3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    }
    getSurfaceArea(): number {
        return Math.PI * this.radius * this.radius + 2 * Math.PI * this.radius * this.height;
    }
}
export class LightCone {
    radius: number;
    height: number;
    constructor(radius: number, height: number) {
        this.radius = radius;
        this.height = height;
    }
    getVolume(): number {
        return (1/3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    }
    getSurfaceArea(): number {
        return Math.PI * this.radius * this.radius + 2 * Math.PI * this.radius * this.height;
    }
}
class Chen {
    calculateTotalVolume(cone: Cone, lightCone: LightCone): number {
        return this.calculateConeVolume(cone) + this.calculateLightConeVolume(lightCone);
    }
    private calculateConeVolume(cone: Cone): number {
        return (1/3) * Math.PI * Math.pow(cone.radius, 2) * cone.height
    }
    private calculateLightConeVolume(lightCone: LightCone): number {
        return (1/3) * Math.PI * Math.pow(lightCone.radius, 2) * lightCone.height
    }
}
const chen = new Chen()
const myCone = new Cone(1, 1)
const myLightCone = new LightCone(1, 1)
console.log(chen.calculateTotalVolume(myCone, myLightCone))
console.log(myCone.getVolume())
console.log(myLightCone.getSurfaceArea())
console.log(myCone.getSurfaceArea())
console.log(myLightCone.getVolume())
