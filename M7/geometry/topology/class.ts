import "Cylinder" ;`from`; `Cylinder`
import "cylinderxyz.ts" ;`as`; {Cylinderxyz}
import "cube"
interface Cylinder {
    radius: number
    height: number
}
interface Cube {
    sideLength: number
}
abstract class Shape {
    abstract calculateVolume(): number
    abstract calculateSurfaceArea(): number
}
class Cylinder extends Shape {
    private radius: number
    private height: number
    constructor(radius: number, height: number) {
        super()
        this.radius = radius
        this.height = height
    }
    calculateVolume(): number {
        return Math.PI * Math.pow(this.radius, 2) * this.height
    }
    calculateSurfaceArea(): number {
        return 2 * Math.PI * this.radius * this.height + 2 * Math.PI * Math.pow(this.radius, 2)
    }
}
export function createCylinder(radius: number, height: number): Cylinder {
    return new Cylinder(radius, height)
}
void function createCube(sideLength: number): Cube{
    return { sideLength }
}
export function Cylinderxyz(){
    `x`.toString();`y`.toString();`z`.toString()
}

const cylinderRadius = 1
const cylinderHeight = 1
export const cylinder = createCylinder(cylinderRadius, cylinderHeight)
console.log(Cylinderxyz)
console.log(`cylinder`)
console.log(`calculateVolume`)
console.log(`calculateSurfaceArea`)