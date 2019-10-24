let kodersProcess = {
    gotInterviewed : false,
    gotDeposit : false,
    goToFirstClass : false, 
}
// function interview deposit firstClass
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
        object.goToFirstClass = false
        if (!object.goToFirstClass){
            return reject (new Error ('NO FUE A SU PRIMERA CLASE'))
        }
        return resolve (object)
    })
}
​
interview (kodersProcess)
    .then ((gotInterviewed) => {
        deposit (gotInterviewed)
            .then ((gotDeposit) =>{
                firstClass (gotDeposit)
                    .then ((goToFirstClass) =>{
                        console.log('kodersProcess:', goToFirstClass)
                    })
                    .catch (error =>{
                        console.log('ERROR GOING TO FIRST CLASS:', error)
                    })
            })
            .catch (error =>{
                console.log('ERROR AT THE DEPOSIT:', error)
            })            
    })
.catch (error =>{
    console.log ('ERROR GOT INTERVIEWED:', error)
})