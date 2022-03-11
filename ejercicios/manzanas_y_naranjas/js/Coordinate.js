class Coordinate{
    constructor (x,units){
        this.x = x
        this.units = units
    }

    calculate(other_coordinate){
        this.x = this.units + other_coordinate.x
    }
}

export default Coordinate