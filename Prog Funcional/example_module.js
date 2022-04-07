function getUserData(){
    return {
        success:true,
        data:{
            name:"Tzuzul"
        },
        message:"Usuario obtenido correctamente"
    }
}

export function printData(value){
    const p = document.createElement("p")
    p.innerText = value
    document.body.appendChild(p)
}

export default getUserData
// export {printData}