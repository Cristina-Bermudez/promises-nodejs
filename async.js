let kodersProcess = {
    gotInterviewed : false,
    gotDeposit : false,
    goToFirstClass : false, 
}
​
function interview (object){
    return new Promise((resolve, reject)=>{
        object.gotInterviewed = true
        if (!object.gotInterviewed){
           return reject (new Error ('NO FUE A LA ENTREVISTA'))
        }
        return resolve (object)
    })
}
function deposit (object){
    return new Promise ((resolve, reject) =>{
        object.gotDeposit = true
        if (!object.gotDeposit){
            return reject (new Error ('NO DIO SU DEPÓSITO'))
        }
        return resolve (object)
    })
}
​
function firstClass (object){
    return new Promise ((resolve, reject) =>{
        object.goToFirstClass = true
        if (!object.goToFirstClass){
            return reject (new Error ('NO FUE A SU PRIMERA CLASE'))
        }
        return resolve (object)
    })
}
​
async function main (){
    const gotInterviewed = await interview (kodersProcess)
    const gotDeposit = await deposit (gotInterviewed)
    const goToFirstClass = await firstClass (gotDeposit)
    console.log('kodersProcess:',goToFirstClass)
}
​
main ()
    .then ((inscriptionProcess) => {
        console.log ('kodersProcess:', inscriptionProcess)
    })
    .catch ((error) =>{
        console.log ('ERROR', error)
    })