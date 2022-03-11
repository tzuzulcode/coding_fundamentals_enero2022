import Coordinate from "./Coordinate.js"

class Simulation{
    constructor(apples,oranges,appleTreePos,orangeTreePos){
        this.appleTreePos = new Coordinate(appleTreePos)
        this.orangeTreePos = new Coordinate(orangeTreePos)
        this.apples = this.#convertToObject(apples,this.appleTreePos)
        this.oranges = this.#convertToObject(oranges,this.orangeTreePos)
    }

    #convertToObject(fruits,tree){
        const positions = []
        for(let fruit of fruits){
            const coor = new Coordinate(null,fruit)
            coor.calculate(tree)
            positions.push(coor)
        }
        return positions
    }

    simulate(start,end){
        let appleCount = 0
        let orangeCount = 0
        for(let i =0;i< this.apples.length;i++){
            //if(this.apples[i].x>=start && this.apples[i].x<=end)
            if(this.apples[i].x>=start && this.apples[i].x<=end){
                appleCount++
            }
            if(this.oranges[i].x>=start && this.oranges[i].x<=end){
                orangeCount++
            }
        }

        return [appleCount,orangeCount]
    }
}

export default Simulation